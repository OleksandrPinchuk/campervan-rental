import Button from "../../components/Button/Button.jsx"
import css from "./Home.module.css";

const Home = () => {
    return (
        <div className={css.home}>
            <div className="container">
                <Button size="large" onClick={() => alert("Explore Catalog")}>
                    View Now
                </Button>
            </div>
            <img  alt="camper at sunset" className={css.img}/>
        </div>
    )
}

export default Home;