// Components
import Navigation from "@/ui/components/Navigation";
import Footer from "@/ui/components/Footer";


export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col items-center w-full flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}