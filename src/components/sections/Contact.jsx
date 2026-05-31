import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [popupMessage, setPopupMessage] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        ).then(() => {
            setPopupMessage("Message Sent Successfully! Thank you for reaching out to me :)");
            setFormData({ name: '', email: '', message: '' });
            setIsFormOpen(false);
        }).catch(() => {
            setPopupMessage("Wait! Something went wrong :( Please Try Again!");
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
            <RevealOnScroll>
                <div className="w-full max-w-xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>

                    <p className="text-gray-400 mb-8 max-w-md mx-auto text-base">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect!
                    </p>

                    <div className="glass rounded-2xl p-8 space-y-6 shadow-2xl relative overflow-hidden border border-white/10 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(244,67,54,0.15)] transition-all duration-300">
                        {/* Decorative glowing gradient blur behind card */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                        {/* Email Card (Triggers Pop-up Modal) */}
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 group text-left cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white text-sm group-hover:text-red-400 transition-colors">Email Me</h4>
                                <p className="text-xs text-gray-400 mt-0.5">zaidanrandih61@gmail.com</p>
                            </div>
                            <span className="ml-auto text-gray-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300 text-lg">→</span>
                        </button>

                        {/* LinkedIn Card */}
                        <a
                            href="https://linkedin.com/in/zaidaanrandih"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group text-left"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors">LinkedIn</h4>
                                <p className="text-xs text-gray-400 mt-0.5">linkedin.com/in/zaidaanrandih</p>
                            </div>
                            <span className="ml-auto text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 text-lg">→</span>
                        </a>

                        {/* GitHub Card */}
                        <a
                            href="https://github.com/ZaidaanRandih"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group text-left"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-white group-hover:bg-white/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white text-sm group-hover:text-red-300 transition-colors">GitHub Profile</h4>
                                <p className="text-xs text-gray-400 mt-0.5">github.com/ZaidaanRandih</p>
                            </div>
                            <span className="ml-auto text-gray-500 group-hover:text-red-300 group-hover:translate-x-1 transition-all duration-300 text-lg">→</span>
                        </a>

                        {/* Divider */}
                        <div className="border-t border-white/10 my-2"></div>

                        {/* Download CV Button */}
                        <a
                            href="/CV.pdf"
                            download="Zaidaan_Afif_Randih_CV.pdf"
                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download My CV
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Email Form Pop-up Modal */}
            {isFormOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4 transition-all duration-300"
                    onClick={() => setIsFormOpen(false)}
                >
                    <div 
                        className="glass relative w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/10 animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Glowing decorative blurs inside modal */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                        {/* Close button */}
                        <button 
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer text-lg"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent">
                            Send a Message
                        </h3>
                        <p className="text-xs text-gray-400 mb-6">
                            Fill out the form below and I'll get back to you as soon as possible.
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 text-sm"
                                    placeholder="Name..."
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>

                            <div className="relative">
                                <input type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 text-sm"
                                    placeholder="Example@Gmail.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 text-sm"
                                    placeholder="Your Message..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSending}
                                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-800 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(244,67,54,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {isSending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Popup Notifications (Success / Error) */}
            {popupMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="glass p-6 rounded-lg shadow-lg text-center max-w-sm w-full border border-white/10 animate-scaleIn">
                        <p className="text-sm font-medium text-white">{popupMessage}</p>
                        <button 
                            onClick={() => setPopupMessage(null)}
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer text-xs font-semibold">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
