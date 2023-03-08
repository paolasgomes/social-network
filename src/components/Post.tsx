import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatar_url: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreatedNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]); //principio da imutabilidade, eu passo como é o novo array com os novos valores
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  };

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={post.author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreatedNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}; //Propriedade props aplicada como parametro, porém, estou selecionando as propriedades do objeto que quero trabalhar
