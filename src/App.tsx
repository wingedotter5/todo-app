import * as React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Button from "./components/Button";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Filter from "./Filter";
import { TodoItemInterface, defaultTodoContext } from "./TodoContext";

const Header = styled.header`
  h1 {
    color: white;
  }
  margin-bottom: 20px;
`;

const AppContainer = styled.div`
  // max-width: 600px;
  padding: 1rem;
  #input-group {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: white;
    border-radius: 4px;
    padding: 1.5rem;
    margin-bottom: 20px;

    > input[type="text"] {
      width: 100%;
      font-size: 18px;
      font-family: "Josefin Sans", sans-serif;
      border: none;
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0 0 4px 4px;
`;

export type FilterType = "all" | "active" | "completed";

const App = () => {
  const [completed, setCompleted] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const [todos, setTodos] =
    React.useState<TodoItemInterface[]>(defaultTodoContext);
  const [filter, setFilter] = React.useState<FilterType>("all");

  const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTodos((prevTods) => [{ title, completed, id: uuidv4() }, ...prevTods]);
      setTitle("");
      setCompleted(false);
    }
  };

  const handleTodoToggle = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const todosToRender = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const clearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const itemsLeft = todos.reduce(
    (total, todo) => (todo.completed ? total : total + 1),
    0
  );

  return (
    <AppContainer>
      <Header>
        <h1>TODO</h1>
      </Header>
      <div id="input-group">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChange}
        />
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={handleTitleChange}
          value={title}
          onKeyDown={handleKeyDown}
        />
      </div>
      {todosToRender().length > 0 ? (
        <List>
          {todosToRender().map((todo, i) => (
            <ListItem
              key={i}
              todo={todo}
              handleTodoToggle={handleTodoToggle}
              removeTodo={removeTodo}
            />
          ))}
        </List>
      ) : (
        null
      )}
      <Footer>
        <span>{itemsLeft} items left</span>
        <Filter filter={filter} setFilter={setFilter} />
        <Button onClick={clearCompletedTodos}>Clear Completed</Button>
      </Footer>
    </AppContainer>
  );
};
export default App;
