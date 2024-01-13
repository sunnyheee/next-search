import { getAllTodos } from "./api/todos";

const Home = async () => {
  const todosData = await getAllTodos();
  console.log(todosData, "todosData");

  return (
    <section className="py-10">
      <ul className="max-w-7xl m-auto">
        {todosData.map((data) => (
          <li key={data.id} className="border border-gray-300 mb-10">
            <p>userId: {data.userId}</p>
            <p>title: {data.title}</p>
            <p>completed: {data.completed === true ? "⭕️" : "❌"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
