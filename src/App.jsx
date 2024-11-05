import { Moon } from "phosphor-react"
import SearchBar from "./components/SearchBar/SearchBar"
import Button from "./components/Button/Button"
import TodoItem from "./components/TodoItem/TodoItem"
import { useState } from "react";

function App() {
  const [listaTodo, setListaTodo] = useState([]);
  const [todo, setTodo] = useState("");

  function addTodo() {
    setListaTodo([...listaTodo, todo]);
    setTodo("");
  }

  console.info("todo", todo);
  return (
    <div className="w-full flex flex-col justify-center h-screen pt-10 max-w-3xl mx-auto">
      <header className="w-full">
        <h1 className="text-center mb-4 text-[26px] font-medium">TODO LIST</h1>
        <div className="flex w-full gap-4">
          <SearchBar setTodo={setTodo} />
          <Button>ALL</Button>
          <Button>
            <Moon size={32} onClick={addTodo} />
          </Button>
        </div>
      </header>
      <main>
        {listaTodo.map((todo) => (
          <TodoItem />
        ))}
      </main>
    </div>
  )
}

export default App
