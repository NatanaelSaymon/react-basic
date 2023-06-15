import { Header } from "../Header";
import { Profile } from "../Profile";
import { Publication } from "../Publication";
import styles from "./style.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Profile />
      <Publication />
    </div>
  );
}
