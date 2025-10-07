import styles from './NotFound.module.scss';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link href="/" className={styles.button}>
             Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
