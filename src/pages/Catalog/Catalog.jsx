import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./Catalog.module.css";
import { setPage } from "../../redux/campers/slice.js";

const Catalog = () => {
    const dispatch = useDispatch();
    let page = useSelector(state => state.campers.page);
    console.log(page)

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch, page]);
    
    // const handleButtonClick = () => {
    //     dispatch(setPage(page + 1))
    // };

    return (
        <div className="container">
            <div className={css.wrapper}>
                <Filters />
                <CampersList />
            </div>
            <button onClick={() => dispatch(setPage())} className={css.button}>Load more</button>
        </div>
        
    )
}

export default Catalog