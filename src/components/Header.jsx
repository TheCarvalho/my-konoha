import Logo from "../assets/logo.png";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <a href="https://thecarvalho.github.io/my-konoha/">
        <img src={Logo} alt="logo" />
        <h1>My Konoha</h1>
      </a>
    </header>
  );
}
