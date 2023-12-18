"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

//development
import courses from "@/data/course";

function HomeAchievement() {
  return (
    <>
      <section className="container my-5" data-aos="zoom-out-up">
        <h1 className="my-3 fs-2 fw-bold text-center">Student Achievements</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {courses.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                <div className="card shadow-lg m-2">
                  <Image
                    src={items.image}
                    className="card-img-top rounded-circle border my-2 "
                    width={100}
                    height={300}
                    alt="Course Image"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center fs-4  ">
                      {items.title}
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam, porro asperiores voluptate illo ducimus aperiam
                      dolorem odio architecto voluptatum. Facilis, nesciunt
                      culpa. Quod ad, qui sint saepe odit repellat doloremque.
                    </p>
                  </div>
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

export default HomeAchievement;
