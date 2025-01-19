import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment, toggleTransmission, updateFilter } from "../../redux/filters/slice";
import { fetchFilteredCampers } from "../../redux/campers/operations";



const Filters = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const handleLocationChange = (e) => {
        dispatch(updateFilter({ key: 'location', value: e.target.value }));
    };

    const handleEquipmentToggle = (key) => {
        dispatch(toggleEquipment({ key }));
    };

    const handleTransmissionToggle = () => {
        dispatch(toggleTransmission());
    };

    const handleSearch = () => {
        dispatch(fetchFilteredCampers(filters));
    };
    
    return (
        <div>
            <input type="text" value={filters.location} onChange={handleLocationChange} placeholder="Enter location"/>
            <div>
                <h3>Vehicle equipment</h3>
                <div className="equipment">
                    {Object.keys(filters.equipment).map((key) => (
                        <button key={key} onClick={() => handleEquipmentToggle(key)} className={filters.equipment[key] ? 'active' : ''}>
                            {key}
                        </button>))}
                    <button onClick={() => handleTransmissionToggle()} className={filters.transmission.automatic ? 'active' : ''}>
                            Automatic
                    </button>
                </div>
            </div>
            <div>
                <h3>Vehicle type</h3>
                <div className="vehicle-type">
                    <button onClick={() => dispatch(updateFilter({ key: 'form', value: 'van' }))}>Van</button>
                    <button onClick={() => dispatch(updateFilter({ key: 'form', value: 'fully-integrated' }))}>Fully Integrated</button>
                    <button onClick={() => dispatch(updateFilter({ key: 'form', value: 'alcove' }))}>Alcove</button>
                </div>
            </div>
            <div className="filters">
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
        </div>
    )
}

export default Filters;