import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlignted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    } `; // animation class

    useEffect(() => {
        // 장바구니에 1개 담길때만 state 변경하도록 조건문
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlignted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlignted(false);
        }, 300);

        // clean up
        // 여러 항목을 빠르게 추가하면 이전 타이머는 지우고 새 타이머를 설정하고 이전 타이머는 삭제되도록 클린업 함수 작성
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
