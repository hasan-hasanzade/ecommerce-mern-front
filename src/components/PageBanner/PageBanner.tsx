import styles from './pagebanner.module.scss';

type PageBannerProps = {
  title: string;
  img: string;
};

const PageBanner: React.FC<PageBannerProps> = ({ title, img }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <img src={img} alt="background" />
      </div>
    </section>
  );
};

export default PageBanner;
