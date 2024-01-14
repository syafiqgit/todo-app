import { useState } from "react";
import AddTodo from "./components/add-todo";
import Navbar from "./components/navbar";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/todo-list";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  isEditing: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // const getCache = localStorage.getItem("todo-list");
  // let getCacheParse = [];
  // if (getCache !== null) {
  //   getCacheParse = JSON.parse(getCache);
  // }

  const addTodo = (title: string, description: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), title, description, completed: false, isEditing: false },
    ]);
    localStorage.setItem("todo-list", JSON.stringify(todos));
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, title: string, description: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };

  return (
    <div className="font-poppins bg-slate-300">
      <div className="md:w-1/2 mx-auto bg-white h-screen border flex flex-col">
        <Navbar />
        <div className="overflow-auto flex flex-col grow">
          {todos.map((todo: TodoType) => {
            return (
              <div key={todo.id}>
                <TodoList
                  data={todo!}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              </div>
            );
          })}
        </div>
        <div className="py-4">
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
