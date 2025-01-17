import Link from "next/link";
import React from "react";
import styles from "@styles/layouts/navbar.module.scss"; // Ensure the correct path and file extension

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navbar__link}>Inicio</Link>
            <Link href="/auth/login" className={styles.navbar__link}>Login</Link>
        </nav>
    );
}