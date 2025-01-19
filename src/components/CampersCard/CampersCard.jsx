import css from "./CampersCard.module.css";

const CampersCard = ({camper}) => {
    return (
        <li>
            <div>
                <img alt="camper" className={css.img} src={camper.gallery[0].thumb} />
            </div>
            <div>
                <h2>{camper.name}</h2>
                <p>€{camper.price}</p>
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