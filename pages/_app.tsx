import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import AppContext from '../components/AppContext';

export default function App({ Component, pageProps }: AppProps) {

  type Data = {
    id: number;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
  };
  const [watchList, setWatchList] = useState<Data[]>([])

  const addWatchList = (movie: any) => {
    const checkWatchList = watchList.find((watchList) => {
      return watchList.id === movie.id
    })
    if (!checkWatchList) {
      const updatedArray = [...watchList, movie]
      setWatchList(updatedArray)
    } else {
      console.log("Already in list bro")
    }
  }

  const removeWatchList = (id: number) => {
    const updatedArray = watchList.filter((watchList) => {
      return watchList.id !== id
    })
    setWatchList(updatedArray)
  }

  return (<AppContext.Provider
    value={{ watchListState: { watchList, addWatchList, removeWatchList } }}>
    <Component {...pageProps} />
  </AppContext.Provider>)

}
