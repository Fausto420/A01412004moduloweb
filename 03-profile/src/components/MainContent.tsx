function MainContent() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-4">
            <div className="max-w-4xl mx-auto text-left overflow-y-auto pb-8">
                <h1 className="text-3xl font-bold mb-4">I'm Fausto Pacheco</h1>
                <p className="mb-4">
                    A computer science student who loves creating things with code. I've worked on lots of class projects using
                    technologies like Python, Swift, JavaScript, React.js, and MySQL, which helped me get good at building websites and
                    mobile apps. I really enjoy learning new tech stuff and working with others to make amazing projects come to life.
                </p>
                
                <section className="mb-6">
                    <h2 className="text-lg font-bold">EDUCATION AND TRAINING</h2>
                    <p>[ 09/08/2021 - Current ] Bachelor in Computer Science and Technology</p>
                    <p>Tecnológico de Monterrey <a href="https://tec.mx/es" className="text-blue-600 hover:text-blue-800" target="_blank">https://tec.mx/es</a></p>
                    <p>Address: Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849, Monterrey, Mexico</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-lg font-bold">LANGUAGE SKILLS</h2>
                    <p>Mother tongue(s): Spanish</p>
                    <p>Other language(s): English</p>
                    <p>LISTENING C1 READING B2 WRITING B2</p>
                    <p>SPOKEN PRODUCTION B2 SPOKEN INTERACTION B2</p>
                    <p>Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-lg font-bold">DIGITAL SKILLS</h2>
                    <p>FrontEnd: HTML, CSS, JavaScript | UX/UI | Node.js, React.js | Managing Databases (MySQL) | Python | Swift(iOS) | Github | Google (Google Meet, Google Docs, Google Classroom, Google Forms, Google Drive, Google Slide); | Wondershare Filmora Skills | Project Management Tools (Notion, Trello)</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-lg font-bold">PROJECTS</h2>
                    
                    {/* Proyecto ECOA (Gamified survey) */}
                    <div className="mb-4">
                        <h3 className="font-semibold">ECOA (Gamified survey)</h3>
                        <p className="text-sm">[13/02/2023 - 02/05/2023] Role: Web Developer</p>
                        <p className="font-semibold">Project Description:</p>
                        <p>Collaborated in a team to transform our university's standard satisfaction survey into an engaging, gamified experience. This survey evaluates student satisfaction with courses and professors.</p>
                        <p className="font-semibold">Contributions:</p>
                        <ul>
                            <li>Designed and implemented interactive web interfaces to make the survey more engaging, using React.js</li>
                            <li>Integrated backend APIs to ensure real-time data processing</li>
                            <li>Worked closely with team members to brainstorm ideas, leading to innovative features that increased student participation rates</li>
                        </ul>
                        <p className="font-semibold">Skills Developed:</p>
                        <p>Increased my skills in front-end development, team collaboration and problem solving. Gained valuable experience in user interface design.</p>
                        <a href="https://drive.google.com/file/d/1AwVZW0eocKC8Bd43Ug87PIzojLvCDdqd/view? usp=sharing" className="text-blue-600 hover:text-blue-800" target="_blank">View Project</a>
                    </div>
                    
                    {/* Proyecto Señaventuras */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Señaventuras (Learn and practice mexican sign language)</h3>
                        <p className="text-sm">[14/08/2023 - 20/10/2023] Role: Mobile App Developer & Video Editor</p>
                        <p className="font-semibold">Project Description:</p>
                        <p>Partnered with "Dilo en señas," a civil organization aiming to enhance the education of deaf children in Mexico, to create an iOS application that facilitates engaging educational experiences.</p>
                        <p className="font-semibold">Contributions:</p>
                        <ul>
                            <li>Led the development of the "Treasure Hunt" feature, incorporating image recognition technology to promote interactive learning</li>
                            <li>Integrated various APIs to expand the app's functionality and ensure smooth user experiences</li>
                            <li>Designed intuitive UI/UX to make the process of learning sign language accessible and fun for children</li>
                            <li>Edited and produced educational videos with a sign language interpreter to complement the app's learning modules, ensuring the content was informative and engaging</li>
                        </ul>
                        <p className="font-semibold">Skills Developed:</p>
                        <p>Gained experience in iOS mobile app development, API integration, and image recognition technology. I improved my video editing skills, particularly in creating educational content. Strengthened my teamwork and project management skills, with a focus on creating accessible educational solutions.</p>
                        <a href="https://youtu.be/TXrSceFy2Ek" className="text-blue-600 hover:text-blue-800" target="_blank">View Project</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainContent;