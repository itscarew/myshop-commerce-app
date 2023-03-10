import AppHead from '../components/Head'
import AppContext from './AppContext'
import DrawerComponent from './Drawer'
import Footer from './Footer'
import React, { useContext } from "react";
import HeaderNavBar from './HeaderNavBar'

export default function Layout({ children }: any) {
    const { cartState }: any = useContext(AppContext)
    return (
        <>
            <AppHead />
            <DrawerComponent isOpen={cartState.cartOpen} onClose={() => cartState.handleCartState(false)} />
            <div className={`relative w-full flex flex-col justify-between min-h-screen font-body mx-auto`}>
                <div className='relative w-full' >
                    <HeaderNavBar />
                    <div className='pt-24' >
                        {children}
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}
