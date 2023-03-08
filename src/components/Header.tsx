import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";
console.log("styles => ", styles); //retorna um objeto com hach de valor único

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite" />
      <p>Ignite Feed</p>
    </header>
  );
};
//Componentes devem ser em letra maiúscula para não serem confundidos com tags HTML
/*Diferentemente da extensão css padrão, quando se trabalha com css modules, precisa nomear a variável e acessar a propriedade. Isso 
garante que a estilização não afete outros documentos, permitindo que a mesma classe seja utilizada em outros componentes */
