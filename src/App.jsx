import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id:  1,
    author: {
      avatarUrl: 'https://github.com/mateuscarvalhodev.png',
      name: 'Mateus Carvalho',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto pro meu portFolio. É um projeto que fiz durante o ignite'},
      {type: 'link', content: 'github.com/mateuscarvalhodev'},
    ],
    publishedAt: new Date('2022-07-11 16:45:00'),
  },
  {
    id:  2,
    author: {
      avatarUrl: 'https://github.com/mateuscarvalhodev.png',
      name: 'Rafael Maia',
      role: 'Pedreiro',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto pro meu portFolio. É um projeto que fiz durante o ignite'},
      {type: 'link', content: 'github.com/mateuscarvalhodev'},
    ],
    publishedAt: new Date('2022-07-11 18:31:20'),
  },
]

function App() {
  

  return (
    <div>
    <Header />
   
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
        )
        })}      
      </main>
    </div>
  </div>
  )
}

export default App

