import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="http://github.com/micaelmoliveira.png" />
          <div className={styles.authorInfo}>
            <strong>Micael Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Janeiro às 16:50h" dateTime="2022-05-11 16:50:00">Publicado a 1 hora</time>
      </header>
    </article>
  );
}