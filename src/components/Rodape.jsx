import styles from "./Rodape.module.css";

export function Rodape() {
  return (
    <footer className={styles.footer}>
      <a 
        href="https://github.com/TheCarvalho"
        rel="noopener noreferrer"
        target="_blank"
      >
        Desenvolvido por Abdon Carvalho
      </a>
    </footer>
  );
}
