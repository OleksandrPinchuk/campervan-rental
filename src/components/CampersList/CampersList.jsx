import { useSelector } from "react-redux";
import CampersCard from "../CampersCard/CampersCard"


const CampersList = () => {
    const campers = useSelector(state => state.campers.items);
    console.log(campers);

    return (
        <ul>
            {campers.map((camper) => (
                <CampersCard key={camper.id} camper={camper}/>
            ))}
        </ul>
    )
}

export default CampersList