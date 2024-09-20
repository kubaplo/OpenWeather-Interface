export default function KeyboardKey({content}: {content: string}) {
  return (
    <div className="hidden md:flex relative jusitfy-center items-center p-1 border border-sl rounded opacity-60">
      <div className="absolute top-0 left-0 w-full h-full bg-s opacity-25"></div>
      <label className="relative text-xs text-center select-none pointer-events-none">{content}</label>
    </div>
  );
}