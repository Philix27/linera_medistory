import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function Button(props: { text: string; onClick: VoidFunction; }) {
  const router = useRouter();
  return (
    <div className={styles.link}>
      <input type="button" value={props.text} onClick={props.onClick} />
    </div>
  );
}
