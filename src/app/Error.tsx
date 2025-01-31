"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div>
            <h2>Ocurrió un error</h2>
            <p>{error.message}</p>
            <button onClick={() => window.location.reload()}>Recargar Página</button>
        </div>
    );
}
