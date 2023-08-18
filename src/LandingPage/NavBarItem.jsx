export default function NavBarItem({text, link}) {
    const navLink = `#${link}`
    return (
        <>
        <li className=" color-black list-none mx-4 md:mx-6 mt-3 paragraph-font text-sm md:text-xl">
            <a href={navLink}>{text}</a>
        </li>
        </>
    )
}