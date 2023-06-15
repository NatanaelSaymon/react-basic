import styles from "./style.module.css";
import effectLeft from "../../assets/effect-left.svg";
import effectRight from "../../assets/effect-right.svg";
import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={effectLeft} className={styles.headerImgLeft} />
      <img src={logo} className={styles.logo} />
      <img src={effectRight} className={styles.headerImgRight} />
    </header>
  );
}
