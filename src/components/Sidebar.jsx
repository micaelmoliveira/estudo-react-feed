import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=100&q=40" 
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="http://github.com/micaelmoliveira.png"/>
        <strong>Micael Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}