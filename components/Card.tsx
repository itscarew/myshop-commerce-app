import Button from './Button'
import { BsTrash } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"
import moment from 'moment'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext, } from 'react'
import AppContext from './AppContext'
import { useRouter } from 'next/router'
import { Alert, NotifyType } from './Alert'
import Link from 'next/link'
import { numberWithCommas } from '../pages/utils/formatNumber'

export default function Card({ watchlist, data, onClick, }: any) {
    const { mainCartState }: any = useContext(AppContext)
    const cart = mainCartState.cart
    const router = useRouter()

    const titleLength = (text: string) => {
        if (text?.length > 24) {
            return `${text?.slice(0, 20)}....`
        }
        else {
            return text
        }
    }

    const checkInCart = (id: any) => {
        const check = cart.find((cart: any) => {
            return cart.id === id
        })
        return check
    }

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

    return (
        <>
            <div className={`w-1/4  p-2`} >
                <div title={data?.title}
                    className='flex flex-col hover:shadow-2xl mb-4 cursor-pointer'
                >
                    <div className='relative rounded-lg  overflow-hidden' style={{ height: "23rem" }}
                        onClick={() => {
                            router.push(`/product/${data.id}`)
                        }}
                    >
                        <Image
                            style={{ objectFit: "contain" }}
                            className='transform transition duration-300 hover:scale-105'
                            src={data?.image}
                            alt={data?.title}
                            fill
                        />
                    </div>
                    <div className='flex flex-col h-40 justify-between p-2'>
                        <div className='py-0'
                            onClick={() => {
                                router.push(`/product/${data.id}`)
                            }}
                        >
                            <div className='flex justify-between items-baseline ' >
                                <h3 className='text-xl font-black'> {titleLength(data?.title)} </h3>
                                <span className='text-sm font-semibold text-white py-0.5 px-2' style={{ background: "#e85d04" }} > {data?.rating?.rate} </span>
                            </div>
                            <Link href={`/category/${data?.category}`} className='text-sm'> {data?.category} </Link>
                            <h4 className='  text-lg  font-medium'>&#36;{numberWithCommas(data?.price)}</h4>

                        </div>
                        {checkInCart(data?.id) ?
                            <div className='w-full flex divide-x-2 mt-3 h-10  border-2 border-comas-second text-lg' >
                                <div className="w-1/3 flex items-center justify-center cursor-pointer" onClick={() => deduct(data.id)} >-</div>
                                <div className="w-1/3 flex items-center justify-center">{checkInCart(data.id).quantity}</div>
                                <div className="w-1/3 flex items-center justify-center cursor-pointer" onClick={() => add(data.id)} >+</div>
                            </div>
                            :
                            <Button
                                className={`h-10 mt-2`}
                                onClick={
                                    () => mainCartState.addToCart(
                                        {
                                            id: data.id,
                                            title: data.title,
                                            price: data.price,
                                            image: data.image,
                                            quantity: 1
                                        }
                                    )} >
                                Add to Cart
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

