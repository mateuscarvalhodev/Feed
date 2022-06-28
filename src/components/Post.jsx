import { Avatar } from './Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';

export function Post() {
    return(
        <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/mateuscarvalhodev.png" />
                    <div className={styles.authorInfo}>
                        <strong>Mateus Carvalho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="26 de junho as 18:42" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto pro meu portFolio. É um projeto que fiz durante o ignite</p>
                <p><a href="https://github.com/mateuscarvalhodev" target="_blank"> github.com/mateuscarvalhodev</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                placeholder="Deixe um comentário"
                />
                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                <Comments />
                <Comments />
                <Comments />
            </div>
        </article>
        </>
    )
}