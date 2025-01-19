import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./Catalog.module.css";
const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <div className={"container", css.wrapper}>
            <Filters />
            <CampersList />
        </div>
    )
}

export default Catalog