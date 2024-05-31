import { Pencil } from "@phosphor-icons/react";
import dados from "../assets/data/dados.json";
import styles from "./Sidebar.module.css";
import { Avatar } from "./avatar";

export function Sidebar({ user }) {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1714779573259-216b0cf746be?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar foto={dados[user]?.foto} />
        <strong>{dados[user]?.nomeCompleto}</strong>
        <span>{dados[user]?.descricao}</span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <Pencil size={20} /> Editar o perfil
        </a>
      </footer>
    </aside>
  );
}
