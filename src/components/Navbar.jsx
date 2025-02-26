import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IndianRupee, Menu, Search, ShoppingCart } from "lucide-react";
import Applogo from "../assets/app-logo.png";

const Navbar = () => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return (
  //       "<span className='h-2 bg-gray-200 w-20'>" + (index + 1) + "</span>"
  //     );
  //   },
  // };

  return (
    <div className="pb-4">
      {/* Offer Slider */}
      <div className="bg-primary-dark">
        <Swiper
          // pagination={pagination}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className="h-50 text-white">
            <div className="h-10 flex justify-center items-center">
              Buy Our XL Plants
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-10 flex justify-center items-center">
              Organic Fertilizers | Shop Now
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-10 flex justify-center items-center">
              Free Shipping above ₹499 | All India Delivery
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center text-primary-dark py-4">
        <Menu />
        <div className="flex justify-center">
          <img src={Applogo} alt="app-logo" className="h-10" />
        </div>

        <div className="flex gap-4">
          <IndianRupee />
          <ShoppingCart />
        </div>
      </div>

      <div className="relative py-1">
        <input
          type="text"
          placeholder="Search for plants, seeds and planters..."
          className="rounded-full w-full py-1 px-4 border border-black "
        />
        <Search color="#0f4c36" className="absolute top-2 right-3" />
      </div>
    </div>
  );
};

export default Navbar;
