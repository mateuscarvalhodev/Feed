import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';

export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR, 
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true
        
    })
    return(
        <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime="2022-05-11 08:13:30">
                    {publishedDateRelativeToNow}
                    </time>
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