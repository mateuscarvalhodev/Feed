import styles from './Header.module.css';
import igniteSimbol from '../assets/ignite-simbol.svg';

export default function Header () {
    return(
        <header className={styles.header}>
            <img src={igniteSimbol} alt="logo ignite" />
        <strong >Feed Mateus</strong>
        </header>
    )
}