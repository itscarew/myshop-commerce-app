import React from "react";
import Button from "./Button";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Image from "next/image";

export default function MoreNews({ className, router }: any) {
  return (
    <>

      <div className="mb-6 mt-6 text-gray-800 text-center md:text-left">
        <div className="block bg-white">
          <div className={`flex ${className} flex-wrap items-center`}>
            <div className="relative grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
              <Image
                src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Trendy Pants and Shoes"
                width={500}
                height={500}
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-6 pb-2">
                  Top quality product
                </h2>
                <p className="text-gray-500 mb-6 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  soluta corporis voluptate ab error quam dolores doloremque,
                  quae consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  soluta corporis voluptate ab error quam dolores doloremque,
                  quae consectetur.
                </p>
                <div className="flex flex-wrap mb-6">
                  <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                    <div className="flex items-center justify-center md:justify-start">
                      <IoMdCheckmarkCircle />
                      <p className="pl-2" > Noise cancelling </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <IoMdCheckmarkCircle />
                      <p className="pl-2" > Serious Fun </p>
                    </div>
                  </div>
                </div>

                <Button className="py-3 w-52 " onClick={() => {
                  router.push("/shop")
                }} >Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
