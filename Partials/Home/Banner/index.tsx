import React from 'react'
import Image from "next/image"
import Banner from "@/components/Banner";
import imgGoogle from "@/../public/googleplay.png";
import imgApple from "@/../public/appstore.png";
import imgBanner from "@/../public/quadra.svg";


export default function BannerHome() {
  return (
    <>
        <Banner
            title='Saiba Tudo do seu time'
            text='Tenha todas a informações do seu time favorito, jogadores e informações da NBA.'
            picture={<Image src={imgBanner} alt="imagem do banner"/>}
            >
                <div className="flex items-center justify-center gap-2 lg:ml-0 lg:justify-start">
                    <button className=" lg:cursor-pointer w-16 lg:w-10"> <Image src={imgApple}  alt="icone applestore"  width={150}/> </button>
                    <button className="lg:cursor-pointer w-16 lg:w-10"> <Image src={imgGoogle} alt="icone googleplay"  width={150} /> </button>
                </div>
            </Banner>
    </>
  )
}