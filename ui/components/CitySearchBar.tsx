'use client';

// React
import { useState, useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import clsx from 'clsx';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Loading from "@/ui/components/Loading";
import KeyboardKey from "@/ui/components/KeyboardKey";

// Icons
import Location from "@/ui/svg/Location";

// Actions
import { getGeocode, type GetGeocodeReturnType } from '@/lib/actions/getGeocode';


function SearchResult({index, value, active, setCurrentSearchResult, currentSearchResultRef, handleCitySelect}: {index: number, value: string, active: boolean, setCurrentSearchResult: React.Dispatch<number>, currentSearchResultRef: React.MutableRefObject<number>, handleCitySelect: () => void}) {
  function handleMouseEnter(e: React.MouseEvent) {
    setCurrentSearchResult(index);
    currentSearchResultRef.current = index;
  }

  return (
    <div onMouseEnter={handleMouseEnter} onClick={handleCitySelect} className={clsx("relative flex items-center gap-x-5 w-full h-14 px-5 border-2 rounded-md shadow transition-all cursor-pointer", {"border-a": active, "border-sl": !active})}>
      <div className={clsx("absolute top-0 left-0 w-full h-full opacity-25 transition-all", {"bg-a": active, "bg-transparent": !active})}></div>
      <label className="relative text-xl text-center font-semibold cursor-pointer">{index + 1}.</label>
      <label className="relative text-base w-full cursor-pointer">{value}</label>
      <div className={clsx("flex items-center justify-center gap-x-1", {"visible": active, "invisible": !active})}>
        <KeyboardKey content="↑" />
        <KeyboardKey content="↓" />
        <KeyboardKey content="Enter" />
      </div>
    </div>
  );
}

export default function CitySearchBar() {
  // States:
  const [currentSearchResult, setCurrentSearchResult] = useState(0);
  const [cityList, setCityList] = useState<GetGeocodeReturnType>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Refs
  const currentSearchResultRef = useRef(0);
  const cityListLengthRef = useRef(0);
  const cityListRef = useRef<GetGeocodeReturnType>([]);


  // Element refs:
  const searchInput = useRef<HTMLInputElement>(null);


  async function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setIsLoading(true);
      const data = await getGeocode(e.target.value, 5);

      setCityList(data);
      cityListRef.current = data;

      if (Array.isArray(data)) {
        cityListLengthRef.current = data.length;
      }

      setCurrentSearchResult(0);
      currentSearchResultRef.current = 0;
    }

    else {
      setCityList([]);
      cityListRef.current = [];
      cityListLengthRef.current = 0;

      setCurrentSearchResult(0);
      currentSearchResultRef.current = 0;
    }

    setIsLoading(false);
  }

  function handleCitySelect() {
    if (Array.isArray(cityListRef.current)){
      console.log(
        JSON.stringify(cityListRef.current[currentSearchResultRef.current])
      );
    }
  }


  useEffect(() => {
    var keysPressed: {[key: string]: boolean} = {};

    function handleKeyDown(e: KeyboardEvent) {
      keysPressed[e.key] = true;

      if (keysPressed.Control && e.key === 'k') {
        e.preventDefault();
        searchInput.current?.focus();
      }

      else if (e.key === 'ArrowDown') {
        e.preventDefault();

        if (currentSearchResultRef.current + 1 < cityListLengthRef.current) {
          setCurrentSearchResult(c => c + 1);
          currentSearchResultRef.current++;
        }

        else {
          setCurrentSearchResult(0);
          currentSearchResultRef.current = 0;
        }

        searchInput.current?.blur();
      }

      else if (e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (currentSearchResultRef.current - 1 >= 0) {
          setCurrentSearchResult(c => c - 1);
          currentSearchResultRef.current--;
        }

        else {
          setCurrentSearchResult(cityListLengthRef.current === 0 ? 0 : cityListLengthRef.current - 1);
          currentSearchResultRef.current = cityListLengthRef.current === 0 ? 0 : cityListLengthRef.current - 1;
        }

        searchInput.current?.blur();
      }

      else if (e.key === 'Enter') {
        handleCitySelect();
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      delete keysPressed[e.key];
    }
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []);

  var loadingIcon = null;
  if (isLoading) {
    loadingIcon = <Loading width="w-8" />;
  }

  return (
    <div className="flex flex-col items-center gap-y-5 w-full max-w-[600px] p-5">

      <div className="group relative flex items-center gap-x-5 w-full h-12 border-b border-sl after:absolute after:left-0 after:bottom-[-1px] after:w-0 after:h-[2px] after:bg-a focus-within:after:w-full after:transition-all after:duration-300">
        <Location className="w-8 min-w-8 max-h-full stroke-1 stroke-sl group-focus-within:stroke-a transition-all duration-300" />
        <input ref={searchInput} onChange={useDebouncedCallback(handleOnChange, 300)} className="w-full h-full bg-transparent text-xl outline-none" placeholder="City name" />
        {loadingIcon}
        <div className="flex justify-center items-center gap-x-1">
          <KeyboardKey content="Ctrl" />
          <KeyboardKey content="K" />
        </div>
      </div>

      {
        ('code' in cityList) ? <label>{JSON.stringify(cityList)}</label> : 
        <motion.div layout='position' className="flex flex-col items-center w-full">
        <AnimatePresence>
        {
          cityList.map((item, i) =>
            <motion.div key={i + JSON.stringify(item)} initial={{x: -100, opacity: 0, height: 0, marginBottom: 0}} animate={{x: 0, opacity: 1, height: 'initial', marginBottom: '1.25rem', transition: {delay: 0.3}}} exit={{x: -100, opacity: 0, height: 0, marginBottom: 0}} className='w-full'>
              <SearchResult index={i} value={`${item.name}, ${item.state}, ${item.country}`} active={currentSearchResult === i} setCurrentSearchResult={setCurrentSearchResult} currentSearchResultRef={currentSearchResultRef} handleCitySelect={handleCitySelect} /> 
            </motion.div>
          )
        }
        </AnimatePresence>
        </motion.div>
      }      
      
      </div>
  );
}