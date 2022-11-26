import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { csv, csvFormat } from "d3";

export default function App() {
  const [data, setData] = useState(null);

  const csvURL =
    "https://gist.githubusercontent.com/Grace-H/6fa383b8274ae4de60bd9a2638455854/raw/namedColorsCSS.csv";

  const message = (data) => {
    let message = "";
    message = message + Math.round(csvFormat(data).length / 1024) + "kB\n";
    message = message + data.length + " rows\n";
    message = message + data.columns.length + " colomns";
    return message;
  };

  useEffect(() => {
    csv(csvURL).then(setData);
  });

  return (
    <>
      {/*pre-formatted: will show as in code*/}
      <pre>{data ? message(data) : "Loading..."}</pre>
    </>
  );
}
