import React, { useState, useEffect, useContext } from "react";
import Button from '../components/Button'
import Card from '../components/Card'
import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import { ShopApi } from "../api/api"
import Image from 'next/image'
import DrawerComponent from "../components/Drawer";
import { useRouter } from "next/router";
import AppContext from "../components/AppContext";
import moment from "moment";
import MoreNews from "../components/MoreNews";

export default function Home() {
  const router = useRouter()
  type Data = {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    price: string
  };

  const [products, setProducts] = useState<Data[]>([]);
  const getProducts = async () => {
    const res: any = await ShopApi.get(`products?limit=4`);
    setProducts(res?.data)
  };

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Layout>
        <div className='w-full flex flex-col justify-end relative bg-slate-800 overflow-hidden' style={{ height: "40rem" }} >
          <Image
            style={{ objectFit: "cover" }}
            src={`/banner-logo-1.webp`}
            alt="Picture of the author"
            fill
          />
          <div className='relative w-full text-white  py-5 px-14' style={{ background: `rgba(0, 0, 0, 0.2)` }} >
            <h1 className='text-5xl font-thin'>Electrifity products and amazing sales ! </h1>
            <p className="text-xl my-3 " > Up to 50% Off </p>
            <div className='flex my-2 '>
              <Button className='w-64 h-10'
                onClick={() => {
                  router.push("/shop")
                }} > Shop Now
              </Button>
            </div>
          </div>
        </div>



        <div className="px-14" >
          <p className="lex text-2xl text-gray-500 font-light py-24 px-44 italic items-center justify-center text-center" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis
            voluptate ab error quam dolores doloremque, quae consectetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis
            voluptate ab error quam dolores doloremque, quae consectetur.
          </p>


          <TitleBanner title="Check More of Our Outstanding Products" url="/shop" showIcon />
          <div className='flex w-full flex-wrap mb-14 ' >
            {products?.map((product) => {
              return <Card key={product.id} data={product}
                onClick={() => {
                  console.log("okk")
                }}
              />
            })}
          </div>
          <MoreNews className="flex-row" router={router} />
          <MoreNews className="flex-row-reverse" router={router} />
        </div>
      </Layout>
    </>
  )
}
