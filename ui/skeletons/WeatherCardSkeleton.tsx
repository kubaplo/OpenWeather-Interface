// Framer Motion
import { motion } from 'framer-motion';


function Placeholder({width, height="h-10"}: {width: string, height?: string}) {
  return (
    <div className={`${width} ${height} bg-g bg-[length:400%_100%] rounded animate-gradient`}></div>
  );
}

export default function WeatherCardSkeleton() {
  return (
    <div className="flex flex-col items-center w-full max-w-[500px] border border-sl rounded-xl shadow-xl overflow-hidden">
      <div className="flex justify-between gap-x-5 items-center w-full h-20 bg-sl px-5">
        <Placeholder width='w-48' />
        <Placeholder width='w-32' />
      </div>

      <div className="flex flex-col gap-y-5 justify-center items-center w-full p-5">
        <div className="flex flex-col gap-y-5 justify-center items-center">
          <Placeholder width='w-64' />
          <Placeholder width='w-48' />
        </div>

        <div className="flex justify-center items-center gap-x-5 w-full my-3">
          <hr className="border-0 border-b border-sl w-full" />
          <label className="text-xl">Details</label>
          <hr className="border-0 border-b border-sl w-full" />
        </div>

        <div className="flex flex-wrap gap-5 justify-center items-center">
          {
            Array(6).fill(null).map((item, i) =>
              <Placeholder key={i} width="w-32" />
            )
          }
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          <Placeholder width="w-full" height="h-20" />
        </div>
      </div>
    </div>
  );
}