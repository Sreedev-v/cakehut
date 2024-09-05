import { createContext, useState } from "react";

export const Ctx = createContext();

const CtxProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState(""); // New state

  const displayMessage = (type) => {
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Display for 2 seconds
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    displayMessage("added"); // Pass message type
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    displayMessage("removed"); // Pass message type
  };
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <Ctx.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        cart,
        showMessage,
        messageType,
        isInCart,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};
export default CtxProvider;
