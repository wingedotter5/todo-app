import styled from "styled-components";
import Button from "./components/Button";
import { FilterType } from "./App";

interface FilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const StyledComponent = styled.div`
  display: flex;
  gap: 10px;
`;

const Filter = ({ filter, setFilter }: FilterProps) => {
  return (
    <StyledComponent>
      <Button active={filter === "all"} onClick={() => setFilter("all")}>
        All
      </Button>
      <Button active={filter === "active"} onClick={() => setFilter("active")}>
        Active
      </Button>
      <Button
        active={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </Button>
    </StyledComponent>
  );
};
export default Filter;
