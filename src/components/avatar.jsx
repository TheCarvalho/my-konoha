import styles from "./avatar.module.css";

export function Avatar({ hasBorder = true, foto }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatarNoBorder}
      src={foto}
      alt="Foto do usuário"
    />
  );
}
