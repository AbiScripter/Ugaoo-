import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Pagination,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import plantcare from "../assets/CollectionList/plant-care.webp";
import plants from "../assets/CollectionList/plants.webp";
import pots from "../assets/CollectionList/Pots_and_Planters_7950ef20-1be7-43b6-88da-c9daae4d28ed.webp";
import seeds from "../assets/CollectionList/seeds.webp";

import bamboo from "../assets/ProductsList/BestSellers/bamboo.webp";
import brazilan from "../assets/ProductsList/BestSellers/brazilan.webp";
import jade from "../assets/ProductsList/BestSellers/jade.webp";
import peace from "../assets/ProductsList/BestSellers/peace.webp";
import { Star } from "lucide-react";
import VideoSwiper from "./VideoSwiper";

const productData = {
  bestsellers: [
    {
      name: "Brazillian Wood Plant",
      orgPrice: 1999,
      offerPrice: 499,
      offerPercent: 76,
      tag: "trending",
      img: brazilan,
    },
    {
      name: "Peace Lily Plant",
      orgPrice: 399,
      offerPrice: 299,
      offerPercent: 26,
      tag: "",
      img: peace,
    },
    {
      name: "Bamboo Palm Plant",
      orgPrice: 499,
      offerPrice: 399,
      offerPercent: 21,
      tag: "Bestseller",
      img: bamboo,
    },
    {
      name: "Jade Plant Mini",
      orgPrice: 299,
      offerPrice: 279,
      offerPercent: 7,
      tag: "Bestseller",
      img: jade,
    },
  ],

  newArrivals: [
    {
      name: "Indoor Plant Bundle",
      orgPrice: 1499,
      offerPrice: 1399,
      offerPercent: 7,
      tag: "",
      img: jade,
    },
    {
      name: "Dieffenbachia Delila",
      orgPrice: 1499,
      offerPrice: 999,
      offerPercent: 34,
      tag: "",
      img: bamboo,
    },
    {
      name: "Anthurium Hookeri",
      orgPrice: 2499,
      offerPrice: 1999,
      offerPercent: 19,
      tag: "",
      img: peace,
    },
    {
      name: "Lucky Bamboo Plant",
      orgPrice: 1300,
      offerPrice: 999,
      offerPercent: 24,
      tag: "Trending",
      img: brazilan,
    },
  ],
};

const Collections = () => {
  return (
    <div className="text-primary-dark">
      <h1 className="text-2xl text-primary-dark text-center py-4">
        Your Best Picks
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <img src={plantcare} alt="plantcare" />
        <img src={plants} alt="plants" />
        <img src={pots} alt="pots" />
        <img src={seeds} alt="seeds" />
      </div>

      {/* Best Sellers */}
      <div className="py-6">
        <h1 className="text-2xl pb-4 text-center">Bestsellers</h1>
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          // scrollbar={true}
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          freeMode={true}
          // navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
        >
          <div>
            {productData.bestsellers.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard plant={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <button className="w-60 py-2 text-white bg-primary mx-auto block mt-8 mb-4 rounded-sm font-semibold text-sm">
          VIEW ALL
        </button>
      </div>

      {/* Video Swiper */}
      <VideoSwiper />

      {/* New Arrivals */}
      <div className="py-6">
        <h1 className="text-2xl py-4 text-center">New Arrivals</h1>
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          // scrollbar={true}
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          freeMode={true}
          // navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
        >
          <div>
            {productData.newArrivals.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard plant={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <button className="w-60 py-2 text-white bg-primary mx-auto block mt-8 mb-4 rounded-sm text-sm font-semibold">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ plant }) => {
  return (
    <div className="">
      <div className="relative  w-full">
        <img
          src={plant.img}
          alt="product-card"
          className="h-52  object-cover"
        />

        <p className="absolute top-2 left-2 bg-yellow-500 px-1  text-primary-dark rounded-sm text-xs">
          {plant.offerPercent}%
        </p>
        <p className="absolute top-2 right-2 bg-yellow-500 px-1  text-primary-dark rounded-sm capitalize text-xs">
          {plant.tag}
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-black">{plant.name}</p>
        <div className="flex items-center gap-2">
          <p className="line-through text-gray-400">₹{plant.orgPrice}</p>
          <p className="text-primary text-xs">From</p>
          <p className="text-primary">₹{plant.offerPrice}</p>
        </div>
        <div className="flex gap-1">
          <Star fill="#ffb503" color="#ffb503" size="20" />
          <Star fill="#ffb503" color="#ffb503" size="20" />
          <Star fill="#ffb503" color="#ffb503" size="20" />
          <Star fill="#ffb503" color="#ffb503" size="20" />
          <Star fill="#ffb503" color="#ffb503" size="20" />
        </div>
        <button className="w-full py-1 bg-primary text-white text-sm font-semibold rounded-sm">
          VIEW PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Collections;
