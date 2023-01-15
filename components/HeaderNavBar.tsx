import React, { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx"
import { FaShopify } from "react-icons/fa"
import { BsCart4 } from "react-icons/bs"
import AppContext from "./AppContext";
import LocalStorage from "../pages/utils/LocalStorage";

export default function HeaderNavBar() {
    const router = useRouter();
    const { cartState, userState }: any = useContext(AppContext)
    const [open, setOpen] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [shopOpen, setShopOpen] = useState(false)

    const handleHambuger = () => {
        setOpen(!open)
    }
    const handleUserHambuger = () => {
        setOpen2(!open2)
    }

    const handleShopLink = () => {
        setShopOpen(!shopOpen)
    }

    useEffect(() => {
        setOpen(false)
    }, [router.pathname])

    const navRuutes = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
    ]

    const userRoutes = [
        { name: "Settings", href: "/" },
        { name: "Logout", href: "/" },
    ]

    const shopRoutes = [
        { name: "Men's clothing", href: "/category/men's clothing" },
        { name: "Women's clothing", href: "/category/women's clothing" },
        { name: "Jewelery", href: "/category/jewelery" },
        { name: "Electronics", href: "/category/electronics" },
    ]

    useEffect(() => {
        const userDataPersist = LocalStorage.getItem("userData")
        if (userDataPersist) {
            userState.setUserData(userDataPersist)
        }
    }, [])

    const userData = userState.userData

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-14 py-2.5 w-full fixed z-10  h-24">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center">
                        <FaShopify size={35} />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyShop</span>
                    </Link>
                    <div className="flex items-center md:order-2">
                        <button type="button" onClick={() => router.push("/signin")} className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <Image width={32} height={32} className="rounded-full" src="/reel.png" alt="user photo" />
                        </button>
                        <button type="button" onClick={() => {
                            cartState.handleCartState(!cartState.cartOpen)
                        }} className="ml-3">
                            <BsCart4 size={30} />
                        </button>
                        <div className={`z-50 absolute top-10 right-16  ${open2 ? "" : "hidden"}  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="user-dropdown`}>
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 capitalize "> {userData?.name?.firstname} {userData?.name?.lastname}  </span>
                                <span className="block text-sm font-medium text-gray-500 truncate "> {userData?.email}  </span>
                            </div>
                            <ul className="py-1" aria-labelledby="user-menu-button">
                                {userRoutes.map((route) => {
                                    return <li key={route.name} >
                                        <Link href={route.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "> {route.name} </Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <button onClick={handleHambuger} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className={`items-center justify-between ${open ? "" : "hidden"}  w-full md:flex md:w-auto md:order-1" id="mobile-menu-2`}>
                        <ul className="relative flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            {navRuutes.map((route) => {
                                return <li key={route.name}>
                                    <Link href={route.href} className="block py-2 pl-3 pr-4 text-comas-third " aria-current="page"> {route.name}  </Link>
                                </li>
                            })}
                            <li>
                                <div onClick={handleShopLink} className="block cursor-pointer py-2 pl-3 pr-4 text-comas-third" aria-current="page">Categories </div>
                            </li>
                            <div className={`z-50 absolute w-40 top-10 left-36  ${shopOpen ? "" : "hidden"}  my-4 text-base list-none bg-white divide-y divide-gray-100" id="user-dropdown`}>
                                <ul className="py-1" aria-labelledby="user-menu-button">
                                    {shopRoutes.map((route) => {
                                        return <li key={route.name} >
                                            <Link href={route.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "> {route.name} </Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

