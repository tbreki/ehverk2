import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function LinkButton({ textButton, linkHref = '' }){
  console.log("hello")
  return (
  

  <button className={styles.button}>
    {textButton}
  </button>
  );
};
