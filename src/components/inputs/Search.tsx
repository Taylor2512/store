import styles from "@styles/components/search.module.scss";

export default function Search() {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search..." className={styles.search__input} />
        </div>
    );
}