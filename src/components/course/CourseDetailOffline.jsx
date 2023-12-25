import Image from "next/image";
import React from "react";
import { FaStopwatch } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

function CourseDetailOffline({ params }) {
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-12 m-auto rounded">
            <Image
              src="/com.jpg"
              alt="course image"
              width={500}
              height={300}
              style={{ width: "100%", height: "300px" }}
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <h1 className="text-center my-3 fw-bold">Courses Title</h1>
          <div className="row mx-2">
            <div className="col-4 text-center">
              <h5 className="text-center fw-bold fs-3">
                <FaStopwatch /> <span className="mx-2 fs-5">12 months</span>
              </h5>
            </div>
            <div className="col-3 text-center">
              <h5 className="text-center fw-bold fs-3">
                <FaRupeeSign />
                <span className="mx-2 fs-5">8500</span>
              </h5>
            </div>
            <div className="col-4 text-center">
              <h5 className="text-center fw-bold fs-3">
                <TbCertificate />
                <span className="mx-2 fs-5">Certificate</span>
              </h5>
            </div>
          </div>
          <article className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui
            tempora consectetur pariatur officia voluptas repellendus laudantium
            odit voluptates, dignissimos dolores ipsum eveniet eum temporibus
            impedit sunt, soluta eos est quidem! Minus eum harum, porro minima
            molestias a dolorum dolores, quod tenetur nemo ducimus pariatur
            provident assumenda aliquid tempora. Voluptatibus voluptates minima
            repudiandae distinctio facere necessitatibus nulla ullam nisi fugiat
            tenetur magnam, quaerat sit error iusto nam laborum quasi aperiam
            ipsam veniam officia sequi. Officia aut ab harum fuga delectus optio
            tempore, officiis totam hic, iste animi qui voluptatibus unde
            recusandae nostrum quos dolor consectetur reprehenderit dicta
            molestias voluptates, minus architecto! Mollitia minima consequuntur
            accusamus iure sunt vitae aliquam repellendus possimus, aut eos! Sed
            obcaecati doloremque explicabo ad fuga reiciendis esse possimus
            iusto. Quia, quo aliquam incidunt ipsa voluptatibus vitae eaque
            itaque veritatis quae natus at dolores voluptatem. Nihil porro illo
            molestiae. Tempore repellat id nesciunt similique recusandae vero
            veniam eveniet harum cum maiores. Necessitatibus dolorum, nihil vero
            a, minima sint nemo optio accusamus, ipsa doloribus eum omnis?
            Tempora autem voluptatem corrupti officia minima, cumque magnam
            animi dolorem ex est, laboriosam beatae quaerat possimus facere
            impedit. Dolore impedit reiciendis quis dignissimos amet, sapiente
            ducimus qui ipsam quibusdam numquam, adipisci et nostrum! In nobis
            rerum libero illo sequi soluta, qui nostrum delectus dolor earum
            quis, minus voluptatum consequatur sit minima, beatae accusantium
            repellendus nulla ab. Nulla cum, quidem nesciunt quos repellat ipsum
            beatae, amet, quibusdam at ad obcaecati in! Vel exercitationem
            soluta, blanditiis cupiditate quasi dolorem dicta ipsam
            reprehenderit iste autem numquam corporis obcaecati magni hic odit?
            Fugit necessitatibus amet consectetur optio atque iste commodi,
            nulla voluptatem itaque ipsum illo dolor velit? Minus aspernatur
            pariatur nihil eius explicabo sequi autem beatae quibusdam, saepe
            consectetur et omnis modi laudantium eum nam at. Perferendis
            incidunt nam, debitis blanditiis inventore animi ducimus
            reprehenderit nesciunt molestias, ullam quidem laudantium.
            Distinctio optio ab qui, non dolor fugit harum voluptatibus deleniti
            animi expedita, quasi consectetur. Numquam neque tempore dolorum
            dolores ad officiis voluptates sunt facere similique mollitia
            perspiciatis ut repudiandae sit autem natus debitis beatae
            aspernatur animi nemo reiciendis, obcaecati accusantium eligendi
            odit atque? Quos neque facilis, aliquam, maiores quidem officia quod
            unde praesentium quae, doloribus officiis! Dolor quo quisquam culpa
            officia facere deleniti, totam architecto magni, at praesentium
            delectus. A distinctio earum quas exercitationem dignissimos
            accusamus eos minima dicta, aliquid doloremque officiis laboriosam,
            iusto tempora velit quaerat itaque molestias illo laudantium numquam
            assumenda voluptas, soluta quos eveniet. Incidunt quae id dolorem
            quod, odit sint possimus, quisquam molestiae deleniti velit maxime
            a. Quasi ipsam ducimus eius accusantium animi, est tenetur,
            accusamus voluptas repudiandae modi consequatur excepturi in earum
            fugit quas voluptatem a provident debitis fugiat beatae sapiente
            alias numquam voluptate. Magnam corporis doloremque tempore maiores.
            Id a consectetur laboriosam neque repudiandae perferendis, voluptas
            ducimus! Eaque cupiditate ipsum facere placeat. Culpa facilis porro
            atque molestias sint ab dolores fuga accusantium, numquam,
            doloremque nisi ad doloribus eligendi dolor fugit odio qui itaque,
            eaque aspernatur quidem esse. Quod harum, quo cum sapiente
            doloremque iusto? Consequuntur tempora laborum a voluptatibus nemo.
          </article>
        </div>
      </section>
    </>
  );
}

export default CourseDetailOffline;
