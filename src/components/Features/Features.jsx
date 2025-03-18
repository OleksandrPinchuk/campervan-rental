import { useSelector } from "react-redux";
import css from "./Features.module.css";
import Equipment from "../Equipment/Equipment";
import { selectCamper } from "../../redux/campers/selectors";
import icons from "/symbol-defs.svg";

const Features = () => {
    const camper = useSelector(selectCamper);
    // if (!currentCamper) {
    //     return <p>Camper details are not available.</p>;
    // }

    // const camperDetails = generateDetails(currentCamper);

    return (
        <div className={css.wrapper}>
            <Equipment camper={camper} icons={icons} />
            <h2>Vehicle details</h2>
            <ul>
                <li><p>Form{camper.form}</p></li>
                <li><p>Length{camper.length}</p></li>
                <li><p>Width{camper.width}</p></li>
                <li><p>Height{camper.height}</p></li>
                <li><p>Tank{camper.tank}</p></li>
                <li><p>Consumption{camper.consumption}</p></li>
            </ul>
        </div>
    );
}

export default Features;