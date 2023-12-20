import CartWidget from "./CartWidget";
import { FaReact } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {

    return (
        <nav className="navbar">
            <Link className="logo" to="/"><h1>Das-Teck<FaReact /></h1></Link>
            
            <div className="menu">
                <NavLink className="menuLink" to="/" style={({ isActive }) => ({color: isActive ? "white" : ""})}>Inicio</NavLink>
                <NavLink className="menuLink" to={`/categoria/Xiaomi`} style={({ isActive }) => ({color: isActive ? "white" : ""})}>Xiaomi</NavLink>
                <NavLink className="menuLink" to={`/categoria/Iphone`} style={({ isActive }) => ({color: isActive ? "white" : ""})}>Iphone</NavLink>
                <NavLink className="menuLink" to={`/categoria/Motorola`} style={({ isActive }) => ({color: isActive ? "white" : ""})}>Motorola</NavLink>
                <NavLink className="menuLink" to={`/categoria/Samsung`} style={({ isActive }) => ({color: isActive ? "white" : ""})}>Samsung</NavLink>
                <NavLink className="menuLink" to={`/categoria/Varios`} style={({ isActive }) => ({color: isActive ? "white" : ""})}>Varios</NavLink>
                <CartWidget />
            </div>
        </nav>
    )
};

export default NavBar;
