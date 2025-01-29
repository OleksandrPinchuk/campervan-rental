import { useSelector } from "react-redux";
import CampersCard from "../CampersCard/CampersCard"


const CampersList = () => {
    const campers = useSelector(state => state.campers.items);
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