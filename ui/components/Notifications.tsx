'use client';

// Reducers
import { useNotifications, useNotificationDispatch } from '@/lib/reducers/NotificationsReducer';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import Close from '@/ui/svg/Close';
import Info2 from "@/ui/svg/Info2";
import Success from '@/ui/svg/Success';
import Warning from '@/ui/svg/Warning';
import Error from '@/ui/svg/Error';

// Types
import { type NotificationType } from '@/lib/types/NotificationType';


function NotificationVariant({type, value, index}: NotificationType) {
  const dispatch = useNotificationDispatch();

  var variant = {
    bg: 'bg-sl',
    fill: 'fill-sl',
    text: 'text-sl',
    Icon: Info2
  };

  if (type === 'success') {
    variant = {
      bg: 'bg-success',
      fill: 'fill-success',
      text: 'text-success',
      Icon: Success
    };
  }

  else if (type === 'warning') {
    variant = {
      bg: 'bg-warning',
      fill: 'fill-warning',
      text: 'text-warning',
      Icon: Warning
    };
  }

  else if (type === 'error') {
    variant = {
      bg: 'bg-error',
      fill: 'fill-error',
      text: 'text-error',
      Icon: Error
    };
  }

  return (
    <div onClick={() => dispatch({type: 'deleted', index: index})} className={`relative flex justify-center items-stretch min-h-20 w-full rounded-md shadow-around overflow-hidden pointer-events-auto cursor-pointer ${variant.bg}`}>
      <div className="relative flex justify-center items-center w-full max-w-20 min-w-20">
        <div className="absolute top-0 left-0 size-full bg-black opacity-50"></div>
        <variant.Icon className={`relative w-10 h-fit drop-shadow-strong ${variant.fill}`} />
      </div>
      <div className="flex items-center flex-grow p-5 overflow-hidden">
        <label className={`${variant.text} brightness-50 text-sm pointer-events-none`}>{value}</label>
      </div>
      <Close className={`size-3 absolute top-2 right-2 brightness-50 ${variant.fill}`} />
    </div>
  );
}

export default function Notifications() {
  const notifications = useNotifications();

  return (
    <div className="fixed top-0 right-0 w-full max-w-96 h-screen flex flex-col justify-end items-center gap-y-5 p-5 bg-none z-[1000] pointer-events-none">
      <AnimatePresence>
      {
        notifications?.map((item, i) =>
          <motion.div key={item.index} initial={{translateX: 'calc(100% + 1.25rem)'}} animate={{translateX: '0%'}} exit={{translateX: 'calc(100% + 2rem)'}} className="flex justify-end items-center w-full">
            <NotificationVariant type={item.type} value={item.value} index={item.index} />
          </motion.div>
        )
      }
      </AnimatePresence>
    </div>
  );
}