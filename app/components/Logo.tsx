import { FaReact } from "react-icons/fa";
import { bebas } from "../ui/fonts";

const Logo = () => {
    return (
        <div className={`${bebas.className} flex flex-row items-center leading-none text-white`}>
            <FaReact className="h-20 w-20 rotate-[15deg]"/>
            <p className="text-[30px]  ml-3">Maximo Rojas</p>
        </div>
    );
}

export default Logo;    