import { Fragment } from "react/cjs/react.development"
// import Header from "../Layout/Header"
import AvialableMeals from "./AvailableMeals"
import MealsSummary from "./Mealssummary"



const Meals =()=>{
    return  (
        <Fragment>
          <MealsSummary/>
          <AvialableMeals/>
        </Fragment>
    )
}

export default Meals;