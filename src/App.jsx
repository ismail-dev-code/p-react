
import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";

function App() {
  
  // function handleClick() {
  //   alert("click hoice 1");
  // }
  // const handleClick2 = () => {
  //   alert("click hoice 2");
  // };
  // const handleClick3 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick={handleClick}>click me1</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick={() => handleClick3(6)}>click me 3</button>
      <button onClick={function handleClick4(){alert("clicked 4")}}>click me 4</button> */}
    </>
  );
}

export default App;
