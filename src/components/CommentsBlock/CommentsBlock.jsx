import React from 'react';
import styles from './commentsblock.module.scss';

const CommentsBlock = () => {
  return (
    <section className={styles.comments}>
      <div className={styles.body}>
        <h5 className={styles.heading}>Comments</h5>
        <div className={styles.item}>
          <div className={styles.image}>
            <img src="https://mui.com/static/images/avatar/1.jpg" alt="" />
          </div>
          <div className={styles.desc}>
            <span className={styles.name}>Elon Musk</span>
            <span className={styles.text}>
              When displaying three lines or more, the avatar is not aligned at the top. You should
              set the prop to align the avatar at the top
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <img src="https://mui.com/static/images/avatar/4.jpg" alt="" />
          </div>
          <div className={styles.desc}>
            <span className={styles.name}>Elon Musk</span>
            <span className={styles.text}>
              When displaying three lines or more, the avatar is not aligned at the top. You should
              set the prop to align the avatar at the top
            </span>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.image}>
            <img src="https://mui.com/static/images/avatar/6.jpg" alt="" />
          </div>
          <div>
            <input className={styles.comments} type="text" placeholder="Write a Comment" />
          </div>
        </div>
        <div className={styles.button}>
          <button>Add comment</button>
        </div>
      </div>
    </section>
  );
};

export default CommentsBlock;
