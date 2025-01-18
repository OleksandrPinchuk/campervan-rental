import Button from "../../components/Button/Button.jsx"
import css from "./Home.module.css";

const Home = () => {
    return (
        <div className={css.home}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.info}>
                        <h1 className={css.header}>Campers of your dreams</h1>
                        <p className={css.text}>You can find everything you want in our catalog</p>
                    </div>
                    <Button size="large" onClick={() => alert("Explore Catalog")}>
                        View Now
                    </Button>
                </div>
            </div>
            <img  alt="camper at sunset" className={css.img}/>
        </div>
    )
}

export default Home;