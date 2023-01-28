import "./skills.css";
import imageone from "../../Images/meter1.svg";
import imagetwo from "../../Images/meter2.svg";
import imagethree from "../../Images/meter3.svg";
import imagefour from "../../Images/meter3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Skills() {
  const lists = [
    {
      id: 1,
      image: imageone,
      work: "Web Development",
    },
    {
      id: 2,
      image: imagetwo,
      work: "Brand identity",
    },
    {
      id: 3,
      image: imagethree,
      work: "Logo Design",
    },
    {
      id: 4,
      image: imagefour,
      work: "Web Development",
    },
  ];
  return (
    <section id="skill" className="container">
      <div className="skill__one">
        <h2>Skills</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          maxime saepe earum asperiores dolores perspiciatis. Enim, quod.
        </h4>
        <article>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            gap="1rem"
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {lists.map((items) => {
              return (
                <SwiperSlide key={items.id}>
                  <div className="skill__two">
                    <img src={items.image} alt="" />
                    <h4>{items.work}</h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
      </div>
    </section>
  );
}

export default Skills;
