import { useSelector } from "react-redux";
import CampersCard from "../CampersCard/CampersCard"
import { selectCampers } from "../../redux/campers/selectors";


const CampersList = () => {
    const campers = useSelector(selectCampers);
    console.log(campers);
    // campers.forEach(vehicle => console.log(vehicle.form));

    return (
        <ul>
            {campers.map((camper) => (
                <CampersCard key={camper.id} camper={camper}/>
            ))}
        </ul>
    )
}

export default CampersList