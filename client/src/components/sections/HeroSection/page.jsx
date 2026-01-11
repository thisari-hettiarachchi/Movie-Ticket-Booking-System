import Image from "next/image";
import { assets } from "@/assets/assets";
import { Calendar1Icon, ClockIcon } from "lucide-react";
import React from "react";

const Hero = () => {  
    return (    
        <div className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-hero bg-cover bg-center h-screen">      
            <Image        
                src={assets.marvelLogo}        
                alt="marvelLogo"        
                className="max-h-11 lg:h-11 mt-20"     
            />
        </div>
    )
}