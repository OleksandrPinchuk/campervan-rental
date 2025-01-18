import { NavLink } from "react-router-dom";
import css from "./Header.module.css";


export const Header = () => {
    return (
        <header className={css.header}>
            <a href="/">
                <img src="/images/TravelTrucks.svg" alt="logo" />
            </a>
            <nav className={css.nav}>
                <NavLink to="/" className={css.link}>Home</NavLink>
                <NavLink to="/catalog" className={css.link}>Catalog</NavLink>
            </nav>
        </header>
    )
}
