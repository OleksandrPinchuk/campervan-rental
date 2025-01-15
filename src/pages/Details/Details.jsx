import { Link, Outlet, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    // const car = getCarById(id);
    return (
        <div>
            <p>Now showing car with id - {id}</p>
            <h1>About page</h1>
            <ul>
                <li>
                <Link to="features">Go through the features</Link>
                </li>
                <li>
                <Link to="reviews">Go through the reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Details