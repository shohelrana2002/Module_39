import { useState } from "react";

export default function Playyer() {
  const [set, setPlyer] = useState(11);
  const plyerAdd = () => {
    setPlyer(set + 1);
  };
  const plyerRemove = () => {
    setPlyer(set - 1);
  };
  return (
    <div>
      <h3>Player:{set}</h3>
      <button onClick={plyerAdd}>Player Add</button>
      <button onClick={plyerRemove}>Player Remove</button>
    </div>
  );
}
