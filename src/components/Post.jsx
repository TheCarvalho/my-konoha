import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React from "react";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./avatar";

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{locale:ptBR, addSuffix: true})
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar foto={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(line=>{
          if(line.type === "p"){
            return <p>{line.content}</p>
          } else if(line.type ==="link"){
            return <a href="#">{line.content} </a>
          } else if(line.type ==="pLink") {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <Comment
        nome="gabriel"
        comentario="top"
        foto="https://github.com/TheCarvalho.png"
        soquinhos={2}
      />
      <Comment
        nome="gabriel"
        comentario="top"
        foto="https://github.com/TheCarvalho.png"
        soquinhos={2}
      />
    </article>
  );
}
