
export const Social = () => {
    const socialMedia = [
        { href: 'https://www.instagram.com/accounts/onetap/?next=%2F', image: '/cv-portfolio/Instagram.jpg', alt: 'icon instagram' },
        { href: 'https://www.x.com', image: '/cv-portfolio/Twitter.jpg', alt: 'icon c' },
        { href: 'https://www.linkedIn.com', image: '/cv-portfolio/LinkedIn.jpg', alt: 'icon linkedIn' },
        { href: 'https://www.facebook.com', image: '/cv-portfolio/facebook.jpg', alt: 'icon facebook' },
    ];
    return (
        <div className="social">
            {socialMedia.map((link, index) => (
                <div className="social-item" key={index}>
                    <a
                        href={link.href}
                        className="social-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social-item-link-icon"
                            src={link.image}
                            alt={link.alt}
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}