import Button from "../Button/Button";
import css from "./Form.module.css";
import { useState } from "react";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bookingDate: "",
        comment: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.bookingDate) {
            newErrors.bookingDate = "Booking date is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log("Form Data:", formData);
        }
    };
    
    return (
        <div className={css.border}>
            <form onSubmit={handleSubmit} className={css.form}>
                <h3 className={css.title}>Book your campervan now</h3>
                <p className={css.text}>Stay connected! We are always ready to help you.</p>

                {errors.name && <p className={css.error}>{errors.name}</p>}
                <input type="text" name="name" placeholder="Name*" onChange={handleChange} className={css.input} />

                {errors.email && <p className={css.error}>{errors.email}</p>}
                <input type="email" name="email" placeholder="Email*" onChange={handleChange} className={css.input} />

                {errors.bookingDate && <p className={css.error}>{errors.bookingDate}</p>}
                <input type="date" name="bookingDate" placeholder="Booking date*" onChange={handleChange} className={css.input} />
                
                <textarea name="comment" placeholder="Comment" onChange={handleChange} className={css.textarea} />
                <Button type="submit" onClick={handleSubmit}>Send</Button>
            </form>
        </div>
    )
}
