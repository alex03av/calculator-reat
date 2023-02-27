import React, { useEffect, useState } from "react";
import Display from "./Display";
function Operaciones({ numeros, opc, p }) {
  const [numactual, setNumactual] = useState([]);
  const [numanterior, setNumanterior] = useState([]);
  const [opcresul, setOpcresul] = useState("");
  const e3 = (n) => parseFloat(n.toString().replace(/,/g, ""));

  const OPERACIONES = {
    //operaciones de dos parametrps
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    x: (x, y) => x * y,
    "/": (x, y) => x / y,
    "%": (x, y) => x % y,
    pow: (x, y) => Math.pow(x, y),
    pow2: (x, y) => Math.pow(x, 2) + y * 0,
    "2vX": (x, y) => Math.sqrt(x) + y * 0,
    E: (x, y) => Math.pow(10, x) + y * 0,
    "1/x": (x, y) => 1 / x + y * 0,
  };
  const OPERACIONESONE = {
    //operaciones de un solo parametro
    pow2: (x) => Math.pow(x, 2),
    "2vX": (x) => Math.sqrt(x),
    "1/x": (x) => 1 / x,
    "+": (x) => x * +1,
    "-": (x) => x * -1,
    x: (x) => x * 0,
    "/": (x) => x / 0,
    "%": (x) => x % 0,
    pow: (x) => Math.pow(x, 0),
    E: (x) => Math.pow(10, x),
  };
  useEffect(() => {
    //almacenar datos
    if ((!numactual.length && !opc) || (opc == "CE" && opc !== "c")) {
      //todo bien
      setNumanterior([...numeros]);
    }
    if (opc && opc !== "c" && opc !== "CE") {
      setOpcresul(
        opc !== "=" && opc !== "c" && opc !== "CE" && opc !== "." ? opc : ""
      );
    }

    if (
      (numanterior.length && opc && !opc == "c") ||
      (opcresul.length && opc !== "c" && opc !== "CE")
    ) {
      //todo bien
      setNumactual([...numeros]);
    }
    if (opc == "c") {
      if (!numactual.length) {
        setNumanterior([...numeros]);
        setOpcresul("");
      } else {
        setNumactual([...numeros]);
      }
    }
    if (opc == "CE") {
      setNumactual([]);
      setOpcresul("");
    }
  }, [numeros, opc]);

  useEffect(() => {
    if (opc == "=" || opcresul.length == 1) {
      if (opc !== "c" && numactual.length && numanterior.length !== 0) {
        setNumanterior(OPERACIONES[opcresul](e3(numanterior), e3(numactual)));
      }
      if (
        (numactual.length == 0 && numanterior.length) ||
        (numactual.length && numanterior.length == 0)
      ) {
        setNumanterior(
          OPERACIONESONE[opcresul](
            e3(!numanterior.length ? numactual : numanterior)
          )
        );
      }
    }
  }, [opc]);

  return (
    <div>
      <Display result={numeros} p={numanterior} opc={opcresul} e3={e3} />
    </div>
  );
}

export default Operaciones;
