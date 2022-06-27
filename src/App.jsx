import Header from "./components/Header";
import './global.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

function App() {
  

  return (
    <div>
    <Header />
   
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />       
      </main>
    </div>
  </div>
  )
}

export default App

