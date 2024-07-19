import React, { useState } from 'react';
import { Navigation } from '../../items/navigation';
import { Logo } from '../../items/logo';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV-Koblianskyi.pdf';
        link.download = '/CV-Koblianskyi.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className="header">
            <Logo />
            <button className="header-menu-btn btn" onClick={toggleMenu}>
                Menu
            </button>
            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <Navigation/>
            </nav>
            <button className="header-btn btn" onClick={handleDownload}>Download CV</button>
        </header>
    );
};
