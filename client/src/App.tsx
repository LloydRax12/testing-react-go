import { Container, Stack } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

export const BASE_URL = "http://localhost:5000/api";

function App() {
  return (
    <Stack h="100hv">
      <NavBar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
