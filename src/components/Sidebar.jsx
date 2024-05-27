import styles from './Sidebar.module.css'
import { Pencil } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1714779573259-216b0cf746be?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/TheCarvalho.png" alt="Foto do usuário" />

        <strong>Abdon Carvalho</strong>
        <span>Desenvolvedor Front-end</span>
      </div>
      <footer>
        <a href="#"> <Pencil size={20}/> Editar o perfil</a>
      </footer>
    </aside>
  );
}
