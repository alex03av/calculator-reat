function Display({ result, p, opc, e3 }) {
  return (
    <div className="display">
      <div className="valor__anterior">
        {
          <div>
            <span>{p ? p : " "}</span>
            <span className="opc">
              {opc != "" && opc !== "c" ? opc : opc == "c"}
            </span>
            <span>{p && opc && result.length ? e3(result) : ""}</span>
          </div>
        }
      </div>
      <div className="valor__atual">
        {opc && result.length == 0
          ? "0"
          : result.length
          ? e3(result)
          : result.length == 0
          ? p
          : "0"}
      </div>
    </div>
  );
}

export default Display;
