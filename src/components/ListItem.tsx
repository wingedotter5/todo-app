import styled from "styled-components";
import { TodoItemInterface } from "../TodoContext";
import Checkbox from "./Checkbox";

interface StyledComponentProps {
  completed: boolean;
}

const StyledComponent = styled.li<StyledComponentProps>`
  display: flex;
  background-color: var(--list-background-color);
  padding: 1.5rem;
  font-size: 18px;
  border-bottom: 1px solid lightgrey;

  > label {
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      text-decoration: ${(props) => (props.completed ? "line-through" : "")};
      cursor: pointer;
    }
  }

  .remove-button {
    width: 18px;
    height: 18px;
    border: none;
    cursor: pointer;
    margin-left: auto;
    background: transparent var(--icon-cross) center center no-repeat;
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
        <Checkbox
          checked={todo.completed}
          onChange={() => handleTodoToggle(todo.id)}
        />
        <span>{todo.title}</span>
      </label>
      <button className="remove-button" onClick={() => removeTodo(todo.id)} />
    </StyledComponent>
  );
};
export default ListItem;
