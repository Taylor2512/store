import styles from "@styles/pages/Login.module.scss";
export default function LoginPage() {
    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <h2 className={styles.login__title}>Iniciar Sesión</h2>
                <form className={styles.login__form}>
                    <input className={styles.login__input} type="email" placeholder="Correo" />
                    <input className={styles.login__input} type="password" placeholder="Contraseña" />
                    <button className={styles.login__button} type="submit">Entrar</button>
                </form>
                <a href="/auth/register" className={styles.login__link}>¿No tienes cuenta? Regístrate</a>
            </div>
        </div>
    );
}
