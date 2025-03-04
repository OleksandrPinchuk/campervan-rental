import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import icons from "/symbol-defs.svg";
import css from "./Details.module.css";
import Equipment from "../../components/Equipment/Equipment";

const Details = () => {
    const { id } = useParams();
    // const car = getCarById(id);
    const dispatch = useDispatch();
    const camper = useSelector(state => state.campers.currentItem);

    useEffect(() => {
        dispatch(fetchCamperById(id));
        console.log('details')
    }, [dispatch, id]);

    console.log(camper)

    return (
        <div className="container">
            <li className={css.card}>
                <ul>
                {/* {camper.gallery.map((image) => (
                    <li key={image.index}>
                        <img src={image.thumb} alt={`Camper photo ${image.index + 1}`}/>
                    </li>
                ))} */}
            </ul>
            <div>
                <div className={css.header}>
                    <h2 className={css.name}>{camper.name}</h2>
                    <div className={css.header}>
                        <p className={css.name}>€{camper.price}</p>
                    </div>
                </div>
                <div className={css.details}>
                    <svg className={css.star}>
                        <use href={`${icons}#icon-star`} />
                    </svg>
                    <p>{camper.rating}({camper.reviews.length} Reviews)</p>
                    <svg className={css.map}>
                        <use href={`${icons}#icon-map`} />
                    </svg>
                    {/* <p>{camper.location}</p> */}
                </div>
                {/* <p className={css.description}>{camper.description}</p> */}
                <Equipment camper={camper} icons={icons} />
            </div>
        </li>
             
            <ul>
                <li>
                <Link to="features">Go through the features</Link>
                </li>
                <li>
                <Link to="reviews">Go through the reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Details