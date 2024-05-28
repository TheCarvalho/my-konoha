import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://d.wattpad.com/story_parts/764666522/images/15c3d6f398ed1b2b942797173830.jpg",
      name: "Naruto Uzumaki",
      role: "Genin",
    },
    content: [
      { type: "p", content: "Datebayo" },
      { type: "p", content: "Um dia eu me tornarei Hokage, tô certo" },
      { type: "pLink", content: "👉 konoha.com/hokage" },
      { type: "link", content: "#Konoha" },
      { type: "link", content: "#Shinobi" },
      { type: "link", content: "#Hokage" },
    ],
    publishedAt: new Date("2024-05-28 03:50"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/TheCarvalho.png",
      name: "Abdon Carvalho",
      role: "Desenvolvedor Front-End",
    },
    content: [
      { type: "p", content: "Vou terminar esse curso logo!!" },
      { type: "link", content: "React" },
    ],
    publishedAt: new Date("2024-01-28 22:50"),
  },
];

function App() {
  const userLogado = "Abdon";

  return (
    <div className={styles.wrapper}>
      <Sidebar user={userLogado} />
      <main>
        {post.map((post) => (
          <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
