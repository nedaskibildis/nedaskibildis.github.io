import ExperienceItem from "./ExperienceItem"

export default function ExperienceList() {

    return (
        <div className="h-screen bg-white flex flex-col md:flex-row items-center justify-center md:justify-around" id="experience">
            <div className="flex flex-col md:w-1/3 w-7/12 items-center mb-12">
                <h1 className="font-face-lg mb-3 text-xl md:text-3xl">My Experience</h1>
                <p className="paragraph-font text-center md:text-xl">I'm currently seeking my first internship role, so for the time being here are some languages and technologies that I am comfortable with</p>
            </div>
                <div className="md:w-1/3 w-7/12 grid grid-cols-3 grid-rows-2 container">
                    <ExperienceItem imgLink={"../JavaScript-logo.png"}/>
                    <ExperienceItem imgLink={"../java.svg"}/>
                    <ExperienceItem imgLink={"../pythonLogo.png"}/>
                    <ExperienceItem imgLink={"../cLogo.png"}/>
                    <ExperienceItem imgLink={"../reactLogo.png"}/>
                    <ExperienceItem imgLink={"../mongoLogo.png"}/>
                    <div className="mt-3">
                        <ExperienceItem imgLink={"../nodeLogo.png"}/>
                    </div>
                    <ExperienceItem imgLink={"../sqliteLogo.png"}/>
                    <ExperienceItem imgLink={"../Octicons-mark-github.svg.png"}/>
            </div>


        </div>
    )
}