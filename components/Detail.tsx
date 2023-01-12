import React, { useState, useEffect, useContext } from "react";
import "react-modern-drawer/dist/index.css";
import Image from 'next/image'
import moment from "moment";
import Button from "./Button";
import { ShopApi } from "../api/api";
import AppContext from "./AppContext";

export default function DetailsComponent({ movieId }: any) {
    const { watchListState, themeState }: any = useContext(AppContext)

    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        backdrop_path: string;
        title: string;
        overview: string;
        release_date: string;
        original_language: string
        tagline: string
        genres: any
        budget: number
        revenue: number
        runtime: number
        imdb_id: string
        type: string
    };

    const [detail, setMovieDetail] = useState<Data>();
    const getMovieDetail = async () => {
        const res: any = await ShopApi.get(`${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
        setMovieDetail(res?.data)
    };

    const [videoDetail, setVideoDetail] = useState([]);
    const getWatch = async () => {
        const res: any = await ShopApi.get(`${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
        setVideoDetail(res.data.results)
    };

    const Trailer: any = videoDetail?.find((video: any) => {
        return video.type === "Trailer"
    })


    const [watchProviders, setWatchProviders] = useState<any>([]);
    const getWatchProviders = async () => {
        const res: any = await ShopApi.get(`${movieId}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&dataSource="JustWatch`);
        setWatchProviders(res?.data?.results)
    };

    useEffect(() => {
        if (movieId) {
            // getMovieDetail()
            // getWatch()
            // getWatchProviders()
        }
    }, [movieId])


    const timeConvert = (num: any) => {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return `${hours} hours ${minutes} minutes`;
    }

    const numberWithCommas = (x: any) => {
        return Number(x).toLocaleString("en-US", {
            minimumFractionDigits: 2,
        });
    }

    return (
        <>
            <div >
                Cart
            </div>
        </>
    )
}



