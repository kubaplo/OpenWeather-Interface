// Components
import Navigation from "@/ui/components/Navigation";
import Footer from "@/ui/components/Footer";
import Notifications from "@/ui/components/Notifications";
import { NotificationsContextProvider } from '@/lib/reducers/NotificationsReducer';


export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <NotificationsContextProvider>
      <div className="flex flex-col items-center min-h-screen">
        <Notifications />
        <Navigation />
        <main className="flex flex-col items-center w-full flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </NotificationsContextProvider>
  );
}