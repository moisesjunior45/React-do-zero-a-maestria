import './NavBar.css';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Função para fechar o menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className="navbar">
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
                    {!user && (
                        <>
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
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <NavLink to={"/posts/create"} onClick={closeMenu}>
                                    Novo Post
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/dashboard"} onClick={closeMenu}>
                                    Dashboard
                                </NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="/about" onClick={closeMenu}>
                            Sobre
                        </NavLink>
                    </li>
                    {user && (
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}
                </div>
            </ul>
            <div
                className={`nav-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default NavBar;
