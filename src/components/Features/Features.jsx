import { useSelector } from "react-redux";
import css from "./Features.module.css";
import Equipment from "../Equipment/Equipment";
import { selectCamper } from "../../redux/campers/selectors";
import icons from "/symbol-defs.svg";

const Features = () => {
    const camper = useSelector(selectCamper);

    return (
        <div className={css.wrapper}>
            <Equipment camper={camper} icons={icons} />
            <div>
                <h3 className={css.title}>Vehicle details</h3>
                <ul>
                    <li className={css.item}>
                        <p className={css.text}>Form</p>
                        <p className={css.text}>{camper.form}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Length</p>
                        <p className={css.text}>{camper.length}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Width</p>
                        <p className={css.text}>{camper.width}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Height</p>
                        <p className={css.text}>{camper.height}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Tank</p>
                        <p className={css.text}>{camper.tank}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Consumption</p>
                        <p className={css.text}>{camper.consumption}</p>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Features;