import NavBarItem from "./NavBarItem";

export default function NavBar() {
    return (
        <ul className="flex justify-center md:justify-end px-10">
            <NavBarItem text={"About Me"} link={'about-me'}/>
            <NavBarItem text={"Projects"} link={'projects'}/>
            <NavBarItem text={"Experience"} link={'experience'}/>
        </ul>
        )
    }