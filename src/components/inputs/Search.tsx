import styles from "@styles/components/search.module.scss";

export default function Search() {
    return (
        <div className={styles.search}>
            <input 
                type="text" 
                placeholder="Buscar..." 
                className={styles.search__input} 
                aria-label="Buscar"
            />
            <button className={styles.search__button} aria-label="Botón de búsqueda">
                🔍
            </button>
        </div>
    );
}