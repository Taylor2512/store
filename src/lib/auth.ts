export function isAuthenticated() {
    return !!localStorage.getItem("token");
}

export function login(token: string) {
    localStorage.setItem("token", token);
}

export function logout() {
    localStorage.removeItem("token");
}
