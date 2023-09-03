import React from 'react'
import styles from './cartitem.module.scss'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem, decreaseItem, removeItem } from '../../redux/slices/cartSlice';


const CartItem = ({id, title, newPrice, imageUrl, count}) => {
   const dispatch = useDispatch();

   const onClickIncrease = () => {
      dispatch(addItem({
         id,
      }))
   }

   const onClickDecrease = () => {
      dispatch((decreaseItem(id)))
   }

   const onClickRemove = () => {
      if(window.confirm('Are you sure you want to remove item?')) {
         dispatch((removeItem(id)))
      }
   }

  return (
   <div className={styles.item}>
   <div className={styles.image}>
     <img src={imageUrl} alt="" />
   </div>
   <div className={styles.content}>
     <div className={styles.leftside}>
       <div className={styles.title}>{title}</div>
       <div className={styles.actions}>
          <button onClick={onClickDecrease} className={styles.minus}><AiOutlineMinus /></button>
          <div type='number' className={styles.input}>{count}</div>
          <button onClick={onClickIncrease} className={styles.plus}><AiOutlinePlus /></button>
       </div>
     </div>
     <div className={styles.rightside}>
       <button onClick={onClickRemove} className={styles.circle}><AiOutlineCloseCircle size={24}/></button>
       <div className={styles.price}>${newPrice * count}</div>
     </div>
   </div>
 </div>
  )
}

export default CartItem