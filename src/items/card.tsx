import React from "react";

interface CardProps {
    cards: { text: string; img: string; href: string; alt: string }[];
}

export const ProjectCard: React.FC<CardProps> = ({ cards }) => {
    return (
        <div className="card-container">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {cards.map((link, index) => (
                        <div className="swiper-slide" key={index}>
                            <a href={link.href} className="card-item-link">
                                <div className="card-item-container">
                                    <img
                                        className="card-item-container-img"
                                        src={link.img}
                                        alt={link.alt}
                                    />
                                </div>
                                <div className="card-item-text">
                                    <p className="card-item-text-item">{link.text}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
