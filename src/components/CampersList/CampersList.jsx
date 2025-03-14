import { useSelector } from "react-redux";
import CampersCard from "../CampersCard/CampersCard";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors";
import { TbCamper } from "react-icons/tb";
import css from "./CampersList.module.css";


const CampersList = () => {
    const campers = useSelector(selectCampers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error
                ?
                (<div className={css.error}>
                    <TbCamper className={css.image} />
                    <p className={css.text}>No campers found for your request</p>
                </div>)
                : 
                (<ul>
                    {campers.map((camper) => (
                        <CampersCard key={camper.id} camper={camper} />
                    ))}
                </ul>)
            }
        </>
    )
};

export default CampersList;