import { useSelector } from "react-redux";

interface RootState {
    todo: string[]; 
  }

export function TodoList() {
    const todos = useSelector((store: RootState) => {
        return store.todo;
    });

  return (
    <ul>
      {todos.map((todo: string) => <li key={todo}>{todo}</li>)}
    </ul>
  );
}