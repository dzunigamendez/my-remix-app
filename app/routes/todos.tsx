import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import type { Todo } from "~/api/todos";
import { deleteTodo } from "~/api/todos";
import { addTodo, getTodos } from "~/api/todos";

export const loader: LoaderFunction = () => {
  const todos = getTodos();
  return json(todos);
};

// export const unstable_shouldReload: ShouldReloadFunction = () => false;

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const body = await request.formData();
    const name = body.get("name");
    if (name) {
      const todoCreated = addTodo(name.toString());
      return json({ todoCreated }, 201);
    }
  } else if (request.method === "DELETE") {
    const body = await request.formData();
    const todoId = body.get("todoId");
    const todoDeleted = deleteTodo(todoId!.toString());
    return json({ todoDeleted }, 200);
  }
};

export default function Todos() {
  const submit = useSubmit();
  const todos = useLoaderData<Todo[]>();

  function handleDelete(todoId: string) {
    submit({ todoId }, { method: "delete" });
  }

  return (
    <div>
      <h1>Todos App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Form method="post">
        <div>
          <label>Name</label>
          <input name="name" />
          <button type="submit">Create</button>
        </div>
      </Form>
    </div>
  );
}
