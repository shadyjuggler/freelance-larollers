import { Swiper, SwiperSlide } from 'swiper/react';
import arrowIcon from "../assets/icons/arrow.svg";

import 'swiper/css';
import { type } from '@testing-library/user-event/dist/type';

const cars = [
    {
        bgPath: "./assets/slides/1.png",
        title: "Lincoln Navigator  L",
        passengerCount: "6 Passengers",
    },
    {
        bgPath: "./assets/slides/2.png",
        title: "Lincoln Navigator  L",
        passengerCount: "6 Passengers",
    },
    {
        bgPath: "./assets/slides/3.png",
        title: "Lincoln Navigator  L",
        passengerCount: "3 Passengers",
    },
    {
        bgPath: "./assets/slides/4.png",
        title: "Lincoln Navigator  L",
        passengerCount: "From 8 to 10 passengers",
    }
];



export const Fleet = () => {

    // Font issue, doesn't display numbers properly => when meet numbers wrap in <span class='helvetia'> to apply different font 
    const validNumber = (passengerCount) => {
        let arr = passengerCount.split("");
        arr = arr.map(letter => {
            if (!isNaN(Number(letter)) && letter !== " ") {
                return <span className='helvetia font-black'>{letter}</span>
            }
            return letter;
        })
        return arr;
    }


    const slides = cars.map(({ bgPath, title, passengerCount }) => {
        validNumber(passengerCount);
        return <SwiperSlide
            className='swiper-slide !flex !flex-col p-4 sm:p-8 lg:p-14'
            style={{ backgroundImage: `url(${bgPath})` }}
        >
            <h2 className='text-white text-xl sm:text-2xl lg:text-4xl'>{title}</h2>
            <div className='mt-auto flex justify-between'>
                <p className='text-white text-md sm:text-xl font-bold'>{validNumber(passengerCount)}</p>
                <p className='text-white text-md sm:text-xl lg:text-2xl font-bold whitespace-nowrap flex gap-2'>
                    Book Now
                    <img src={arrowIcon} alt="arrow-down" />
                </p>
            </div>
        </SwiperSlide>
    })



    return (
        <div className="fleet pb-20 lg:pb-36">
            <h2 className="text-4xl">Fleet</h2>
            <p className="mt-10 text-xl">Discover our range of luxury vehicles, designed to provide the ultimate travel experience. From spacious interiors to modern elegance, we have the perfect car to suit your journey!</p>
            <div className=' mt-8'>
                <Swiper
                    className='swiper'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        slides
                    }
                    {/* <SwiperSlide className='swiper-slide' style={{ backgroundImage: 'url("./assets/slides/1.png")' }} ></SwiperSlide>
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: 'url("./assets/slides/2.png")' }} ></SwiperSlide>
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: 'url("./assets/slides/3.png")' }} ></SwiperSlide>
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: 'url("./assets/slides/4.png")' }} ></SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}