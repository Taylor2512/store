import React from "react";
import styles from "@styles/layouts/sidebar.module.scss"; // Ensure the correct path and file extension

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                <li className={styles.sidebar__item}>Item 1</li>
                <li className={styles.sidebar__item}>Item 2</li>
                <li className={styles.sidebar__item}>Item 3</li>
            </ul>
        </aside>
    );
};