import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Função para fechar o menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="navbar">
            <div className="brand">
                Mini <span>Blog</span>
            </div>
            <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
                <div className="links-list">
                    <li>
                        <NavLink to="/" onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" onClick={closeMenu}>
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" onClick={closeMenu}>
                            Cadastrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={closeMenu}>
                            Sobre
                        </NavLink>
                    </li>
                </div>
            </ul>
            <div
                className={`nav-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default NavBar;
