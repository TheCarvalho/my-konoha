import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  const userLogado = "Abdon";

  return (
    <div className={styles.wrapper}>
      <Sidebar user={userLogado} />
      <main>
        <Post user="Naruto" comment={["Sasuke", "Tsunade"]} />
        <Post user="Sasuke" comment={["Naruto", "Abdon", "Jiraya"]} />
        <Post user="Jiraya" />
      </main>
    </div>
  );
}

export default App;
