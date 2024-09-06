// Icons
import Info from "@/ui/svg/Info";


type SpecialMessageProps = {
  content: string,
  type?: "warning"
};

export default function SpecialMessage({content, type}: SpecialMessageProps) {
  return (
    <div className="flex items-stretch gap-x-0 min-w-64 max-w-[500px] bg-sl rounded-xl p-0 shadow-md overflow-hidden">
      <div className="flex justify-center items-center bg-s p-4">
        <Info className="min-w-12 min-h-12 max-w-12 max-h-12 fill-a drop-shadow-strong" />
      </div>
      <div className="flex items-center p-4">
        <p className="text-sm sm:text-base text-p">{content}</p>
      </div>
    </div>
  );
}