import React, { useState } from 'react';
import { ProjectCard } from '../../items/card';

interface Project {
    text: string;
    cards: { text: string; img: string; href: string; alt: string }[];
}

export const Projects: React.FC = () => {
    const projectBtn: Project[] = [
        {
            text: 'Internet Shop',
            cards: [
                { text: 'AirCalling Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'AirCalling Landing Page Design' },
                { text: 'Business Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Business Landing Page Design' },
                { text: 'Ecom Web Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Ecom Web Page Design' },
            ],
        },
        {
            text: 'Landing Page',
            cards: [
                { text: 'Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
            ],
        },
        {
            text: 'App application',
            cards: [
                { text: 'App Design 1', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'App Design 1' },
                { text: 'App Design 2', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'App Design 2' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
            ],
        },
        {
            text: 'Blog',
            cards: [
                { text: 'Blog Post Design 1', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Blog Post Design 1' },
                { text: 'Blog Post Design 2', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Blog Post Design 2' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'Yet Another Landing Page Design' },
            ],
        },
    ];

    const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setSelectedButtonIndex(index);
    };

    return (
        <div className="projects">
            <h1 className="projects-title">My projects</h1>
            <div className="projects-wrapp">
                <div className="projects-wrapp-btn">
                    {projectBtn.map((project, index) => (
                        <button
                            className={`projects-wrapp-btn-item ${selectedButtonIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => handleButtonClick(index)}
                        >
                            {project.text}
                        </button>
                    ))}
                </div>
            </div>
            <div className="swiper-slide-content">
                {projectBtn[selectedButtonIndex].cards.map((card, index) => (
                    <ProjectCard key={index} cards={[card]} />
                ))}
            </div>
        </div>
    );
};
