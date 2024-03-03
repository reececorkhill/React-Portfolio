import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Reece Corkhill | Portfolio</a>
            <div className="collapse navbar-collapse p-3" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/About"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/Projects"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/Resume"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >Resume</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/Contact"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;