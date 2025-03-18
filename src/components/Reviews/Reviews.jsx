import { useSelector } from "react-redux";
import css from "./Reviews.module.css"
import { selectCamper } from "../../redux/campers/selectors";

const Reviews = () => {
    const camper = useSelector(selectCamper);
    return (
        <div className={css.wrapper}>
            {camper.reviews.map((record, index) => (
                <li key={index}>
                    <h3>{record.reviewer_name}</h3>
                    <p>{record.comment}</p>
                    
                </li>
            ))}
        </div>
    )
}

export default Reviews