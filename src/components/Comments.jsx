import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comments.module.css';

export function Comments({ content }) {
    return(
        <>
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/mateuscarvalhodev.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Carvalho</strong>
                            <time title="26 de junho as 18:42" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                    Aplaudir
                </footer>
            </div>
        </div>
        </>
    )
}