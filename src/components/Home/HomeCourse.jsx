"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { AiOutlineArrowRight } from "react-icons/ai";

//development
import courses from "@/data/course";

function HomeCourseSlider() {
  return (
    <>
      <section className="container my-5" data-aos="zoom-out-up">
        <h1 className="my-3 fs-2 fw-bold text-center">Popular Courses</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
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
                <Link
                  href={"/course/" + items.id}
                  className="text-decoration-none"
                >
                  <div className="card shadow-lg m-2">
                    <Image
                      src={items.image}
                      className="card-img-top"
                      width={100}
                      height={300}
                      alt="Course Image"
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{items.title}</h5>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="text-center mt-3">
          <Link className="text-decoration-none fs-4" href="/course/courses">
            Explore More <AiOutlineArrowRight />
          </Link>
        </div>
      </section>
      <hr />
    </>
  );
}

export default HomeCourseSlider;
