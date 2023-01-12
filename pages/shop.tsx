import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'

import React, { useState, useEffect } from "react";
import { ShopApi } from '../api/api';
import DrawerComponent from '../components/Drawer';

export default function Shop() {
    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        title: string;
        overview: string;
        release_date: string;
        original_language: string
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };


    const [pageNo, setPageNo] = useState<number>(1);
    const changePageNo = (number: any) => {
        setPageNo(number)
    }

    const [products, setProducts] = useState<Data[]>([]);
    const getProducts = async () => {
        const res: any = await ShopApi.get(`products?limit=8`);
        setProducts(res?.data)
    };

    const [categories, setCategories] = useState<Data[]>([]);
    const getCategories = async () => {
        const res: any = await ShopApi.get(`/products/categories`);
        setCategories(res?.data)
    };

    const [menProducts, setMenProducts] = useState<Data[]>([]);
    const getMenProducts = async () => {
        const res: any = await ShopApi.get(`/products/category/men's clothing?limit=4`);
        setMenProducts(res?.data)
    };


    const [womenProducts, setWomenProducts] = useState<Data[]>([]);
    const getWomenProducts = async () => {
        const res: any = await ShopApi.get(`/products/category/women's clothing?limit=4`);
        setWomenProducts(res?.data)
    };


    useEffect(() => {
        getProducts()
        getMenProducts()
        getWomenProducts()
        getCategories()
    }, [])


    const [movieId, setMovieId] = useState<number>();
    const showDetails = (movieId: any) => {
        toggleDrawer()
        setMovieId(movieId)
    }

    return (
        <>
            <Layout >
                <div className='py-4 px-14'>
                    <TitleBanner title="Our Products" />
                    <div className='flex w-full flex-wrap ' >
                        {products?.map((product) => {
                            return <Card key={product.id} data={product}
                                onClick={() => {
                                    showDetails(product.id)
                                }}
                            />
                        })}
                    </div>

                    <TitleBanner title="Mens Clothing" url="/category/men's clothing" showIcon />
                    <div className='flex w-full flex-wrap ' >
                        {menProducts?.map((product) => {
                            return <Card key={product.id} data={product}
                                onClick={() => {
                                    showDetails(product.id)
                                }}
                            />
                        })}
                    </div>

                    <TitleBanner title="Women Products" url="/category/women's clothing" showIcon />
                    <div className='flex w-full flex-wrap ' >
                        {womenProducts?.map((product) => {
                            return <Card key={product.id} data={product}
                                onClick={() => {
                                    showDetails(product.id)
                                }}
                            />
                        })}
                    </div>

                </div>
                <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} movieId={movieId} />
            </Layout>
        </>
    )
}
