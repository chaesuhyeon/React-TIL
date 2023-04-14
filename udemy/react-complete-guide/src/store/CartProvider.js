import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            //items에 이미 있는 상품인지 체크한다. index가 반환되면 아이템이 장바구니에 있다는 뜻이다.
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex]; //
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            // 수량이 하나일 때 - 버튼을 클릭하면 수량이 없으므로 장바구니에서 완전히 삭제한다
            updatedItems = state.items.filter((item) => item.id !== action.id); // id가 같은 항목만 삭제하고 같지 않은 항목은 장바구니에 그대로 냅둔다
        } else {
            // 삭제하는 것이 아니라 수량만 줄인다
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items]; // 기존 배열을 복사해서 새로운 배열을 만든다
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            // 새로운 객체를 반환한다.
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
