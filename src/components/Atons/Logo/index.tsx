import Image from "next/image";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={`${styles.logo}`} data-testid="logo" >
      <Image className={`${styles.imagem}`}  src={"/imgs/logo.png"} alt={"logo do site"} width={150} height={80} />
    </div>
  );
};
