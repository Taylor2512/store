import { useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    // Agrega más campos según sea necesario
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);

    const login = (userData: User) => setUser(userData);
    const logout = () => setUser(null);

    return { user, login, logout };
}
