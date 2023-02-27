import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";
import Operaciones from "./Components/Operaciones";
function Panel() {
  const [number, setNumber] = useState([]);
  const [operacion, setOperacion] = useState("");
  const datos = (x) => {
    if (!isNaN(x) || (x == "." && !number.includes("."))) {
      setNumber([...number, x]);
    }
    if (isNaN(x) && x !== ".") {
      setOperacion(x);
    }
    if (isNaN(x) && x == "c") {
      setNumber(number.slice(0, -1));
    }
  };

  useEffect(() => {
    if (operacion !== "." && operacion !== "c" && number.length) {
      setNumber([]);
    }
  }, [operacion]);

  return (
    <div className="App ">
      <Operaciones numeros={number} opc={operacion} />
      <div className="container--grip">
        <Buttons extraer={datos} num={"CE"} />{" "}
        <Buttons extraer={datos} num={"%"} />
        <Buttons extraer={datos} num={"pow"} />
        <Buttons extraer={datos} num={"c"} />
        <Buttons extraer={datos} num={"1/x"} />
        <Buttons extraer={datos} num={"pow2"} />
        <Buttons extraer={datos} num={"2vX"} />
        <Buttons extraer={datos} num={"/"} />
        <Buttons extraer={datos} num={7} />
        <Buttons extraer={datos} num={8} />
        <Buttons extraer={datos} num={9} />
        <Buttons extraer={datos} num={"x"} />
        <Buttons extraer={datos} num={4} />
        <Buttons extraer={datos} num={5} />
        <Buttons extraer={datos} num={6} />
        <Buttons extraer={datos} num={"-"} />
        <Buttons extraer={datos} num={1} />
        <Buttons extraer={datos} num={2} />
        <Buttons extraer={datos} num={3} />
        <Buttons extraer={datos} num={"+"} />
        <Buttons extraer={datos} num={"E"} />
        <Buttons extraer={datos} num={0} />
        <Buttons extraer={datos} num={"."} />
        <Buttons extraer={datos} num={"="} />{" "}
      </div>
    </div>
  );
}

export default Panel;
