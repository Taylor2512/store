import Link from "next/link";
import styles from "@styles/layouts/header.module.scss";
import Search from "@components/inputs/Search";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link href="/">
                    <img src="/logo.svg" alt="E-Commerce Logo" />
                </Link>
            </div>
            <Search />
            <nav className={styles.header__nav}>
                <Link href="/products" className={styles.header__link}>Productos</Link>
                <Link href="/about" className={styles.header__link}>Sobre Nosotros</Link>
                <Link href="/contact" className={styles.header__link}>Contacto</Link>
                <Link href="/cart" className={styles.header__link}>Carrito</Link>
            </nav>
        </header>
    );
}
