import React from 'react';
import styles from './drawer.module.scss';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus, AiOutlineCloseCircle } from 'react-icons/ai';
import baa from '../../assets/img/baa.jpeg'

const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <div className={styles.head}>Shopping Cart</div>
            <button className={styles.close}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className={styles.body}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={baa} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.leftside}>
                  <div className={styles.title}>Women's Peach Training</div>
                  <div className={styles.actions}>
                     <div className={styles.minus}><AiOutlineMinus /></div>
                     <div type='number' className={styles.input}>0</div>
                     <div className={styles.plus}><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className={styles.rightside}>
                  <div className={styles.circle}><AiOutlineCloseCircle size={24}/></div>
                  <div className={styles.price}>232$</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={baa} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.leftside}>
                  <div className={styles.title}>Women's Peach Training</div>
                  <div className={styles.actions}>
                     <div className={styles.minus}><AiOutlineMinus /></div>
                     <div type='number' className={styles.input}>0</div>
                     <div className={styles.plus}><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className={styles.rightside}>
                  <div className={styles.circle}><AiOutlineCloseCircle size={24}/></div>
                  <div className={styles.price}>232$</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={baa} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.leftside}>
                  <div className={styles.title}>Women's Peach Training</div>
                  <div className={styles.actions}>
                     <div className={styles.minus}><AiOutlineMinus /></div>
                     <div type='number' className={styles.input}>0</div>
                     <div className={styles.plus}><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className={styles.rightside}>
                  <div className={styles.circle}><AiOutlineCloseCircle size={24}/></div>
                  <div className={styles.price}>232$</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={baa} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.leftside}>
                  <div className={styles.title}>Women's Peach Training</div>
                  <div className={styles.actions}>
                     <div className={styles.minus}><AiOutlineMinus /></div>
                     <div type='number' className={styles.input}>0</div>
                     <div className={styles.plus}><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className={styles.rightside}>
                  <div className={styles.circle}><AiOutlineCloseCircle size={24}/></div>
                  <div className={styles.price}>232$</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={baa} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.leftside}>
                  <div className={styles.title}>Women's Peach Training</div>
                  <div className={styles.actions}>
                     <div className={styles.minus}><AiOutlineMinus /></div>
                     <div type='number' className={styles.input}>0</div>
                     <div className={styles.plus}><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className={styles.rightside}>
                  <div className={styles.circle}><AiOutlineCloseCircle size={24}/></div>
                  <div className={styles.price}>232$</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
               <div className={styles.text}>Subtotal:</div>
               <div className={styles.number}>
                  5543$
               </div>
            </div>
            <button className={styles.button}>View Cart</button>
            <button className={styles.btn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
