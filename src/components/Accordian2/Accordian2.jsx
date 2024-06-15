import { createContext, useContext, useRef, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const AccordianContext = createContext();

export default function Accordian2({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <div className="relative overflow-hidden group" onClick={() => setSelected(open ? null : value)}>
      <div className={`rounded absolute inset-0 bg-gradient-to-r from-brandColor to-brandColor  z-0 ${ open ? "translate-x-[0%] border-[1px]" : "translate-x-[100%]"} transition-transform duration-300`}/>
        <li
          className={`${
            open ? "" : ""
          } border-[1px] rounded relative z-10`}
          {...props}
        >
          <header
            role="button"
            className={`flex justify-between items-center p-4 text-xl font-medium z-10 ${
              open ? "text-slate-50" : "text-slate-500"
            }`}
          >
            {trigger}
            <FaAngleDown
              size={16}
              className={`transition-transform z-10 ${open ? "rotate-180" : ""}`}
            />
          </header>
          <div
            className="overflow-y-hidden transition-all duration-500 z-10"
            style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
          >
            <div className="pt-2 p-4 text-slate-50 z-10" ref={ref}>
              {children}
            </div>
          </div>
        </li>
    </div>
  );
}
