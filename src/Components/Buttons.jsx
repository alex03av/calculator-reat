import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace, MdClose, MdOutlineCached } from "react-icons/md";
import {
  TbDivide,
  TbEqual,
  TbMath,
  TbMinus,
  TbPlus,
  TbSuperscript,
  TbCodeMinus,
  TbLayersIntersect,
  TbPercentage,
} from "react-icons/tb";

function Buttons({ num, extraer, borrar }) {
  const [buttonstyle, setButtonstyle] = useState("");
  const [igual, setIgual] = useState("");
  useEffect(() => {
    if (isNaN(num)) {
      setButtonstyle("igualdad");
      if (num === "=") {
        setIgual("result");
      }
    }
  }, []);

  const valor = () => {
    extraer(num);
  };

  const OPERACIONES = {
    "+": <TbPlus />,
    "-": <TbMinus />,
    pow: <TbLayersIntersect />,
    "/": <TbDivide />,
    ".": ",",
    "E": "EXP",
    "2vX": <TbMath />,
    pow2: <TbSuperscript />,
    "1/x": (
      <div className="divp">
        <p>1</p>
        <TbMinus />
        <p>
          <MdClose />
        </p>
      </div>
    ),
    CE: <MdOutlineCached />,
    c: <MdKeyboardBackspace />,
    x: <MdClose />,
    "%": <TbPercentage />,
    "=": <TbEqual />,
  };
  return (
    <button onClick={valor} className={`boton ${buttonstyle} ${igual}`}>
      {isNaN(num) ? OPERACIONES[num] : num}
    </button>
  );
}

export default Buttons;
