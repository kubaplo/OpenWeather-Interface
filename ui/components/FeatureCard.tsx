// Next
import Link from "next/link";

// Types
import type IconProps from "@/lib/types/IconProps";


type FeatureCardProps = {
  href: string,
  Icon: React.ComponentType<IconProps>,
  title: string,
  description: string,
  list: string[]
};

export default function FeatureCard({href, Icon, title, description, list}: FeatureCardProps) {
  return (
    <Link href={href} className="group relative flex flex-col items-center gap-y-5 max-w-[400px] h-[500px] p-5 box-border border border-sl rounded-md shadow-xl lg:hover:translate-y-[-10px] lg:hover:shadow-2xl transition-all cursor-pointer">
      <div className="flex items-center w-full">
        <Icon className="w-32 h-fit fill-a" />
        <label className="text-xl text-center w-full font-semibold pointer-events-none">{title}</label>
      </div>
      <div className="flex flex-col gap-y-5 w-full flex-1">
        <p>{description}</p>
        <ul className="text-sm list-disc marker:text-sl pl-5">
          {
            list.map((item, i) =>
              <li key={i}>{item}</li>  
            )
          }
        </ul>
        <div className="flex justify-center items-center w-48 sm:w-64 h-14 mt-auto border-a border-2 rounded-full self-center group-hover:bg-a group-hover:shadow-md transition-all">
          <label className="text-xs sm:text-sm group-hover:text-p transition-all pointer-events-none">Check {title.toLowerCase()}</label>
        </div>
      </div>
    </Link>
  );
}