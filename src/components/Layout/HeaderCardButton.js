  
//   import { useContext } from "React/cjs/react.production.min";
  import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cartcontext from "../../Store/Cart-context";
// import Cart from "../Cart/Cart";
import {useState,useContext ,useEffect} from "react";



const HeaderCardButton = (props) => {
   const [btnishighlighted ,setbtnishighlighted]=useState(false)
    const CartCtx =useContext(Cartcontext);
    const {items}=CartCtx
    const numberofCartItem = CartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0)
     const btnclasses = `${classes.button}  ${ btnishighlighted? classes.bump:''}`
  
    useEffect(()=>{ 
       const timer=setTimeout(() => {
        setbtnishighlighted(false)
      }, 300);
      if(items.length===0){
        return ;
      }
      setbtnishighlighted(true)
              return ()=>{
                clearTimeout(timer)
              }
    },[items])
   

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={classes.badge}> {numberofCartItem}</span>
    </button>
  );
};

export default HeaderCardButton;
