import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <h1 className="logo">Das-Teck</h1>
                </Link>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-start">
                    <Link to={`/categoria/Xiaomi`} className="navbar-item navBarTitle">Xiaomi</Link>
            
                    <Link to={`/categoria/Iphone`} className="navbar-item navBarTitle">Iphone</Link>

                    <Link to={`/categoria/Motorola`} className="navbar-item navBarTitle">Motorola</Link>

                    <Link to={`/categoria/Samsung`} className="navbar-item navBarTitle">Samsung</Link>

                    <Link to={`/categoria/Varios`} className="navbar-item navBarTitle">Varios</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <CartWidget />
                    </div>
                </div>

            </div>
        </nav>
    )
};

export default NavBar;
