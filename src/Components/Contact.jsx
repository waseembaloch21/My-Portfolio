"use client";
import { useState } from "react";
import ContactImage from "../assets/images/contact.svg";
import { FaUserAlt, FaEnvelope, FaSpinner, FaPaperPlane } from 'react-icons/fa';



const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);


    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Sending...");

        const currentDate = new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
        setDate(currentDate);

        try {
            const response = await fetch("/src/api/send-email/route.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ to: email, name, subject, message }),
            });

            if (response.ok) {
                setStatus("Email Sent Successfully!");
                setEmail("");
                setName("");
                setSubject("");
                setMessage("");
            } else {
                const errorData = await response.json();
                setStatus(`Failed to send email: ${errorData.error}`);
            }
        } catch (error) {
            setStatus(`An error occurred: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className="bg-black text-white py-10 w-full px-5 sm:px-20 md:px-32">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">Contact Me</h2>
            <div className="flex items-center justify-between">
                <div className="hidden md:block w-1/2 pl-8">
                    <img
                        src={ContactImage}
                        alt="Contact Illustration"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <form method="POST" onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-serif text-lg mb-2">Name</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaUserAlt className="text-blue-500 mr-2" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    placeholder=" Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent font-serif text-white w-full outline-none"
                                />
                            </div>

                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-serif text-lg mb-2">Message</label>
                            <div className="flex items-start border border-gray-500 p-2 rounded-lg">
                                <FaPaperPlane className="text-blue-500 mr-2" />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder=" Your Message"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-transparent  font-serif text-white w-full outline-none resize-none"
                                />
                            </div>

                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="bg-cyan-300 hover:bg-cyan-600 text-black py-2 px-6 font-serif rounded-lg flex items-center w-full justify-center text-center"
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
                        {status && <p className="mt-3 sm:mt-4 text-sm text-green-400">{status}</p>}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;