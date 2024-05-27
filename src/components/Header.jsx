import styles from './Header.module.css'
import Logo from '../assets/logo.svg'
export function Header(){
  return(
    <header>
      <div className={styles.header}>
        <img src={Logo} alt="logo" />Teste</div>
    </header>
  );
}