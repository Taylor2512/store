import styles from "@styles/pages/home.module.scss";

export default function Home() {
    return (
        <div className={styles.home}>
            <HeroSection />
            <CategoriesSection />
            <ProductsSection />
        </div>
    );
}

function HeroSection() {
    return (
        <section className={styles.hero}>
            <h1>Bienvenido a AgroMarket</h1>
            <p>Los mejores productos agrícolas directamente del campo.</p>
            <button className={styles.cta}>Ver Productos</button>
        </section>
    );
}

function CategoriesSection() {
    return (
        <section className={styles.categories}>
            <h2>Categorías Populares</h2>
            <div className={styles.categories__grid}>
                <div className={styles.category}>Frutas</div>
                <div className={styles.category}>Verduras</div>
                <div className={styles.category}>Granos</div>
                <div className={styles.category}>Lácteos</div>
            </div>
        </section>
    );
}

function ProductsSection() {
    return (
        <section className={styles.products}>
            <h2>Productos Destacados</h2>
            <div className={styles.products__grid}>
                <div className={styles.product}>Producto 1</div>
                <div className={styles.product}>Producto 2</div>
                <div className={styles.product}>Producto 3</div>
                <div className={styles.product}>Producto 4</div>
            </div>
        </section>
    );
}
