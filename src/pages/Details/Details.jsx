import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import css from "./Details.module.css";
import { selectCamper, selectLoading } from "../../redux/campers/selectors";
import CampersInfo from "../../components/CampersInfo/CampersInfo";
import { Form } from "../../components/Form/Form";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);
    const loading = useSelector(selectLoading);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCamperById(id));
        if (location.pathname === `/catalog/${id}`) {
            navigate(`/catalog/${id}/features`, { replace: true }); 
        }
    }, [dispatch, id, location.pathname, navigate ]);

    const getClassName = (props) => {
        return props.isActive ? `${css.link} ${css.active}` : css.link;
    };

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {camper && (
                <div>
                    <CampersInfo camper={camper} />
                    <ul className={css.navigation}>
                        <li>
                            <NavLink to="features" className={getClassName}>Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews" className={getClassName}>Reviews</NavLink>
                        </li>
                    </ul>
                    <div className={css.flex}>
                        <Outlet />
                        <Form />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Details