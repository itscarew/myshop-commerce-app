import AppContext from "./AppContext"
import { useContext } from 'react'
import Button from "./Button"
import Image from "next/image"
import { CiShoppingCart } from "react-icons/ci"
import { numberWithCommas } from "../pages/utils/formatNumber"

export default function CartComponent() {
    const { mainCartState, userState }: any = useContext(AppContext)
    const cart = mainCartState.cart

    const add = (id: any) => {
        let newCart = [...cart]
        const findItem = newCart.find((item: any) => {
            return item.id === id
        })
        findItem.quantity = findItem.quantity + 1
        mainCartState.setCart(newCart)
    }

    const deduct = (id: any) => {
        let newCart = [...cart]
        const findItem = newCart.find((item: any) => {
            return item.id === id
        })
        if (findItem.quantity < 2) {
            return null
        } else {
            findItem.quantity = findItem.quantity - 1
            mainCartState.setCart(newCart)
        }
    }

    const eachProductTotalAmount = (price: number, quantity: number = 1) => {
        return price * quantity
    }

    const subTotal = cart?.reduce(function (
        accumulator: any,
        currentValue: any
    ) {
        return accumulator + (currentValue?.price * currentValue?.quantity);
    },
        0);


    return (
        <>
            <div className="px-6" >
                <div className="flex justify-center items-center w-full h-16 border-b-2 border-comas-first" >
                    Wohoo! You are eligible for free shipping! : Lets Go
                </div>

                <div className="py-4" >
                    {cart.length < 1 ? <div className="w-full flex flex-col  items-center justify-center" style={{ height: "80vh" }} >
                        <CiShoppingCart size={100} />
                        <div>Your Cart is Empty</div>
                    </div> :
                        <>
                            {cart.map((cart: any) => {
                                return (
                                    <div key={cart?.id} className='relative flex items-center justify-around w-full mb-4'  >
                                        <span className="absolute top-2 right-2 text-xl font-thin cursor-pointer"
                                            onClick={
                                                () => mainCartState.removeCartItem(cart.id)}
                                        >
                                            x
                                        </span>
                                        <div className='w-4/12 flex items-center justify-center relative overflow-hidden ' >
                                            <Image
                                                src={cart?.image!}
                                                alt="Picture of the author"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className='w-6/12 p-2 flex flex-col justify-between '>
                                            <h3 className='text-base font-thin'> {cart?.title} </h3>
                                            <div className='w-2/3 flex divide-x-2 mt-3 h-10  border-2 border-comas-second text-base' >
                                                <div className="w-1/3 flex items-center justify-center cursor-pointer" onClick={() => deduct(cart.id)} >-</div>
                                                <div className="w-1/3 flex items-center justify-center">{cart?.quantity}</div>
                                                <div className="w-1/3 flex items-center justify-center cursor-pointer" onClick={() => add(cart.id)} >+</div>
                                            </div>
                                        </div>
                                        <div className="flex-1" >
                                            <h4 className='text-base font-medium text-right whitespace-nowrap  text-comas-second '>&#36;{eachProductTotalAmount(cart?.price, cart?.quantity)}  </h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </>}
                </div>

                {cart.length > 0 &&
                    <div className=" w-full h-16 border-t-2 border-comas-first mb-24" >
                        <div className="flex justify-between my-1" >
                            <span>Subtotal</span>
                            <span>&#36;{numberWithCommas(subTotal)} </span>
                        </div>
                        <div className="flex justify-between" >
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <Button className="w-full h-12 my-4" >
                            Checkout
                        </Button>
                    </div>}
            </div>
        </>
    )
}
