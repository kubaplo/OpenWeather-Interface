// Framer Motion
import { motion } from 'framer-motion';

// Types
import { type Units } from '@/lib/types/Units';

// Functions
import capitalize from '@/lib/functions/capitalize';


export default function UnitsSelector({units, setUnits}: {units: Units, setUnits: React.Dispatch<Units>}) {
  const availableUnits: Units[] = ['metric', 'imperial', 'standard'];

  function handleClick(value: Units) {
    setUnits(value);
  }

  return (
    <div className="flex justify-center items-center p-1 bg-sl rounded-md shadow text-p">
      {
        availableUnits.map((item, i) =>
          <div key={i} onClick={() => handleClick(item)} className="relative px-4 py-2 rounded cursor-pointer">
            <label className="relative pointer-events-none z-[1]">{capitalize(item)}</label>
            {
              (units === item) ? <motion.div layoutId='background' className='absolute top-0 left-0 w-full h-full rounded bg-a' /> : null
            }
          </div>
        )
      }
    </div>
  );
}