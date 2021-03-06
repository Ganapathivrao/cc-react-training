import logo from './logo.svg';
import './App.css';
import List from './components/List.js';

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
    <>
        <List info={info} />
    </>
  );
}

export default App;
