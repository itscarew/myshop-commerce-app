import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import Card from '../../components/Card'
import React, { useState, useEffect } from "react";
import { ShopApi } from '../../api/api';
import { useRouter } from 'next/router';

export default function Shop() {
    const router = useRouter()
    const { categoryName } = router.query

    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        title: string;
        overview: string;
        release_date: string;
        original_language: string
    };

    const [pageNo, setPageNo] = useState<number>(1);
    const changePageNo = (number: any) => {
        setPageNo(number)
    }

    const [products, setProducts] = useState<Data[]>([]);
    const getProductsByCategory = async () => {
        const res: any = await ShopApi.get(`products/category/${categoryName}?limit=12`);
        setProducts(res?.data)
    };

    useEffect(() => {
        getProductsByCategory()
    }, [categoryName])

    return (
        <>
            <Layout>
                <div className='py-4 px-14' >
                    <TitleBanner title={`${categoryName}`} />
                    <div className='flex w-full flex-wrap ' >
                        {products?.map((product) => {
                            return <Card key={product.id} data={product}
                                onClick={() => {
                                    console.log("kkk")
                                }}
                            />
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}
