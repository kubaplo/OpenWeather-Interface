'use client';

// React
import { useReducer, createContext, useContext } from 'react';

// Types
import { type NotificationType } from "@/lib/types/NotificationType";


// Define Action types:
type ActionAdded = {
  type: 'added',
  index: number,
  value: string,
  notificationType?: 'success' | 'warning' | 'error'
};

type ActionDeleted = {
  type: 'deleted',
  index: number
};

type ActionType = ActionAdded | ActionDeleted;

// Define module-scope variables:
let nextIndex = 0;

// Define reducer function:
function notificationsReducer(notifications: NotificationType[], action: ActionType) {
  switch (action.type) {
    case 'added': {
      const newNotification: NotificationType = {
        index: action.index,
        type: action.notificationType,
        value: action.value
      };

      return [...notifications, newNotification];
    }

    case 'deleted': {
      return notifications.filter(n => n.index !== action.index);
    }
  }
}

// Define contexts:
const NotificationsContext = createContext<NotificationType[]>([]);
const NotificationDispatchContext = createContext<React.Dispatch<ActionType>>((value: ActionType) => {});
const NotificationPushContext = createContext<((value: string, notificationType?: 'success' | 'warning' | 'error') => void)>(() => {});

// Define component that provides context:
export function NotificationsContextProvider({children}: {children: React.ReactNode}) {
  const [notifications, dispatch] = useReducer(notificationsReducer, []);

  function pushNotification(value: string, notificationType?: 'success' | 'warning' | 'error') {
    const currentIndex = nextIndex++;

    setTimeout(() => {
      dispatch({type: 'deleted', index: currentIndex});
    }, 15 * 1000);

    dispatch({type: 'added', index: currentIndex, value: value, notificationType: notificationType});
  }

  return (
    <NotificationsContext.Provider value={notifications}>
      <NotificationDispatchContext.Provider value={dispatch}>
        <NotificationPushContext.Provider value={pushNotification}>
          {children}
        </NotificationPushContext.Provider>
      </NotificationDispatchContext.Provider>
    </NotificationsContext.Provider>
  );
}

// Export custom hooks that allow to use contexts:
export function useNotifications() {
  return useContext(NotificationsContext);
}

export function useNotificationDispatch() {
  return useContext(NotificationDispatchContext);
}

export function useNotificationPush() {
  return useContext(NotificationPushContext);
}