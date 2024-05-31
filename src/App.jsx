import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import posts from "./assets/data/posts.json"

function App() {
  const userLogado = "Abdon";

  return (
    <div className={styles.wrapper}>
      <Sidebar user={userLogado} />
      <main>
        {posts.map((post) => (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={new Date(post.publishedAt)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
