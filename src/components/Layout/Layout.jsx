
import { Header } from "../Header/Header.jsx";
import css from "./Layout.module.css";

const Layout = ({children}) => {
    return (
            <div>
                <Header />
                {children}
            </div>
    );
};

export default Layout;