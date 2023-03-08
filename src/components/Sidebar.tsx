import { PencilLine } from "phosphor-react"; //é recomendado utilizar bibliotecas de ícones, pois senão dá muito trabalho e gera mto carregamento

import styles from "./Sidebar.module.css";
import coverImage from "../assets/cover-image.png";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImage} />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/paolasgomes.png" />
        <strong>Paola Gomes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
