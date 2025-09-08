import React from "react";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-gray-900 text-white shadow-lg">
            <h1 className="text-2xl font-bold">OilCo</h1>
            <ul className="hidden md:flex space-x-6 font-semibold">
                <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-400">About</a></li>
                <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
                <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
        </nav>
    );
}