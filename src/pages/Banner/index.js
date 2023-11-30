import style from "./Banner.module.css";

const Banner = ({ imagem }) => {
  return (
    <div
      className={style.cover}
      style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }}
    ></div>
  );
};

export default Banner;
