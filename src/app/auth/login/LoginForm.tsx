"use client";

import { useState } from "react";
import { validateEmail, validatePassword } from "./validation"; // Importar funciones de validación

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Correo inválido");
            return;
        }
        if (!validatePassword(password)) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }
        setError("");
        console.log("Login con:", { email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Ingresar</button>
        </form>
    );
}
