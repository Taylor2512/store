import Link from "next/link";
import styles from "@styles/layouts/footer.module.scss"; // Asegúrate de tener este archivo de estilos

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <Link href="/privacy" className={styles.footer__link}>Privacy Policy</Link>
                <Link href="/terms" className={styles.footer__link}>Terms of Service</Link>
                <Link href="/contact" className={styles.footer__link}>Contact Us</Link>
            </div>
            <div className={styles.footer__copyright}>
                &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
            </div>
        </footer>
    );
}