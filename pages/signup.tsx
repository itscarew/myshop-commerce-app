import React, { useState } from "react";
import Button from '../components/Button'
import Layout from '../components/Layout'
import { ShopApi } from "../api/api"
import { useRouter } from "next/router";
import Input from "../components/Input";
import { CiSearch } from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import { MdPassword } from "react-icons/md"
import Link from "next/link";

export default function SignUp() {
    const router = useRouter()
    type Data = {
        username: string;
        name: string;
        email: string;
        password: string
    };

    const [data, setData] = useState<Data>({ username: "", name: "", email: "", password: "" });

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSignIn = async (e: any) => {
        e.preventDefault()
        const splitOnSpace = data.name.split(' ');
        const firstname = splitOnSpace[0];
        const lastname = splitOnSpace[1];
        await ShopApi.post(`/users`,
            {
                email: data.email,
                username: data.username,
                password: data.password,
                name: {
                    firstname: firstname,
                    lastname: lastname || ""
                },
            }
        )
        router.push(`/signin`)
    }

    return (
        <>
            <Layout>
                <div className="w-full flex items-center justify-center p-12" style={{ minHeight: "80vh" }} >
                    <div className="w-4/12" >
                        <h1 className="text-center text-5xl font-thin mb-16" >Create Account</h1>
                        <form className="w-full mb-4" onSubmit={handleSignIn} >
                            <Input
                                label="Name"
                                icon={<FiUser size={"20"} />}
                                value={data.name}
                                name="name"
                                onChange={handleChange}
                                placeholder="first and last"
                                required
                            />
                            <Input
                                label="Email"
                                icon={<CiSearch size={"20"} />}
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="email"
                                required
                            />
                            <Input
                                label="Username"
                                icon={<FiUser size={"20"} />}
                                onChange={handleChange}
                                name="username"
                                value={data.username}
                                placeholder="username" />
                            <Input label="Password"
                                icon={<MdPassword size={"20"} />}
                                type="password"
                                placeholder="password"
                                onChange={handleChange}
                                name="password"
                                value={data.password}
                            />
                            <Button className="w-full h-12" type={"submit"} > Sign In</Button>
                        </form>
                        <Link href={"/signin"}  > <p className="mb-12" > Have an account </p> </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}
