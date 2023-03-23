import styled from "styled-components";
import { TodoItemInterface } from "../TodoContext";

interface StyledComponentProps {
  completed: boolean;
}

const StyledComponent = styled.li<StyledComponentProps>`
  display: flex;
  background-color: white;
  padding: 1.5rem;
  font-size: 18px;
  border-bottom: 1px solid lightgrey;

  > label {
    display: flex;
    align-items: center;
    gap: 20px;

    input,
    span {
      cursor: pointer;
    }

    > span {
      text-decoration: ${(props) => (props.completed ? "line-through" : "")};
    }
  }

  .remove-button {
    margin-left: auto;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 18px;
  }
`;

interface ListItemProps {
  todo: TodoItemInterface;
  handleTodoToggle: (id: string) => void;
  removeTodo: (id: string) => void;
}

const ListItem = ({ todo, handleTodoToggle, removeTodo }: ListItemProps) => {
  return (
    <StyledComponent completed={todo.completed}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleTodoToggle(todo.id)}
        />
        <span>{todo.title}</span>
      </label>
      <button className="remove-button" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </StyledComponent>
  );
};
export default ListItem;