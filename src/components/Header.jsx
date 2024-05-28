import Logo from "../assets/logo.png";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <img src={Logo} alt="logo" />
        My Konoha
      </div>
    </header>
  );
}
