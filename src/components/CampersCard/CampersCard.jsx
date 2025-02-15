import { useDispatch, useSelector } from "react-redux";
import css from "./CampersCard.module.css";
import icons from "/symbol-defs.svg";
import { toggleFavorite } from "../../redux/favorite/slice";
import Equipment from "../Equipment/Equipment";

const CampersCard = ({ camper }) => {
    const dispatch = useDispatch();
    const camperId = camper.id;
    const favorites = useSelector(state => state.favorite.favorites);
    const isFavorite = favorites.includes(camperId);

    return (
        <li className={css.card}>
            <div>
                <img alt={`Camper photo ${camper.id}`} className={css.img} src={camper.gallery[0].thumb} />
            </div>
            <div>
                <div className={css.header}>
                    <h2 className={css.name}>{camper.name}</h2>
                    <div className={css.header}>
                        <p className={css.name}>€{camper.price}</p>
                        <button className={css.heartBtn} onClick={() => dispatch(toggleFavorite(camperId))}>
                            <svg className={`${ isFavorite ? `${css.favorite}` : ''} ${css.icon}`}>
                                <use href={`${icons}#icon-heart`} />
                            </svg>
                        </button>
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
                    <p>{camper.location}</p>
                </div>
                <p className={css.description}>{camper.description}</p>
                <Equipment camper={camper} icons={icons} />
            </div>
            {/* <ul>
                {camper.gallery.map((image) => (
                    <li key={image.index}>
                        <img src={image.thumb} alt={`Camper photo ${image.index + 1}`}/>
                    </li>
                ))}
            </ul> */}
        </li>
    )
}   

export default CampersCard