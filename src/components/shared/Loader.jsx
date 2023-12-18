import style from "@/styles/loader.module.scss";

function Loader() {
  return (
    <>
      <section className={style.loaderBody}>
        <div className={style.container}>
          <div className={style.ring}></div>
          <div className={style.ring}></div>
          <div className={style.ring}></div>
          <span className={style.loading}>Loading...</span>
        </div>
      </section>
    </>
  );
}

export default Loader;
