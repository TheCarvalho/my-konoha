import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/TheCarvalho.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Abdon Carvalho</strong>
              <time
                title="26 de Maio de 2024 às 21:26h"
                dateTime="2024-05-26 21:36:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom dev, parabéns 👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
