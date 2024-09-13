import LoadingIcon from "@/ui/svg/LoadingIcon";


export default function Loading({width='w-16'}: {width?: string}) {
  return (
    <div className="flex justify-center items-center p-2">
      <LoadingIcon className={width + " h-fit animate-floating [&_#cloud1]:fill-s [&_#cloud2]:fill-sl [&_#lightning1]:fill-warning [&_#lightning2]:fill-warning [&_#lightning1]:animate-pulsing [&_#lightning2]:animate-pulsing"} />
    </div>   
  );
}