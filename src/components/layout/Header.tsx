import Link from "next/link";
import Search from "@components/inputs/Search";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <Link href="/">
                    <img src="/logo.svg" alt="E-Commerce Logo" className="h-8 w-auto" />
                </Link>
            </div>
            <Search />
            <nav className="flex space-x-4">
                <Link href="/products" className="text-gray-700 hover:text-gray-900">Productos</Link>
                <Link href="/about" className="text-gray-700 hover:text-gray-900">Sobre Nosotros</Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contacto</Link>
                <Link href="/cart" className="text-gray-700 hover:text-gray-900">Carrito</Link>
            </nav>
        </header>
    );
}