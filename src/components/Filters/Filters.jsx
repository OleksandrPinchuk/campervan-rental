import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment, toggleTransmission, setForm, clearFilters, setLocation } from "../../redux/filters/slice.js";
import { fetchFilteredCampers } from "../../redux/campers/operations";
import css from "./Filters.module.css";
import { useId } from "react";
import icons from "/symbol-defs.svg";
import Button from "../Button/Button.jsx";
import { selectEquipment, selectFilters, selectForm, selectLocation } from "../../redux/filters/selectors.js";
import { selectLimit } from "../../redux/campers/selectors.js";
import { setPage } from "../../redux/campers/slice.js";

const cityList = [
    "Kyiv, Ukraine",
    "Dnipro, Ukraine",
    "Poltava, Ukraine",
    "Odesa, Ukraine",
    "Kharkiv, Ukraine",
    "Sumy, Ukraine",
    "Lviv, Ukraine",
    "Kharkiv, Ukraine",
];

const Filters = () => {
    const filters = useSelector(selectFilters);
    const form = useSelector(selectForm);
    const equipment = useSelector(selectEquipment);
    const limit = useSelector(selectLimit);
    const location = useSelector(selectLocation);
    
    const dispatch = useDispatch();
    const locationId = useId();

    const handleLocationChange = (e) => {
        // dispatch(updateFilter({ key: 'location', value: e.target.value }));
        dispatch(setLocation(e.target.value));
    };

    const handleEquipmentToggle = (key) => {
        dispatch(toggleEquipment({ key }));
    };

    const handleTransmissionToggle = () => {
        dispatch(toggleTransmission());
    };

    const handleSetForm = (type) => {
        dispatch(setForm({ type }));
    };
    

    const handleSearch = () => {
        dispatch(setPage(1))
        dispatch(fetchFilteredCampers({ filters, page: 1, limit }));
        dispatch(clearFilters());
    };
    
    return (
        <div className={css.filters}>
            <div className={css.location}>
                <label htmlFor={locationId} className={css.label}>Location</label>
                {/* <input type="text" value={filters.location || ''} onChange={handleLocationChange} id={locationId} placeholder="City" className={css.input}/> */}
                <select className={css.customSelect} id="location-select" value={location} onChange={handleLocationChange}>
                    <option value="">City</option>
                        {cityList.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                </select>
            </div>
            <h2 className={css.header}>Filters</h2>
            <h3 className={css.title}>Vehicle equipment</h3>
            <hr className={css.line} />
            <ul className={css.equipment}>
                {Object.keys(equipment).map((key) => (
                    <li key={`equipment-${key}`}>
                        <label className={`${filters.equipment[key] ? `${css.active}` : ''} ${css.item}`}>
                        <input type="checkbox" name="vehicleType" value={key} checked={filters.equipment[key] || false}
                            onChange={() => handleEquipmentToggle(key)}
                            className={css.radioButton}
                        />
                            <svg className={css.icon}>
                                <use href={`${icons}#icon-${key}`} />
                            </svg>
                            {key}
                        </label>
                    </li>
                ))}
                <li>
                    <label key={'transmission-automatic'}
                        onClick={() => handleTransmissionToggle()}
                        className={`${filters.transmission.automatic ? `${css.active}` : ''} ${css.item}`}>
                        <svg className={css.icon}>
                            <use href={`${icons}#icon-automatic`} />
                        </svg>
                        Automatic
                    </label>
                </li>
            </ul>
            <h3 className={css.title}>Vehicle type</h3>
            <hr className={css.line} />
            <ul className={css.form}>
                {Object.keys(form).map((type) => (
                    <li key={`equipment-${type}`}>
                        <label className={`${filters.form[type] ? `${css.active}` : ''} ${css.item}`}>
                            <input type="radio" name="vehicleType" value={type} checked={filters.form[type] || false}
                                onChange={() => handleSetForm(type)}
                                className={css.radioButton}
                                />
                            <svg className={css.icon}>
                                <use href={`${icons}#icon-${type}`} />
                            </svg>
                            {type}
                        </label>
                    </li>
                    ))}
            </ul>
        <Button size="medium" onClick={handleSearch}>
            Search
        </Button>
    </div>
    )
}

export default Filters;