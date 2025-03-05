import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./Catalog.module.css";

const Catalog = () => {
    const dispatch = useDispatch();
    let page = useSelector(state => state.campers.page);
    console.log(page)

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);
    
    const handleButtonClick = () => {
        return page = page + 1
    };

    return (
        <div className="container">
            <div className={css.wrapper}>
                <Filters />
                <CampersList />
            </div>
            <button onClick={handleButtonClick} className={css.button}>Load more</button>
        </div>
        
    )
}

export default Catalog