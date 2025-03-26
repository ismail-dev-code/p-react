import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Todo from "./Todo";
import Foods from "./Foods";

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
  const products = [
    {
      name: "rice",
      isAvailable: true,
      price: 34,
    },
    {
      name: "onion",
      isAvailable: true,
      price: 24,
    },
    {
      name: "dhal",
      isAvailable: false,
      price: 14,
    },
  ];
  const time = 10;
  return (
    <>
      <h1>React Core Concepts</h1>
      {products.map((product) => (
        <Foods
          name={product.name}
          isAvailable={product.isAvailable}
          price={`price: ${product.price}`}
        ></Foods>
      ))}

      <Todo task="Learn React" isDone={true} time={time}></Todo>
      <Todo task="Take a shower" isDone={true}></Todo>
      <Todo task="Revise React" isDone={false}></Todo>
      <Laptop name="HP" price="45000" hdd="500GB"></Laptop>
      <Laptop name="Acer" price="35000" hdd="400GB"></Laptop>
      <Laptop name="Apple" price="135000" hdd="1000GB"></Laptop>
      <Developers name="faisal" tech="javascript"></Developers>
      <Developers name="haque" tech="php"></Developers>
      <Developers name="hossain" tech="phython"></Developers>
      <Batsman></Batsman>
      <Counter></Counter>
      <Person name="abul" profession="farming" age="10"></Person>
      <Person name="hero alom" profession="dancing" age="12"></Person>
      <Person name="pinaki" profession="youtube" age="12"></Person>
      <Players name="shakib al hasan" runs="6000" age="20"></Players>
      <Players name="tamim iqbal" runs="5000" age="10"></Players>
      <Players name="mushfiqur" runs="5000" age="12"></Players>
      <Salami amount="30" event="rojar eid"></Salami>

      {/* <button onClick={handleClick}>click me1</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick={() => handleClick3(6)}>click me 3</button>
      <button onClick={function handleClick4(){alert("clicked 4")}}>click me 4</button> */}
    </>
  );
  function Developers(props) {
    return (
      <div className="card">
        <h3>Name: {props.name}</h3>
        <h3>Technology: {props.tech}</h3>
      </div>
    );
  }
}

function Laptop(props) {
  return (
    <div className="card bg-amber-50">
      <p className="bg-gray-300 w-fit mx-auto p-1 rounded-md">Laptop Details</p>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <h3>HDD: {props.hdd}</h3>
    </div>
  );
}

function Person(props) {
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <h3>age: {props.age}</h3>
      <h3>Profession: {props.profession}</h3>
    </div>
  );
}

function Players({ name, runs, age }) {
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <h3>Runs: {runs}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
}
function Salami({ amount, event }) {
  return (
    <div className="card">
      <h3>amount: {amount}</h3>
      <h3>occasion: {event}</h3>
    </div>
  );
}

export default App;
