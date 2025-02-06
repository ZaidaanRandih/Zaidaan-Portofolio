import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">PayPlus</h3>
                            <p className="text-grey-400 mb-4">Team Project: A digital wallet designed to help users manage their finances effectively and organized.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "HTML", "CSS", "JavaScript", "Servlet"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ZaidaanRandih/PayPlus" className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"> View Project → <img src="https://github.com/ZaidaanRandih/Zaidaan-Portofolio/blob/main/public/github.png?raw=true" className="w-6 h-6 ml-2" /> </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Automata Theory</h3>
                            <p className="text-grey-400 mb-4">My team project from the Automata Theory course in Telkom University.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ZaidaanRandih/TBA" className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"> View Project → <img src="https://github.com/ZaidaanRandih/Zaidaan-Portofolio/blob/main/public/github.png?raw=true" className="w-6 h-6 ml-2" /> </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Image Recognition for Adjwa & Medjool</h3>
                            <p className="text-grey-400 mb-4">My team project from the Artificial Intelligence course in Telkom University Using K-nearest neighbor method.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Jupyter"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ZaidaanRandih/Image-recognition-AdjwaMedjool" className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"> View Project → <img src="https://github.com/ZaidaanRandih/Zaidaan-Portofolio/blob/main/public/github.png?raw=true" className="w-6 h-6 ml-2" /> </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Algorithm Strategy</h3>
                            <p className="text-grey-400 mb-4">The implementation compares two methods, greedy and backtracking, in selecting course schedules.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Jupyter"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://zaidaanrandih.github.io/TubesSA/" className="text-red-400 hover:text-red-300 transition-colors my-4 flex items-center"> View Project → <img src="https://github.com/ZaidaanRandih/Zaidaan-Portofolio/blob/main/public/link.png?raw=true" className="w-6 h-6 ml-2" /> </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};