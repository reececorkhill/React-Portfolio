import React from 'react';

const Header = (props) => {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Reece Corkhill | Portfolio</a>
            <div className="collapse navbar-collapse p-3" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a
                    href="#home"
                    onClick={() => props.handlePageChange('Home')}
                    className={
                        props.currentPage === 'Home' ? 'nav-link active' : 'nav-link'
                    }>Home</a>
                    </li>
                    <li className="nav-item">
                    <a
                    href="#about"
                    onClick={() => props.handlePageChange('About')}
                    className={
                        props.currentPage === 'About' ? 'nav-link active' : 'nav-link'
                    }>About</a>
                    </li>
                    <li className="nav-item">
                    <a
                    href="#projects"
                    onClick={() => props.handlePageChange('Projects')}
                    className={
                        props.currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
                    }>Projects</a>
                    </li>
                    <li className="nav-item">
                    <a
                    href="#resume"
                    onClick={() => props.handlePageChange('Resume')}
                    className={
                        props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
                    }>Resume</a>
                    </li>
                    <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => props.handlePageChange('Contact')}
                    className={
                        props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                    }>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;