"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

//icons
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

//development
import courses from "@/data/course";

function HomeTeamSlider() {
  return (
    <>
      <section className="container my-5" data-aos="zoom-out-up">
        <h1 className="my-3 fs-2 fw-bold text-center"> Our Team</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
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
                    <h5 className="card-title text-center fs-4">
                      {items.title}
                    </h5>
                    <p className="card-text text-center ">Support</p>
                  </div>
                  <div className="card-footer">
                    <div className="row mx-2">
                      <a
                        href="#"
                        target="_blank"
                        className="text-decoration-none text-warning fs-2 col"
                      >
                        <MdAttachEmail />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-decoration-none text-warning fs-3 col"
                      >
                        <BsLinkedin />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="text-decoration-none text-warning fs-3 col"
                      >
                        <BsTwitter />
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        className="text-decoration-none fs-3  text-warning col"
                      >
                        <BsFacebook />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default HomeTeamSlider;
