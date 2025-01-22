import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment, toggleTransmission, updateFilter } from "../../redux/filters/slice";
import { fetchFilteredCampers } from "../../redux/campers/operations";
import css from "./Filters.module.css";
import { useId } from "react";



const Filters = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    const locationId = useId();

    const handleLocationChange = (e) => {
        dispatch(updateFilter({ key: 'location', value: e.target.value }));
    };

    const handleEquipmentToggle = (key) => {
        dispatch(toggleEquipment({ key }));
    };

    const handleTransmissionToggle = () => {
        dispatch(toggleTransmission(payload));
        console.log(dispatch(toggleTransmission(payload)))
    };
    

    const handleSearch = () => {
        dispatch(fetchFilteredCampers(filters));
    };
    
    return (
        <div>
            <div className={css.location}>
                <label htmlFor={locationId} className={css.label}>Location</label>
                <input type="text" value={filters.location} onChange={handleLocationChange} id={locationId} placeholder="City" className={css.input}/>
            </div>
            <div>
                <h2 className={css.header}>Filters</h2>
                <h3>Vehicle equipment</h3>
                <div className="equipment">
                    {Object.keys(filters.equipment).map((key) => (
                        <div key={`equipment-${key}`}
                            onClick={() => handleEquipmentToggle(key)}
                            className={`${filters.equipment[key] ? `${css.active}` : ''} ${css.button}`}>
                            <img src={`images/${key}.svg`} className={css.icon} alt={`${key} icon`} />
                            {key}
                        </div>))}
                    <div onClick={() => handleTransmissionToggle()}
                        className={`${filters.transmission.automatic ? `${css.active}` : ''} ${css.button}`}>Automatic</div>
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