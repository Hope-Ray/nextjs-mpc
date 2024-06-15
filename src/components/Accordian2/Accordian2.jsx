import { createContext, useContext, useRef, useEffect, useState } from "react"
import { FaAngleDown } from "react-icons/fa";

const AccordianContext = createContext()

export default function Accordian2({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="border-b bg-[#5488c4] rounded-md" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
          className={`flex justify-between items-center p-4 font-bold text-lg  ${open ? "text-white" : "text-slate-300"}`}
      >
        {trigger}
        <FaAngleDown 
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all duration-500"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}