import React from 'react';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import CheckoutItems from '../../components/CheckoutItems/CheckoutItems';
import styles from './checkout.module.scss';

const Checkout: React.FC = () => {
  return (
    <section className={styles.checkout}>
      <div className="container">
        <div className={styles.wrap}>
          <PaymentForm />
          <CheckoutItems />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
