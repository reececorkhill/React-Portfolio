import React from 'react';

const Header = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Reece Corkhill | Portfolio</a>
                <div class="collapse navbar-collapse p-3" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <img src="https://smartit-webdevelopment.com/wp-content/uploads/2023/09/Cards-2240x1600-1.jpg" height="841px" width="100%"></img>
        </div>
    </div>
    );
};

export default Header;