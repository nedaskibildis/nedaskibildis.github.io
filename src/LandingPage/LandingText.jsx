import "./typewriter.css"
import "./animation.css"
import NavBar from "./NavBar"
export default function LandingText() {
    return (
        <>
            <div className="bg-white h-screen flex flex-col items-center md:items-start justify-center">
                <div className="absolute top-0 md:right-0">
                    <NavBar/>
                </div>
                    <div className="flex flex-col md:ml-48 mt-48 md:mt-0 items-center md:items-start section">
                        <h3 className="text-2xl md:text-3xl paragraph-font font-bold text-stroke stroke-black ml-1">Hey There, My Name Is</h3>
                        <h1 className=" text-6xl md:text-8xl font-face-lg mb-3">Nedas Kibildis</h1>
                        <h3 className=" text-2xl md:text-3xl ml-1 paragraph-font font-bold text-stroke stroke-black"><span className="typewriter"></span></h3>
                    </div>
            </div>
        </>
    )
    
}