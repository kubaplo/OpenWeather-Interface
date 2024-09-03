// SolidJS
import { A } from "@solidjs/router";
import { type VoidComponent, For } from "solid-js";
import type IconProps from "~/types/IconProps";

type FeatureCardProps = {
  href: string,
  icon: VoidComponent<IconProps>,
  title: string,
  description: string,
  list: string[]
};

const FeatureCard: VoidComponent<FeatureCardProps> = (props) => {
  return (
    <A href={props.href} class="group relative flex flex-col items-center gap-y-5 max-w-[400px] h-[500px] p-5 box-border border border-sl rounded-md shadow-xl hover:translate-y-[-10px] hover:shadow-2xl transition-all cursor-pointer">
      <div class="flex items-center w-full">
        <props.icon class="w-32 h-fit fill-a" />
        <label class="text-xl text-center w-full font-semibold pointer-events-none">{props.title}</label>
      </div>
      <div class="flex flex-col gap-y-5 w-full flex-1">
        <p>{props.description}</p>
        <ul class="text-sm list-disc marker:text-sl pl-5">
          <For each={props.list}>{
            (item, i) =>
              <li>{item}</li>  
          }</For>
        </ul>
        <div class="flex justify-center items-center w-48 sm:w-64 h-14 mt-auto border-a border-2 rounded-full self-center group-hover:bg-a group-hover:shadow-md transition-all">
          <label class="text-xs sm:text-sm group-hover:text-p transition-all pointer-events-none">Check {props.title.toLowerCase()}</label>
        </div>
      </div>
    </A>
  );
}

export default FeatureCard;