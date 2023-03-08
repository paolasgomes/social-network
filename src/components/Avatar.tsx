import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
} //Não preciso colocar as propriedades usuais da tag imagem

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />;
};
