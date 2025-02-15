import css from "./Equipment.module.css";

const optionsMap = {
    transmission: { label: "Automatic", icon: "icon-automatic" },
    engine: { label: "Diesel", icon: "⛽" },
    AC: { label: "AC", icon: "icon-AC" },
    bathroom: { label: "Bathroom", icon: "icon-bathroom" },
    kitchen: { label: "Kitchen", icon: "icon-kitchen" },
    TV: { label: "TV", icon: "icon-TV" },
    radio: { label: "Radio", icon: "📻" },
    refrigerator: { label: "Refrigerator", icon: "icon-fridge" },
    microwave: { label: "Microwave", icon: "icon-microwave" },
    gas: { label: "Gas", icon: "icon-gas-stove" },
    water: { label: "Water", icon: "icon-water" },
};

const Equipment = ({ camper, icons }) => {
    const getAvailableOptions = (camper) => {
        if (!camper || typeof camper !== "object") return [];
        return Object.entries(optionsMap)
            .filter(([key]) => camper[key] === true || typeof camper[key] === "string")
            .map(([key, value]) => value);
    };
    const availableOptions = getAvailableOptions(camper);

    return (
        <ul className={css.equipment}>
            {availableOptions.map((option, index) => (
                <li key={index} className={css.item}>
                    <svg className={css.icon}>
                        <use href={`${icons}#${option.icon}`} />
                    </svg>
                    <p className={css.label}>{option.label}</p>
                </li>
            ))}
        </ul>
    )
};

export default Equipment;