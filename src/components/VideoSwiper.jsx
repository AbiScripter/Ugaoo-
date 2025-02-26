import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { X } from "lucide-react";

export default function VideoSwiper() {
  const videos = [
    "https://cdn.live2.ai/uploads/heeilwkcfl/video/transcoded/720p/2cee7a2913.mp4",
    "https://cdn.live2.ai/uploads/heeilwkcfl/video/transcoded/720p/17d85bd3f7.mp4",
    "https://cdn.live2.ai/uploads/heeilwkcfl/video/original/e64bf77ff1.mp4",
    "https://cdn.live2.ai/uploads/heeilwkcfl/video/transcoded/480p/9295873b12.mp4",
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Swiper slidesPerView={1.5} spaceBetween={10} className="w-full">
        {videos.map((video, index) => (
          <SwiperSlide key={index} onClick={() => setActiveIndex(index)}>
            <video
              src={video}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              muted
              loop
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {activeIndex !== null && (
        <VideoModal
          videos={videos}
          initialIndex={activeIndex}
          close={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}

function VideoModal({ videos, initialIndex, close }) {
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.slideTo(initialIndex, 0);
    }
  }, [swiperRef, initialIndex]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={close} // Close when clicking outside the modal
    >
      <button
        className="absolute top-4 right-4 bg-white text-black p-1 rounded-full text-lg shadow-lg"
        onClick={close}
      >
        <X />
      </button>
      <div
        className="relative w-[90vw] h-[80vh] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          mousewheel={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          onSwiper={setSwiperRef}
          className="w-full h-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <video
                src={video}
                controls
                autoPlay={index === initialIndex}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
