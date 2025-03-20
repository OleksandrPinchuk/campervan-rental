import Button from "../Button/Button";
import css from "./Form.module.css";
export const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };
    
    return (
        <div className={css.border}>
            <form className={css.form}>
                <h3 className={css.title}>Book your campervan now</h3>
                <p className={css.text}>Stay connected! We are always ready to help you.</p>
                <input type="text" name="name" placeholder="Name*" className={css.input} />
                <input type="email" name="email" placeholder="Email*" className={css.input} />
                <input placeholder="Booking date*" type="date" className={css.input} />
                <textarea placeholder="Comment" className={css.textarea} />
                <Button onClick={handleSubmit}>Send</Button>
            </form>
        </div>
    )
}
