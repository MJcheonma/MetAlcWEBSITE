import React from "react";

const TeamMember = ({name, role, description, imageSrc}) => {
    return(
        <div className="flex-1 flex flex-col max-w-[300px] text-center text-[#ffffffc8]">
            <img src={imageSrc} alt={name} className="rounded-full mb-4 w-[8rem] aspect-square mx-auto"/>
            <div className="font-bold text-xl mb-2">
                {name}
            </div>
            <div className="text-sm mb-2">
                {role}
            </div>
            <div className="text-sm mb-4">
                {description}
            </div>
        </div>
    )
}

export default TeamMember;