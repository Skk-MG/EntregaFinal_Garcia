import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </Link>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-start">
                    <NavLink to='productos' className="navbar-item navBarTitle">Productos</NavLink>
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
