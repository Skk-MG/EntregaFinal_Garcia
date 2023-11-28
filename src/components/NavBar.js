import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <h1 className="logo">Il Lapis</h1>
                </Link>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-start">
                    <NavLink to='productos' className="navbar-item navBarTitle">Minerales</NavLink>
                    <NavLink to='productos' className="navbar-item navBarTitle">Decorativas</NavLink>
                    <NavLink to='productos' className="navbar-item navBarTitle">Curativas</NavLink>
                    <NavLink to='productos' className="navbar-item navBarTitle">De Energia</NavLink>
                    <NavLink to='productos' className="navbar-item navBarTitle">Curiosidades</NavLink>
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
