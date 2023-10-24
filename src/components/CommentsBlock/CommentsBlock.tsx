import React from 'react';
import styles from './commentsblock.module.scss';
import { authData, selectIsAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { commentSelector, commentTextSelector } from '../../redux/comment/selectors';
import { fetchComment, fetchCommentPost } from '../../redux/comment/asyncActions';
import { setCommentText, commentSlice } from '../../redux/comment/slice';

const CommentsBlock: React.FC = () => {
  const dispatch = useAppDispatch();

  const comments = useSelector(commentSelector);

  console.log(comments);
  const commentText = useSelector(commentTextSelector);

  const isAuth = useSelector(selectIsAuth);
  const isAuthData = useSelector(authData);

  const avatarUrl = isAuthData?.avatarUrl;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCommentText(e.target.value));
  };

  const handleCommentSubmit = async () => {
    const text = commentText;

    try {
      const newComment = await dispatch(fetchCommentPost(text));

      dispatch(fetchComment());

      dispatch(commentSlice.actions.setCommentText(''));
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  React.useEffect(() => {
    dispatch(fetchComment());
  }, []);

  return (
    <section className={styles.comments}>
      <div className={styles.body}>
        <h5 className={styles.heading}>Comments</h5>
        {comments.map((obj) => (
          <div key={obj._id} className={styles.item}>
            <div className={styles.image}>
              {obj.author && <img src={`http://localhost:3333${obj.author?.avatarUrl}`} alt="" />}
            </div>
            <div className={styles.desc}>
              <span className={styles.name}>{obj.author?.fullName}</span>
              <span className={styles.text}>{obj.text}</span>
            </div>
          </div>
        ))}
        <div className={styles.post}>
          <div className={styles.userImage}>
            {isAuth ? (
              <img src={`http://localhost:3333${avatarUrl}`} alt="" />
            ) : (
              <img src="https://mui.com/static/images/avatar/6.jpg" alt="" />
            )}
          </div>
          <div className={styles.postInput}>
            <input
              onChange={handleInputChange}
              className={styles.input}
              type="text"
              placeholder="Write a Comment"
              value={commentText}
            />
          </div>
        </div>
        <div className={styles.buttonSubmit}>
          <button type="submit" onClick={handleCommentSubmit} className={styles.btn}>
            Add comment
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentsBlock;
