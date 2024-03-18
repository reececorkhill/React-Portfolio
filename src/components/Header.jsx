import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-3" id="navbarNavDropdown">
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