import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=40" />
          <div className={styles.authorInfo}>
            <strong>Jane Foster</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Janeiro às 16:50h" dateTime="2022-05-11 16:50:00">Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Esse é um post de teste</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#hashtag</a>{' '}
          <a href="">#kkk</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}