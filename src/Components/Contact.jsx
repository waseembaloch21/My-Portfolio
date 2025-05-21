"use client";

import { useState } from "react";
import ContactImage from "../assets/images/contact.svg";
import { FaUserAlt, FaEnvelope, FaSpinner, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Sending...");
        setIsError(false);

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setIsError(false);
            } else {
                setStatus(`Failed to send: ${data.error}`);
                setIsError(true);
            }
        } catch (error) {
            setStatus(`Error: ${error.message}`);
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className="bg-black text-white py-10 w-full px-5 sm:px-20 md:px-32">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center" data-aos="fade-up">
                Contact Me
            </h2>
            <div className="flex items-center justify-between">
                <div className="hidden md:block w-1/2 pl-8">
                    <img
                        src={ContactImage}
                        alt="Contact Illustration"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <form method="POST" onSubmit={sendEmail} className="bg-[#1a2c34] p-8 rounded-xl shadow-xl space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-serif text-lg mb-2">Name</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaUserAlt className="text-blue-500 mr-2" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    required
                                    onChange={handleChange}
                                    className="bg-transparent font-serif text-white w-full outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-serif text-lg mb-2">Email</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaEnvelope className="text-blue-500 mr-2" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-transparent font-serif text-white w-full outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-serif text-lg mb-2">Message</label>
                            <div className="flex items-start border border-gray-500 p-2 rounded-lg">
                                <FaPaperPlane className="text-blue-500 mr-2 mt-1" />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-transparent font-serif text-white w-full outline-none resize-none"
                                />
                            </div>
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="bg-cyan-300 hover:bg-cyan-600 text-black py-2 px-6 font-serif rounded-lg flex items-center w-full justify-center text-center"
                            data-aos="zoom-out"
                            data-aos-delay="400"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2" /> Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane className="mr-2" /> Send Message
                                </>
                            )}
                        </button>
                        {status && (
                            <p className={`mt-3 sm:mt-4 text-sm ${isError ? 'text-red-400' : 'text-green-400'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
