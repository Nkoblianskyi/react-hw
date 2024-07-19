import React, { useState } from "react";
import { Slider } from "../../items/slider";


export const About: React.FC = () => {
    const sliderItems = [
        { text: 'React', defaultValue: 90 },
        { text: 'JavaScript', defaultValue: 85 },
        { text: 'Css - (Scss, tailwind)', defaultValue: 95 },
        { text: 'HTML', defaultValue: 89 },
    ];

    const [values, setValues] = useState(sliderItems.map(item => item.defaultValue));

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValues = [...values];
        newValues[index] = Number(event.target.value);
        setValues(newValues);
    };

    return (
        <div className="about">
            <div className="about-left">
                <div className="about-left-circle">
                    <img
                        src="/cv-portfolio/iam2.jpg"
                        alt="I'm"
                        className="about-left-circle-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-right-text">About Me</h1>
                <p className="about-right-text-description">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                {sliderItems.map((link, index) => (
                    <Slider
                        key={index}
                        text={link.text}
                        value={values[index]}
                        onChange={handleChange(index)}
                    />
                ))}
            </div>
        </div>
    );
};