import { useSelector } from "react-redux";

import css from "./Features.module.css";

const Features = () => {
    const currentCamper = useSelector(selectCurrentCamper);
    if (!currentCamper) {
        return <p>Camper details are not available.</p>;
    }

    
    const camperDetails = generateDetails(currentCamper);

    return (
        <div className={css.wrapper}>
        
        <div className={css.wrapDetails}>
            <h3 className={css.text}>Vehicle details</h3>
            <hr className={css.horizontLine} />
            <ul className={css.detailsList}>
            {camperDetails.map(({ label, value }, index) => (
                <li className={css.detailsItem} key={index}>
                <p className={css.detailText}>{label}</p>
                <span className={css.detailText}>{value}</span>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
}

export default Features;