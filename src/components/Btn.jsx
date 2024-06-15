import React from "react";

const Btn = ({text , style}) => {
  return (
    <button className={ ` w-[200px] h-[53px] flex justify-center items-center  text-[16px]  rounded-[6px] transition-all ease-linear delay-150   md:my-[1rem] my-[0.3rem] ${style}  `}>
      {text}
    </button>
  );
};

export default Btn;
