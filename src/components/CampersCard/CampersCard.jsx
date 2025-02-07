import css from "./CampersCard.module.css";

const CampersCard = ({camper}) => {
    return (
        <li className={css.card}>
            <div>
                <img alt={`Camper photo ${camper.id}`} className={css.img} src={camper.gallery[0].thumb} />
            </div>
            <div>
                <div className={css.header}>
                    <h2 className={css.name}>{camper.name}</h2>
                    <p className={css.name}>€{camper.price}</p>
                </div>
                
                <p>{camper.rating}({camper.reviews.length})</p>
                <p>{camper.description}</p>
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