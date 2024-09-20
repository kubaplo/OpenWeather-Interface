'use client';

// React
import { useState } from 'react';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import Like from "@/ui/svg/Like";
import Warning from "@/ui/svg/Warning";
import Error from "@/ui/svg/Error";

// Types
import IconProps from "@/lib/types/IconProps";
import { GetAirPollutionReturnType } from "@/lib/actions/getAirPollution";

type Categories = {
  name: string,
  color: string,
  icon: React.FunctionComponent<IconProps>
}[];

export default function AirPollutionBadge({data}: {data: GetAirPollutionReturnType}) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const airPollutionCategories: Categories = [
    {name: 'Good', color: 'bg-success', icon: Like},
    {name: 'Fair', color: 'bg-warning', icon: Warning},
    {name: 'Moderate', color: 'bg-warning', icon: Warning},
    {name: 'Poor', color: 'bg-error', icon: Error},
    {name: 'Very poor', color: 'bg-error', icon: Error}
  ];

  if ('main' in data) {
    const currentCategory = airPollutionCategories[data.main.aqi];
    const Icon = currentCategory.icon;

    return (
      <div onClick={() => setDetailsVisible(d => !d)} className={`flex flex-col items-center w-full mt-10 py-3 px-10 rounded-xl cursor-pointer ${currentCategory ? currentCategory.color : 'bg-sl'}`}>
        <div className="flex justify-center items-center gap-x-10 w-full">
          <Icon className="w-16 min-w-16 h-fit fill-s hidden sm:block" />
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-wrap justify-center items-center gap-x-2">
              <label className="text-xl text-center font-semibold pointer-events-none">Air quality:</label>
              <label className="text-xl text-center font-bold pointer-events-none">{currentCategory ? currentCategory.name : '???'}</label>
            </div>
            <label className="text-xs sm:text-sm text-center pointer-events-none">{`(Tap to ${detailsVisible ? 'hide' : 'show'} details)`}</label>
          </div>
        </div>

        <AnimatePresence>
          {
            detailsVisible ?
            <motion.div initial={{height: '0', marginTop: '0', opacity: 0}} animate={{height: 'auto', marginTop: '1.25rem', opacity: 1}} exit={{height: '0', marginTop: '0', opacity: 0}} className="flex flex-col items-center gap-y-1 w-full overflow-hidden">
              <label className="text-sm sm:text-base text-center mb-2">Concentrations of specific components</label>
              <label className=""><span className="font-semibold">CO: </span>{data.components.co}</label>
              <label className=""><span className="font-semibold">NO: </span>{data.components.no}</label>
              <label className=""><span className="font-semibold">NO2: </span>{data.components.no2}</label>
              <label className=""><span className="font-semibold">O3: </span>{data.components.o3}</label>
              <label className=""><span className="font-semibold">SO2: </span>{data.components.so2}</label>
              <label className=""><span className="font-semibold">PM2.5: </span>{data.components.pm2_5}</label>
              <label className=""><span className="font-semibold">PM10: </span>{data.components.pm10}</label>
              <label className=""><span className="font-semibold">NH3: </span>{data.components.nh3}</label>
            </motion.div> : null
          }
        </AnimatePresence>
      </div>
    );
  }

  else {
    return (
      <div className="flex justify-center items-center w-full h-20 mt-10 bg-sl rounded-xl cursor-pointer">
        <label className="text-p text-xl text-center font-semibold pointer-events-none">Air quality</label>
      </div>
    );
  }
}