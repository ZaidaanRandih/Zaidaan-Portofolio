import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [popupMessage, setPopupMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        ).then(() => {
            setPopupMessage("Message Sent Successfully! Thank you for reaching out to me :)");
            setFormData({ name: '', email: '', message: '' });
        }).catch(() => setPopupMessage("Wait! Something went wrong :( Please Try Again!"));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
            <RevealOnScroll>
                <div className='w-full max-w-lg lg:w-[500px]'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent text-center'>
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 "
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>

                        <div className="relative">
                            <input type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 "
                                placeholder="Example@Gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 "
                                placeholder="Your Message.."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        </div>
                        <button type="submit" className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(244,67,54,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
            
            {popupMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/5 px-4">
                    <div className="bg-black p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
                        <p className="text-lg font-medium text-white-800">{popupMessage}</p>
                        <button 
                            onClick={() => setPopupMessage(null)}
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};