export const getAllTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("This is Error");
  }

  const data = await res.json();
  console.log(data, "data");

  return data;
};
