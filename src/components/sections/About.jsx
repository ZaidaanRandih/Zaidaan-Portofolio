import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {

    const frontendSkills = {
        React: "https://react.dev/",
        Vue: "https://vuejs.org/",
        TailwindCSS: "https://tailwindcss.com/",
        Bootstrap: "https://getbootstrap.com/",
    };
    const backendSkills = {
        NodeJS: "https://nodejs.org/",
        Python: "https://docs.python.org/3/",
        Golang: "https://go.dev/doc/",
        Java: "https://dev.java/",
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                        <p className="text-grey-300 mb-6">
                            My journey is ever-unfolding, seeking new alliances, noble endeavors, and epic quests in the realms of software development, web engineering, and system design. Shouldst thou seek a valiant comrade for an expedition into the unknown, summon me forth, and together we shall forge new legends.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(frontendSkills).map(([tech, url]) => (
                                        <a
                                            key={tech}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all"
                                        >
                                            {tech}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(backendSkills).map(([tech, url]) => (
                                        <a
                                            key={tech}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all"
                                        >
                                            {tech}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4">🏰 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                                <li>
                                    <strong>Science</strong> - SMAN 1 PANGKALPINANG (2019-2022)
                                </li>
                                <li>
                                    <strong>Informatics</strong> - Telkom University (2022-<span className="bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent">Present</span>)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4">✨ Organization/Voulenteer Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Carnival 22 Event Planner</h4>
                                    <p>Hima IF (Nov 2022-Nov 2022)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Hello World 23 Event Planner</h4>
                                    <p>Hima IF (Jul 2023 - Sep 2023)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Anniv Insight 23 Secretary</h4>
                                    <p>Hima IF (Aug 2023 - Jan 2024)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Viva La FIA 24 Event Planner</h4>
                                    <p>FIA (Aug 2024 - Oct 2024)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Fortran 24 Coordinator of the Liaison Officer</h4>
                                    <p>Hima IF (Jul 2024 - Nov 2024)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Internship Staff of Student Affairs Division</h4>
                                    <p>Hima IF (Oct 2023 - May 2024)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Staff of Development and Partnership Division</h4>
                                    <p>FIA (Mar 2024 - Mar 2025)</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4">👨‍💻 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> PT Infrastruktur Telekomunikasi Indonesia (Telkominfra)</h4>
                                    <p>Internship (Jul 2025 - Sep 2025)</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};