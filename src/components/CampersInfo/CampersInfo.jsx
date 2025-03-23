import css from "./CampersInfo.module.css";
import icons from "/symbol-defs.svg";

const CampersInfo = ({ camper }) => {
    return (
        <>
            <div className={css.subject}>
                <div className={css.header}>
                    <h2 className={css.name}>{camper.name}</h2>
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
                <p className={css.name}>€{`${camper.price.toFixed(2)}`}</p>
            </div>
            <ul className={css.gallery}>
                {camper.gallery.map((image, index) => (
                    <li key={index} className={css.item}>
                        <img src={image.original} alt={`Camper photo ${image.index + 1}`} className={css.image}/>
                    </li>
                ))}
            </ul>
            <p className={css.description}>{camper.description}</p>
        </>
    )
}

export default CampersInfo