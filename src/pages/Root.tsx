import { type ParentComponent } from "solid-js";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";


const Root: ParentComponent = (props) => {
  return (
    <div class="flex flex-col items-center min-h-screen">
      <Navigation />
      <main class="flex flex-col items-center w-full flex-1">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Root;