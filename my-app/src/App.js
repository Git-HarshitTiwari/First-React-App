import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
 // const items = ["Item 1, Item 2,Item 3, Item 4,Item 5"];
  const [items, setItems] = useState([

    "Item 1, Item 2,Item 3, Item 4,Item 5"
  ])

  const [value, setValue] = useState("");

  function onValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value)
  }


  function onAdd() {
    console.log("Add Button Clicked");
    console.log(value);

    const newItems = [...items,value];
    setItems(newItems);
    setValue("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>

        <input type="text" 
        placeholder= "New Task:"
        value={value}
        onChange={onValueChange}
        />
        <button onClick={onAdd}>Add</button>




        <ol>
          {items.map((item,i) => (
            <li key={i}style={{
              color: "Yellow"
            }}>{item}</li>
        ))}
        </ol>

      </header>
    </div>
  );
}

export default App;
