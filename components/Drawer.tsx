import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import React from "react";
import CartComponent from "./Cart";

type Data = {
    children: React.ReactNode;
    isOpen: any;
    onClose: any;
    movieId: number

};

export default function DrawerComponent({ children, isOpen, onClose, movieId }: Partial<Data>) {
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={onClose}
                size={500}
                direction='right'
                className='bla bla bla'
                style={{ overflowY: "auto" }}
            >
                {children}
                <CartComponent />
            </Drawer>
        </>
    )
}
