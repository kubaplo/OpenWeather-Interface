// SolidJS
import { type VoidComponent } from "solid-js";

// Icons
import Info from "~/svg/Info";


type SpecialMessageProps = {
  content: string,
  type?: "warning"
};

const SpecialMessage: VoidComponent<SpecialMessageProps> = (props) => {
  return (
    <div class="flex items-stretch gap-x-0 min-w-64 max-w-[500px] bg-sl rounded-xl p-0 shadow-md overflow-hidden">
      <div class="flex justify-center items-center bg-s p-4">
        <Info class="min-w-12 min-h-12 max-w-12 max-h-12 fill-a drop-shadow-strong" />
      </div>
      <div class="flex items-center p-4">
        <p class="text-sm sm:text-base text-p">{props.content}</p>
      </div>
    </div>
  );
}

export default SpecialMessage;