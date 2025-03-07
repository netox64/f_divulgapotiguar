import styles from "./letreiro.module.css";

export interface ILetreiroProps {
  title: string;
  objAnunciado:string;
}
export const Letreiro = ({ title,objAnunciado }: ILetreiroProps) => {
  return (
    <div className={styles.letreiro}>
      <p>{title}</p>
      <br />
      <h1>{objAnunciado.toLocaleUpperCase()}</h1>
    </div>
  );
};
