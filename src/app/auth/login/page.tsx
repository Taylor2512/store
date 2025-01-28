import styles from "@styles/pages/Login.module.scss";
import LoginForm from "./LoginForm"; // Importar el componente LoginForm

export default function LoginPage() {
    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <h2 className={styles.login__title}>Iniciar Sesión</h2>
                <LoginForm /> {/* Usar el componente LoginForm */}
                <a href="/auth/register" className={styles.login__link}>¿No tienes cuenta? Regístrate</a>
            </div>
        </div>
    );
}
