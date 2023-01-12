import React from "react";
import Button from "./Button";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function MoreNews({ className, router }: any) {
  return (
    <>
      <div className="mx-auto ">
        <section className="mb-6 mt-6 text-gray-800 text-center md:text-left">
          <div className="block bg-white">
            <div className={`flex ${className} flex-wrap items-center`}>
              <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/126.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-full"
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
                      <p className="flex items-center justify-center md:justify-start">
                        <IoMdCheckmarkCircle />
                        <p className="pl-2" > Noise cancelling </p>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <IoMdCheckmarkCircle />
                        <p className="pl-2" > Serious Fun </p>
                      </p>
                    </div>
                  </div>

                  <Button className="py-3 w-52 " onClick={() => {
                    router.push("/shop")
                  }} >Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
