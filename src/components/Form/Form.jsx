import Button from "../Button/Button";
import css from "./Form.module.css";
export const Form = () => {
    
    
    return (
        <div className={css.form}>
            <form  className="form-container">
                <h2>Book your campervan now</h2>
                <p>Stay connected! We are always ready to help you.</p>
                <input  placeholder="Name*" />
                <input placeholder="Email*" type="email" />
                <input placeholder="Booking date*" type="date" />
                <textarea placeholder="Comment" />
                <Button>Send</Button>
            </form>
        </div>
    )
}
