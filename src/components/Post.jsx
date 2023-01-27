import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from "./Comment";
import { Avatar } from './Avatar';

import styles from "./Post.module.css";
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const publisedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publisedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()
    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment(event){
    setNewComment(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.position}</span>
          </div>
        </div>
        <time title={publisedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publisedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if(item.type === 'paragraph'){
            return <p key={item.content}>{item.content}</p>
          } else if(item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={event => handleCreateNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          placeholder="Deixe um comentário" 
          name="comment" 
          value={newComment}
          onChange={event => handleNewComment(event)}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment}/>
        })}
      </div>
    </article>
  );
}
