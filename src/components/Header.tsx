import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";

export default function Header() {
    return (
        <header className="w-full h-20 px-10 bg-primary-100 border-b border-black flex items-center justify-between">
            <div className="uppercase">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="h-6 cursor-pointer" />
                </Link>
            </div>
        </header>
    );
}
