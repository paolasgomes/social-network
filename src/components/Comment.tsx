import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  let [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(likeCount++);
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/paolasgomes.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paola Gomes</strong>
              <time title="28-05-22 08:13" dateTime="2022-05-28 08:13:58">
                Há cerca de 1 hora
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
