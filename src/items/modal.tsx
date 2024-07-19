import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface ModalProps {
    closeModal: () => void;
}

interface FormState {
    companyName: string;
    contactPerson: string;
    description: string;
}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const [formData, setFormData] = useState<FormState>({
        companyName: '',
        contactPerson: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains("modal")) {
            closeModal();
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const formDataToSend = {
            ...formData,
            message: `Company: ${formData.companyName}\nContact Person: ${formData.contactPerson}\nDescription: ${formData.description}`
        };

        emailjs.send('service_qzghf0o', 'template_bsdehar', formDataToSend, 'WkksS8SORdCabojpd')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({ companyName: '', contactPerson: '', description: '' }); // Clear form fields after successful submission
                closeModal();
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                alert('Error sending message');
            });
    };

    return (
        <div className={`modal show`} onClick={handleOutsideClick}>
            <div className='modal-adaptiv'>
                <div className="modal-content">
                    <div className='modal-content-close'>
                        <span className="modal-content-close-item" onClick={closeModal}>&times;</span>
                    </div>
                    <div className='modal-content-logo'>
                        <img
                            src="/cv-portfolio/logo.jpg"
                            alt="logo"
                            className='modal-content-logo-img'
                            width={80}
                            height={60} />
                        <div className="modal-content-slogan">
                            <h1 className="modal-content-logo-title">Nykyta Koblyanskyi</h1>
                            <span className="modal-content-logo-span">Create the future by coding the present!</span>
                        </div>
                    </div>
                    <div >
                        <form
                            className="modal-content-wrapp"
                            onSubmit={handleSubmit}>
                            <input
                                className="modal-content-input"
                                type="text"
                                name="companyName"
                                placeholder="Name company"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="modal-content-input"
                                type="text"
                                name="contactPerson"
                                placeholder="Contact person"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                required
                            /><input
                                className="modal-content-input"
                                type="email"
                                name="email"
                                placeholder="Email company"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                className="modal-content-input-textarea"
                                name="description"
                                placeholder="Description"
                                rows={4}
                                cols={50}
                                value={formData.description}
                                onChange={handleChange}
                            />
                            <button type="submit" className='modal-content-btn btn'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
