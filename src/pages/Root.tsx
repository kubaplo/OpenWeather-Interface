import { type ParentComponent } from "solid-js";
import Navigation from "~/components/Navigation";


const Root: ParentComponent = (props) => {
  return (
    <>
    <Navigation />
    <main class="">
      {props.children}
    </main>
    </>
    
  );
}

export default Root;