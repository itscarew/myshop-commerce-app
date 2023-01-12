import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import { ShopApi } from '../../api/api';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { useContext } from "react"
import AppContext from '../../components/AppContext';


export default function ProductDetails() {
    const router = useRouter()
    const { mainCartState }: any = useContext(AppContext)
    const { id } = router.query

    type Data = {
        id: number;
        image: string;
        title: string;
        description: string;
        category: string;
        price: string;
        rating: { rate: string }
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const [product, setProduct] = useState<Data>();
    const getProduct = async () => {
        const res: any = await ShopApi.get(`products/${id}`);
        setProduct(res?.data)
    };

    useEffect(() => {
        getProduct()
    }, [id])


    return (
        <>
            <Layout>
                <div className='px-12 my-12 w-9/12 mx-auto ' >
                    <div className='flex items-center justify-around w-full mb-4'  >
                        <div className='w-6/12 relative overflow-hidden pr-8' >
                            <Image
                                className='w-full'
                                src={product?.image!}
                                alt="Picture of the author"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='w-6/12 p-2 flex flex-col justify-between '>
                            <h3 className='text-5xl font-thin'> {product?.title} </h3>
                            <h4 className='text-2xl font-thin my-4 text-comas-second '>&#36;{product?.price} </h4>
                            <h4 className='text-base my-2'>
                                {product?.description}
                            </h4>
                            <Link href={`/category/${product?.category}`} className='text-sm capitalize'>Category : {product?.category} </Link>
                            <h4 className='text-sm my-2 text-comas-first'>Rating: {product?.rating?.rate}</h4>
                            <Button className='text-sm mt-3 h-10'
                                onClick={
                                    () => mainCartState.addToCart(
                                        {
                                            id: product?.id,
                                            title: product?.title,
                                            price: product?.price,
                                            image: product?.image
                                        }
                                    )}
                            > Add to Cart </Button>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}
