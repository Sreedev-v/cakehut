import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
// import cake1 from "../images/cake1.jpg";


const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      loop={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="swiper-img"
          src="https://plus.unsplash.com/premium_photo-1715793630662-6d1f5dbcdc55?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="swiper-img_txt text-left">
          <h3>MADE BY HAND,</h3>
          <h3>FROM SCRATCH,</h3>
          <h3>WITH LOVE.</h3>
          <div>This experiance plays a role in the work they do.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper-img"
          src="https://images.pexels.com/photos/2928378/pexels-photo-2928378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
       <div className="swiper-img_txt text-left">
          <h3>MADE BY HAND,</h3>
          <h3>FROM SCRATCH,</h3>
          <h3>WITH LOVE.</h3>
          <div>This experiance plays a role in the work they do.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper-img"
          src="https://images.pexels.com/photos/4553125/pexels-photo-4553125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="swiper-img_txt text-left">
          <h3>MADE BY HAND,</h3>
          <h3>FROM SCRATCH,</h3>
          <h3>WITH LOVE.</h3>
          <div>This experiance plays a role in the work they do.</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
