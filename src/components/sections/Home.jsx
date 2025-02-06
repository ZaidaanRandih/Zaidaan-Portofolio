import { RevealOnScroll } from '../RevealOnScroll'

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-cyan-200 bg-clip-text text-transparent leading-right">
                        Hello, I'm Zaidaan Afif Randih
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
                        I'm a 4th-Level Scholar of the Arcane at the Hallowed Halls of Telkom University, specializing in the grand discipline of Software Engineering. With quill and code, I wield the Sword of Critical Thinking, the Shield of Analytical Prowess, and the Spell of Problem-Solving to conquer the ever-shifting dungeons of technology.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(244,67,54,0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(244,67,54,0.2)] hover:bg-red-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};