import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment, toggleTransmission, updateFilter, setForm, clearFilters } from "../../redux/filters/slice.js";
import { fetchFilteredCampers } from "../../redux/campers/operations";
import css from "./Filters.module.css";
import { useId } from "react";
import icons from "/symbol-defs.svg";



const Filters = () => {
    const filters = useSelector((state) => state.filters);
    const form = useSelector((state) => state.filters.form);
    const equipment = useSelector((state) => state.filters.equipment);
    const currentTransmission = useSelector((state) => state.filters.transmission);
    console.log(currentTransmission);
    console.log(form);
    console.log(equipment);
    const dispatch = useDispatch();
    const locationId = useId();

    const handleLocationChange = (e) => {
        dispatch(updateFilter({ key: 'location', value: e.target.value }));
    };

    const handleEquipmentToggle = (key) => {
        dispatch(toggleEquipment({ key }));
    };

    const handleTransmissionToggle = () => {
        dispatch(toggleTransmission());
    };

    const handleSetForm = (key) => {
        dispatch(setForm({ key }));
    };
    

    const handleSearch = () => {
        dispatch(fetchFilteredCampers(filters));
        dispatch(clearFilters());
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
                    {/* {Object.keys(filters.equipment).map((key) => ( */}
                    {Object.keys(equipment).map((key) => (
                        <label key={`equipment-${key}`}
                            // onClick={() => handleEquipmentToggle(key)}
                            className={`${filters.equipment[key] ? `${css.active}` : ''} ${css.item}`}>
                            {/* <img src={`images/${key}.svg`} className={css.icon} alt={`${key} icon`} /> */}
                            <input 
                            type="checkbox"
                            name="vehicleType" 
                            value={key} 
                            checked={filters.form === key}
                            onChange={() => handleEquipmentToggle(key)}
                            className={css.radioButton}
                        />
                            <svg className={css.icon}>
                                <use href={`${icons}#icon-${key}`} />
                            </svg>
                            {key}
                        </label>))}
                    {/* <div onClick={() => handleTransmissionToggle()}
                        className={`${filters.transmission.automatic ? `${css.active}` : ''} ${css.button}`}>Automatic</div> */}
                </div>
                <label key={'transmission-automatic'}
                    onClick={() => handleTransmissionToggle()}
                    className={`${filters.transmission.automatic ? `${css.active}` : ''} ${css.item}`}>
                    <svg className={css.icon}>
                        <use href={`${icons}#icon-automatic`} />
                    </svg>
                    Automatic
                </label>
            </div>
            <div>
                <h3>Vehicle type</h3>
                {Object.keys(form).map((key) => (
                        <label key={`equipment-${key}`}
                            // onClick={() => handleSetForm(key)}
                        className={`${filters.form === key ? `${css.active}` : ''} ${css.item}`}>
                        <input 
                            type="radio" 
                            name="vehicleType" 
                            value={key} 
                            checked={filters.form === key}
                            onChange={() => handleSetForm(key)}
                            className={css.radioButton}
                        />
                            <svg className={css.icon}>
                                <use href={`${icons}#icon-${key}`} />
                            </svg>
                            {key}
                        </label>))}
            </div>
            <div className="filters">
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
        </div>
    )
}

export default Filters;