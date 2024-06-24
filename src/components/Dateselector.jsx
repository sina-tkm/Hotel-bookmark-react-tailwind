import { useRef, useState } from "react";
import { MinusCircleIcon } from "@heroicons/react/16/solid";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import useOutsideClick from "./hooks/useOutsideClick";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import useOutsideDate from "./hooks/useOutsideDate";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function DateselectorHotel() {
  const [searchParams] = useSearchParams();
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    room: 1,
    children: 0,
    adult: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const navigate = useNavigate();
  const handleRoute = () => {
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      destination,
      options: JSON.stringify(option),
    });

    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  };

  const dateRef = useRef();
  useOutsideDate(dateRef, "clickDateDown", () => setOpenDate(false));

  return (
    <div className='flex mx-auto w-full justify-between pt-20 pb-10 px-14 relative '>
      <div ref={dateRef}>
        {openDate && (
          <DateRange
            className='absolute top-[125px] right-[290px] shadow-minicard border-2 z-[100]  '
            ranges={date}
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            moveRangeOnFirstSelection={true}
            rangeColors={["#FBC531"]}
          />
        )}
      </div>
      <div
        onClick={handleRoute}
        className='border w-[160px] flex justify-center items-center  bg-yellow-500 rounded-md'
      >
        <button>Search</button>
      </div>

      <div>
        <div
          id='mouseDropDown'
          className='  z-[100] flex cursor-pointer border-input justify-center items-center   px-4 h-[40px] w-[250px]  rounded-md relative gap-x-3 text-[13px] whitespace-nowrap'
          onClick={() => setOpenOption(!openOption)}
        >
          
          Children : ({option.children}) &nbsp;&bull;&nbsp; Adult: ({option.adult}
          ) &nbsp;&bull;&nbsp; adult: ({option.room})
        </div>
        {openOption && (
          <Minicard
            option={option}
            handleOption={handleOption}
            setOpenOption={setOpenOption}
          />
        )}
      </div>

      <div
        id='clickDateDown'
        onClick={() => setOpenDate(!openDate)}
        className=' flex whitespace-nowrap cursor-pointer relative gap-x-4 border-input justify-center items-center p-4 h-[40px] rounded-md'
      >
        {`${format(date[0].startDate, "MM/dd/yyyy")}`} &nbsp;&bull;&nbsp;{" "}
        {`${format(date[0].endDate, "MM/dd/yyyy")}`}
      </div>

      <div className='flex flex-col relative'>
        
        <input
          value={destination}
          name='destination'
          id='destination'
          onChange={(e) => setDestination(e.target.value)}
          type='text'
          className='border-input w-[250px] rounded-md h-[40px] flex   text-[16px] font-regular text-end px-2'
          placeholder='destination'
        />
      </div>
    </div>
  );
}

export default DateselectorHotel;

// mini card of select count of peape

export function Minicard({ option, handleOption, setOpenOption }) {
  const optionRef = useRef();
  useOutsideClick(optionRef, "mouseDropDown", () => setOpenOption(false));

  return (
    <div
      className='absolute flex flex-col p-[6px] w-fit  gap-y-4 border rounded-md px-[14px] bg-white shadow-minicard'
      ref={optionRef}
    >
      <Peaples
        handleOption={handleOption}
        type='room'
        minLimit={1}
        option={option}
        maxLimit={9}
      />
      <Peaples
        handleOption={handleOption}
        type='children'
        minLimit={0}
        option={option}
        maxLimit={9}
      />
      <Peaples
        handleOption={handleOption}
        
        type='adult'
        minLimit={1}
        option={option}
        maxLimit={9}
      />
    </div>
  );
}

function Peaples({ type, minLimit, option, handleOption, maxLimit}) {
  return (
    <div className='flex gap-x-6'>
      <button
        disabled={option[type] >= maxLimit}
        onClick={() => handleOption(type, "inc")}
      >
        <PlusCircleIcon className='font-size plus-color' />
      </button>
      <span>{option[type]}</span>
      <button
        disabled={option[type] <= minLimit}
        onClick={() => handleOption(type, "dec")}
      >
        <MinusCircleIcon className='font-size minus-color' />
      </button>
      <div>
        <span className='text-[16px]'>{type}</span>
      </div>
    </div>
  );
}
