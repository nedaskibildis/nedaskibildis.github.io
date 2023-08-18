

export default function ProjectItem({img, description, languages, link, name}) {
    
    const listOfLanguages = languages.map((language) => <li className="m-1 lg:m-2">{language}</li>)
    
    return (

        <div className="col-span-3 lg:col-span-1 row-span-1 flex flex-row lg:flex-col items-center bg-gray-200 rounded-lg shadow-md w-9/12 lg:w-8/12 card mx-auto h-2">
            <div className="relative">
                <a href={link} target={"_blank"}>
                <img src={img} alt="No Load" className="rounded-lg object-cover card-image"/>
                <div className="absolute inset-0 hover:bg-white opacity-0 hover:bg-opacity-50 flex items-center justify-center  hover:opacity-100">
                    <img src="../Octicons-mark-github.svg.png" alt="" className="w-24"/>
                </div>                
                </a>
            </div>
            <div className="flex flex-col card-text lg:justify-between ">
                <h3 className="font-face-lg text-sm card-text md:text-xl font-bold lg:mb-3 text-center mt-3">{name}</h3>
                <p className="paragraph-font card-text md:text-sm text-center">{description}</p>
                <ul className="flex md:paragraph-font card-text text-xs xl:text-sm justify-center lg:mt-3">{listOfLanguages}</ul>
            </div>
        </div>

    )
}