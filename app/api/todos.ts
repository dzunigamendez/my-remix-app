declare global {
  var __todos: Todo[] | undefined;
}

export type Todo = {
  id: string;
  name: string;
};

function uuid(): string {
  return Math.random().toString(16);
}

const seed: Todo[] = [{ id: uuid(), name: "JavaScript" }];

let todos: Todo[];

if (process.env.NODE_ENV === "production") {
  todos = [...seed];
} else {
  if (!global.__todos) {
    global.__todos = [...seed];
  }
  todos = global.__todos;
}

export function getTodos() {
  return todos;
}

export function addTodo(name: string): Todo {
  const newTodo = { id: uuid(), name };
  todos.push(newTodo);
  return newTodo;
}

export function deleteTodo(id: string): Todo | undefined {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  return todos.splice(todoIndex, 1)[0];
}
