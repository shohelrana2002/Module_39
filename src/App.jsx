import "./App.css";
import Count from "./Count";
import Playyer from "./Playyer";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => alert("Button Clicked2");
  function perameter(num) {
    alert(num + 5);
  }
  ///  pp time

  const paramsAdd = (number) => {
    alert(number * 4);
  };
  return (
    <>
      <h1>Vite </h1>
      <Users></Users>
      <Count></Count>
      <Playyer></Playyer>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      {/* perameter newoar jono onClick a function dite habe  */}
      <button onClick={() => perameter(5)}>Click Me</button>
      {/* dairect  function  */}
      {/* ppp */}

      <button onClick={() => paramsAdd(4)}>Add All Time 4* </button>
      <button
        onClick={() => {
          alert("Clicked Button3");
        }}
      >
        Click Me
      </button>
    </>
  );
}

export default App;
