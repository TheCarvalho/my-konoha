import { HandFist, ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./avatar";

export function Comment({ nome, comentario, foto, soquinhos = 0 }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} foto={foto} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{nome}</strong>
              <time
                title="26 de Maio de 2024 às 21:26h"
                dateTime="2024-05-26 21:36:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comentario}</p>
        </div>
        <footer>
          <button>
            <HandFist size={20} />
            Soquinhos <span>{soquinhos}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
