import logo from "./logo.svg";
import "./App.css";
import List from "./components/List.js";
import Search from "./components/Search.js";

const info = [
    {
        first:"Rahul",
        last:"Sharma",
        age:21,
        gender:"male",
    },
    {
        first:"Sneha",
        last:"David",
        age:28,
        gender:"female",
    },
    {
        first:"Tony",
        last:"Stark",
        age:43,
        gender:"male",
    },
];

function App() {
  return (
    <div>
        <Search />
        <List info={info} />
    </div>
  );
}

export default App;
