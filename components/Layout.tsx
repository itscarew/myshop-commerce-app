import AppHead from '../components/Head'
import AppContext from './AppContext'
import DrawerComponent from './Drawer'
import Footer from './Footer'
import NavBar from './NavBar'
import RightNav from './RightNav'
import React, { useContext } from "react";
import HeaderNavBar from './HeaderNavBar'

export default function Layout({ children }: any) {
    const { cartState }: any = useContext(AppContext)
    return (
        <>
            <AppHead />
            <DrawerComponent isOpen={cartState.cartOpen} onClose={() => cartState.handleCartState(false)} />
            <div className={`flex flex-col justify-between min-h-screen font-body mx-auto`}>
                <div>
                    <HeaderNavBar />
                    <div >
                        {children}
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}
