import ProjectItem from "./ProjectItem";

export default function ProjectList() {
    return (
        
        <div className="flex flex-col h-screen bg-white items-center" id="projects">
            <h2 className="text-5xl m-4 ml-8 font-face-lg lg:mb-24 mb-12 lg:mt-12">My Projects</h2>
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-3 md:gap-1 lg:grid-cols-3 lg:grid-rows-1 bg-white items-center h-4/6 md:h-screen">
                    <ProjectItem link={"https://github.com/nedaskibildis/yelpCamp"} description={"Yelp Camp is a full-stack application that enables users to create accounts and contribute information about campsites. Users can add campsites to a map, where other users can discover and review them."} img={"../YelpCamp.png"} languages={['Javascript', 'Express', 'MongoDB', 'Node']} name={"Yelp Camp"}/>
                    <ProjectItem link={"https://github.com/nedaskibildis/3DMoleculeGenerator"} img={"../MoleculeGenerator.png"} description={"A fullstack application which allows users to upload sdf files of their favourite molecule, save them to a database, apply custom colors for atoms, and have them displayed as an svg file."} languages={['C', 'Python', 'SQLite', 'JavaScript']} name={'3D Molecule Display'}/>
                    <ProjectItem name={'Portfolio Generator'} img={"../portfolioGenerator.png"}  languages={['Javascript', 'PHP']} description={'Designed and developed a project for a hackathon that generates a portfolio based on userprovided information, aimed at assisting programmers with web application development challenges.'} link={'https://github.com/JoffduPreez/BCOMP-Hackathon'}/>
                </div>
            </div>
    )
}