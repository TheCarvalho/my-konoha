import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React from "react";
// import comentarios from "../assets/data/comentarios.json";
import { useState } from "react";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./avatar";

// const lista = [
//   {
//     id: 1,
//     nome: "Gabriel",
//     comentario: "Top",
//     foto: "https://github.com/TheCarvalho.png",
//     soquinhos: 2,
//   },
//   {
//     id: 2,
//     nome: "Gabriel",
//     comentario: "Legal",
//     foto: "https://github.com/TheCarvalho.png",
//     soquinhos: 3,
//   },
//   {
//     id: 3,
//     nome: "Gabriel",
//     comentario: "Ótimo",
//     foto: "https://github.com/TheCarvalho.png",
//     soquinhos: 4,
//   },
// ];

export function Post({ author, content, publishedAt }) {
  const [comentarios, setComentarios] = useState(["post bacana"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleCreateNewComment(event);
    }
  }
  function handleCreateNewComment(event) {
    event.preventDefault();

    setComentarios([...comentarios, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToBeDeleted) {
    const commentsWithoutDeletedone = comentarios.filter((comment) => {
      return comment !== commentToBeDeleted;
    });

    setComentarios(commentsWithoutDeletedone);
  }

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
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
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "p") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <a key={index} href="#">
                {line.content}{" "}
              </a>
            );
          } else if (line.type === "pLink") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          onKeyDown={handleKeyDown}
          name="FormComentario"
          value={newCommentText}
          placeholder="Deixe um comentário"
          required
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {comentarios.map((comentario) => {
        return (
          <Comment
            key={comentario}
            onDeleteComment={deleteComment}
            comentario={comentario}
          />
          // <Comment
          //   key={index}
          //   nome={comentario.nome}
          //   comentario={comentario.comentario}
          //   foto={comentario.foto}
          //   soquinhos={comentario.soquinhos}
          // />
        );
      })}
    </article>
  );
}
