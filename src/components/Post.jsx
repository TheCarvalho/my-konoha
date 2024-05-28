import React from "react";
import dados from "../data/dados.json";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./avatar";

export function Post({ user, comment }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar foto={dados[user]?.foto} />

          <div className={styles.authorInfo}>
            <strong>{dados[user]?.nomeCompleto}</strong>
            <span>{dados[user]?.descricao}</span>
          </div>
        </div>
        <time
          title="26 de Maio de 2024 às 21:26h"
          dateTime="2024-05-26 21:36:00"
        >
          Publicado há 42 min
        </time>
      </header>
      <div className={styles.content}>
        {dados[user].post.map((post, index) => (
          <p key={index}>{post}</p>
        ))}

        {dados[user]?.links && (
          <div className={styles.linksContainer}>
            {dados[user].links.map((link, index) => (
              <a key={index} href={link.url}>
                {link.texto}
                <br />
              </a>
            ))}
          </div>
        )}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {comment && comment.length > 0 && (
        <div className={styles.commentList}>
          {comment.map((comment, index) => {
            const soquinhosAleatorios = Math.floor(Math.random() * 11);

            return (
              <Comment
                key={index}
                nome={dados[comment]?.nomeCompleto}
                foto={dados[comment]?.foto}
                soquinhos={soquinhosAleatorios}
                comentario={dados[comment]?.comentario}
              />
            );
          })}
        </div>
      )}
    </article>
  );
}
