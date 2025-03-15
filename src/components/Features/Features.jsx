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
        </div>
    );
}

export default Features;