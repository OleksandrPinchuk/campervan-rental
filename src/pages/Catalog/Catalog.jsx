import { useEffect } from "react";
import {  fetchFilteredCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./Catalog.module.css";
import { setPage } from "../../redux/campers/slice.js";
import { selectPage } from "../../redux/campers/selectors.js";

const Catalog = () => {
    const dispatch = useDispatch();
    let currentPage = useSelector(selectPage);
    console.log("Current page:", currentPage);

    useEffect(() => {
        dispatch(fetchFilteredCampers())
    }, [dispatch]);
    
    const handleButtonClick = () => {
        const nextPage = currentPage + 1;
        dispatch(setPage(nextPage));
        dispatch(fetchFilteredCampers({ page: nextPage, limit: 4 }))
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