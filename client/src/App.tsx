import { Container, Stack } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

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
