import React from 'react';

interface SliderProps {
    text: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: React.FC<SliderProps> = ({ text, value, onChange }) => {
    return (
        <div className="about-slider">
            <p className="about-slider-text">{text}</p>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={onChange}
                className="about-slider-text-item"
                style={{
                    background: `linear-gradient(to right, rgba(253, 111, 0, 1) ${value}%, rgba(237, 236, 236, 1) ${value}%)`
                }}
            />
            <div className="about-slider-text-item-track" style={{ backgroundSize: `${value}% 100%` }} />
        </div>
    );
};
