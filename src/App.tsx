import { Post } from "./components/Post";
import { PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./styles/App.module.css";
import "./styles/global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/paolasgomes.png",
      name: "Paola Gomes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-25 01:00"),
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTo @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-28 00:00"),
  },
];

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
};
