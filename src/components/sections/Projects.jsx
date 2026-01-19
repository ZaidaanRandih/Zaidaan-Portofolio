import { RevealOnScroll } from '../RevealOnScroll'

const projects = [
    {
        title: "PayPlus",
        description: "A digital wallet designed to help users manage their finances effectively and organized. Features secure transactions and real-time tracking.",
        tags: ["Java", "HTML", "CSS", "JavaScript", "Servlet"],
        links: {
            // demo: "#", // Add demo link if available
            github: "https://github.com/ZaidaanRandih/PayPlus",
        },
    },
    {
        title: "Automata Theory",
        description: "A comprehensive study and implementation of Automata Theory concepts during the course at Telkom University.",
        tags: ["Python"],
        links: {
            github: "https://github.com/ZaidaanRandih/TBA",
        },
    },
    {
        title: "Image Recognition",
        description: "AI project to distinguish between Adjwa and Medjool dates using K-nearest neighbor algorithm. Achieved high accuracy in classification.",
        tags: ["Python", "Jupyter"],
        links: {
            github: "https://github.com/ZaidaanRandih/Image-recognition-AdjwaMedjool",
        },
    },
    {
        title: "Algorithm Strategy",
        description: "Comparative implementation of greedy and backtracking algorithms for optimizing course schedules.",
        tags: ["HTML", "CSS", "JavaScript"],
        links: {
            demo: "https://zaidaanrandih.github.io/TubesSA/",
            // github: "#", // Add github link if needed, assuming the demo link was primary
        },
    },
];

const techDocs = {
    Java: "https://dev.java/",
    HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Servlet: "https://docs.oracle.com/javaee/7/api/javax/servlet/package-summary.html",
    Python: "https://docs.python.org/3/",
    Jupyter: "https://jupyter.org/",
};

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-red-500 to-blue-200 bg-clip-text text-transparent text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index}
                                className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(244,67,54,0.1)] border border-white/10 group"
                            >
                                {/* Preview Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                    {/* This is a placeholder. In real use, you'd use <img src={project.img} /> */}
                                    <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
                                    <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                        {project.title}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm h-12 overflow-hidden text-ellipsis line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 h-16 content-start">
                                        {project.tags.map((tech) => (
                                            <a key={tech} href={techDocs[tech]} target="_blank" rel="noopener noreferrer"
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-xs hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(244,67,54,0.1)] transition-all"
                                            >
                                                {tech}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center">
                                        {project.links.demo && (
                                            <a href={project.links.demo} className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2">
                                                Live Demo <span className="text-xl">↗</span>
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a href={project.links.github} className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2">
                                                View Code <img src="https://github.com/ZaidaanRandih/Zaidaan-Portofolio/blob/main/public/github.png?raw=true" className="w-5 h-5" alt="GitHub" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};