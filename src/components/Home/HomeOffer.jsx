"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

//development
import homeOffer from "@/data/homeoffer";

function HomeOfferSlider() {
  return (
    <>
      <section className="container my-5" data-aos="zoom-out-up">
        <h1 className="my-3 fs-2 fw-bold text-center">Special Offers</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {homeOffer.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                <div className="card">
                  <Image
                    src={items.image}
                    className="card-img-top"
                    width={100}
                    height={400}
                    alt="Course Image"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <hr />
    </>
  );
}

export default HomeOfferSlider;
