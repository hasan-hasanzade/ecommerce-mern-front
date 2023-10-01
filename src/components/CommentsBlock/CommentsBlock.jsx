import React from 'react';
import styles from './commentsblock.module.scss';
import { authData, selectIsAuth } from '../../redux/slices/authSlice';
import { useSelector } from 'react-redux';
import axios from '../../axios';

const CommentsBlock = () => {
  const [commentText, setCommentText] = React.useState('');
  const [comments, setComments] = React.useState([]);

  const isAuth = useSelector(selectIsAuth);
  const isAuthData = useSelector(authData);

  const avatarUrl = isAuthData?.avatarUrl;

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    const text = commentText;

    createComment(text);
  };

  React.useEffect(() => {
    getComments();
  }, []);

  const createComment = async (text) => {
    try {
      const response = await axios.post('/comment/post', {
        text,
      });
      // Handle success (e.g., update the UI)
      console.log('Comment created:', response.data);
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error creating comment:', error);
    }
  };

  const getComments = async () => {
    try {
      axios.get('/comments').then((res) => {
        setComments(res.data);
      });
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error retrieving comments:', error);
    }
  };

  return (
    <section className={styles.comments}>
      <div className={styles.body}>
        <h5 className={styles.heading}>Comments</h5>
        {comments.map((obj) => (
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={`http://localhost:3333${obj.author.avatarUrl}`} alt="" />
            </div>
            <div className={styles.desc}>
              <span className={styles.name}>{obj.author.fullName}</span>
              <span className={styles.text}>
                {obj.text}
              </span>
            </div>
          </div>
        ))}
        {/* <div className={styles.item}>
          <div className={styles.image}>
            <img src="https://mui.com/static/images/avatar/4.jpg" alt="" />
          </div>
          <div className={styles.desc}>
            <span className={styles.name}>Elon Musk</span>
            <span className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis ullam perferendis modi, obcaecati quaerat aspernatur magni iure quasi vel officia, illum sunt maiores quas nihil minima inventore, molestias dolorem assumenda accusantium blanditiis unde commodi. Et cumque tempora nostrum asperiores qui, rem, quasi tempore blanditiis amet sed iure ipsum quidem quisquam neque officia rerum laudantium, voluptatum unde hic aperiam velit suscipit. Molestiae quos nisi perferendis voluptatum odio minus enim, aliquid ipsa repudiandae eius mollitia veritatis voluptate expedita in tenetur? Laudantium impedit totam repellendus quas saepe! Laboriosam, incidunt rem! Eveniet eum, excepturi molestiae exercitationem inventore aperiam. Quis quasi et illo laboriosam nobis amet eligendi, dignissimos, adipisci labore sit quibusdam nam neque? Molestias autem beatae eaque placeat facilis sed. Minima non hic nisi. Sunt ab repellat praesentium maiores reiciendis vitae minus tempore quos, quas reprehenderit voluptatibus modi odit, suscipit ea quia! Eaque numquam ullam, facilis veniam delectus quisquam unde nam minus, officia ratione modi officiis quam tempora quas illum deleniti aliquid? Praesentium iure assumenda temporibus delectus natus qui ad laborum laboriosam nemo debitis enim perspiciatis in esse dolor, cum sed quisquam vero quos? Ducimus ipsam necessitatibus vitae quo optio vero deserunt dolorem beatae soluta, quasi velit quis dolore eaque quibusdam aliquid ut quos, laborum veritatis. Eveniet doloribus iusto, dignissimos ullam saepe vero. Eaque accusantium quidem rem tempore sint aut non ipsum natus quasi, debitis omnis deleniti, sequi, voluptate magni illum dolorem quos vero illo veniam odio atque. Obcaecati id et quasi aspernatur quis labore? Quia rem placeat facilis voluptas minus numquam laudantium sapiente incidunt aut fugit aspernatur commodi iure, modi excepturi dolores. Aliquam voluptatibus ducimus iusto, dolor velit consectetur quod quos est quidem non temporibus ab omnis inventore hic quasi natus mollitia excepturi sit eos blanditiis cupiditate magni ipsa numquam repellat. Id odit eaque aliquid accusantium odio repellat ut magnam quod porro ducimus quos inventore voluptas mollitia qui, non consequatur iusto obcaecati eius! Dolorum eveniet fugiat quis repellat nostrum error quam harum sequi in at esse hic sunt quibusdam distinctio aspernatur, libero alias tempore, ab porro laborum? Illum, suscipit labore. Perferendis ut autem sequi vitae reprehenderit repudiandae culpa eveniet aliquid voluptate magnam sapiente, suscipit, possimus, ipsam sed earum placeat labore explicabo? Praesentium nostrum officiis vel nisi? Rerum blanditiis aspernatur earum mollitia facilis modi laboriosam hic soluta! Tenetur quos odio dicta aut doloremque ut consectetur, eos dignissimos molestiae dolorum, suscipit quidem magnam eaque a quas voluptas, alias nisi assumenda commodi nesciunt enim? Ipsam magnam accusantium deserunt sunt tenetur illo laboriosam delectus sint similique dolorem optio fugit dolore error odit fugiat rerum, sed tempore est impedit esse voluptate! Sit, hic neque tenetur accusantium asperiores commodi eaque possimus suscipit minus iure qui deleniti quas et? Sapiente maiores ab vero recusandae eligendi, nam quisquam voluptatem dolor. Facilis dignissimos ab accusantium consectetur! Reprehenderit at, quod eius iste enim commodi, nobis esse, distinctio consequatur aliquam quo necessitatibus fugiat! Ipsam explicabo atque ea tenetur nesciunt, nemo voluptates fugiat voluptate, similique ut esse nisi eveniet quas, nostrum doloremque natus quidem quibusdam. Id, praesentium rerum tempore laborum cumque atque doloremque sint.
            </span>
          </div>
        </div> */}
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
