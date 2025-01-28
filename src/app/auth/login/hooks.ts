import { useState } from "react";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        try {
            // Lógica de autenticación
            // Simulación de autenticación
            if (email === "user@example.com" && password === "password") {
                setIsAuthenticated(true);
                setError(null);
            } else {
                throw new Error("Credenciales inválidas");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Error desconocido");
            }
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setError(null);
    };

    return { isAuthenticated, login, logout, error };
}
