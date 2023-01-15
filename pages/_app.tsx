import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import AppContext from '../components/AppContext';
import { Alert, NotifyType } from '../components/Alert';
import LocalStorage from './utils/LocalStorage';

export default function App({ Component, pageProps }: AppProps) {

  type Data = {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    price: string;
    rating: { rate: string }
  };
  const [cart, setCart] = useState<Data[]>([])
  const [theme, setTheme] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [userData, setUserData] = useState()

  const handleCartState = () => {
    setCartOpen(!cartOpen)
  }

  const addToCart = (cartItem: any) => {
    const checkCart = cart.find((cart) => {
      return cart?.id === cartItem?.id
    })
    if (!checkCart) {
      const updatedArray = [...cart, cartItem]
      setCart(updatedArray)
      setCartOpen(true)
    } else {
      Alert({ title: "Already added to Cart", type: NotifyType.info, theme: theme })
      setCartOpen(true)
    }
  }

  const removeCartItem = (id: number) => {
    const updatedArray = cart.filter((cart) => {
      return cart.id !== id
    })
    setCart(updatedArray)
  }



  return (<AppContext.Provider
    value={{
      mainCartState: { cart, addToCart, removeCartItem, setCart },
      themeState: { theme, setTheme },
      cartState: { cartOpen, handleCartState },
      userState: { userData, setUserData }
    }}>
    <Component {...pageProps} />
  </AppContext.Provider>)

}
