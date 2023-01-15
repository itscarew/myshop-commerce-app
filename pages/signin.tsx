import React, { useContext, useState } from "react";
import Button from '../components/Button'
import Layout from '../components/Layout'
import { ShopApi } from "../api/api"
import { useRouter } from "next/router";
import Input from "../components/Input";
import { CiSearch } from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import Link from "next/link";
import LocalStorage from "../utils/LocalStorage";
import AppContext from "../components/AppContext";
import jwtDecode from "jwt-decode";

export default function SignIn() {
    const router = useRouter()
    const { cartState, userState }: any = useContext(AppContext)
    type Data = {
        username: string,
        password: string
    };

    const [data, setData] = useState<Data>({ username: "", password: "" });

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSignIn = async (e: any) => {
        e.preventDefault()
        const res: any = await ShopApi.post(`/auth/login`, data);
        const token = res?.data?.token
        LocalStorage.setItem('token', token)
        const decodedData: any = jwtDecode(token)
        if (decodedData) {
            const res: any = await ShopApi.get(`/users/${decodedData.sub}`);
            LocalStorage.setItem("userData", res?.data)
            router.push("/shop")
        }
    }

    return (
        <>
            <Layout>
                <div className="w-full flex items-center justify-center p-12" style={{ minHeight: "80vh" }} >
                    <div className="w-4/12" >
                        <h1 className="text-center text-5xl font-thin mb-16" >Sign In</h1>
                        <form className="w-full mb-4" onSubmit={handleSignIn} >
                            <Input label="Username" icon={<FiUser size={"20"} />}
                                placeholder="username"
                                onChange={handleChange}
                                name="username"
                                type="text"
                                value={data.username}
                                required
                            />
                            <Input label="Password" icon={<CiSearch size={"20"} />}
                                type="password"
                                placeholder="password"
                                onChange={handleChange}
                                name="password"
                                value={data.password}
                                required
                            />
                            <Button className="w-full h-12" type="submit"  > Sign In</Button>
                        </form>
                        <Link href={"/signup"}  > <p className="mb-12" > Create account </p> </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}
