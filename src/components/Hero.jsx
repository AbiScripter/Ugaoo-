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
import heroOne from "../assets/Hero/hero-1.webp";
import heroTwo from "../assets/Hero/hero-2.webp";
import heroThree from "../assets/Hero/hero-3.webp";
import heroFour from "../assets/Hero/hero-4.webp";
import heroFive from "../assets/Hero/hero-5.webp";
import collectionOne from "../assets/Collections/collections-1.avif";
import collectionTwo from "../assets/Collections/collections-2.avif";
import collectionThree from "../assets/Collections/collections-3.avif";
import collectionFour from "../assets/Collections/collections-4.avif";
import collectionFive from "../assets/Collections/collections-5.avif";
import collectionSix from "../assets/Collections/collections-6.avif";

const Hero = () => {
  //   const pagination = {
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return (
  //         "<span className='flex justify-center h-2 bg-transparent'>" + +"</span>"
  //       );
  //     },
  //   };

  return (
    // Hero Part
    <div>
      {/* Offer Slider */}
      <div className="bg-primary-dark">
        <Swiper
          //   pagination={pagination}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <HeroSwiperSlide img={heroOne} />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSwiperSlide img={heroTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSwiperSlide img={heroThree} />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSwiperSlide img={heroFour} />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSwiperSlide img={heroFive} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Collections slider */}
      <div className="py-8">
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          // scrollbar={true}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          freeMode={true}
          // navigation={true}
          modules={[Autoplay, FreeMode, Pagination, Navigation, Scrollbar]}
          scrollbar={{
            hide: true,
            className: "my-swiper",
          }}
        >
          <SwiperSlide>
            <CollectionSlide img={collectionOne} title={"Tools"} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionSlide img={collectionTwo} title={"Bestsellers"} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionSlide img={collectionThree} title={"Easy to Care"} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionSlide img={collectionFive} title={"XL plants"} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionSlide img={collectionSix} title={"Ceramic Pots"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const HeroSwiperSlide = ({ img }) => {
  return (
    <div className="relative w-full h-full">
      <img src={img} alt="Hero" className="w-full h-full object-cover" />
      <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary py-2 px-4 text-white rounded-sm">
        SHOP NOW
      </button>
    </div>
  );
};

const CollectionSlide = ({ img, title }) => {
  return (
    <div className="relative w-full h-full">
      <img src={img} alt="Hero" className="w-full h-full object-cover" />
      <p className="text-black flex justify-center mt-2 text-xs">{title}</p>
    </div>
  );
};

export default Hero;
