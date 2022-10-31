import React from "react";
import CollectionView from "../components/CollectionView";
import Loading from "../components/Loading";
import { useGetCollectionsQuery } from "../features/api/apiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import slider_1 from "../assets/img/slider_1.png";
import slider_2 from "../assets/img/slider_2.png";
import slider_3 from "../assets/img/slider_3.png";

function Container() {
  const {
    data: collections,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCollectionsQuery();
  let collectionsContent;

  if (isLoading) {
    collectionsContent = <Loading />;
  } else if (isSuccess) {
    collectionsContent = collections.map((collection) => (
      <CollectionView key={collection.id} collection={collection} />
    ));
  } else if (isError) {
    collectionsContent = <div>{error.toString()}</div>;
  }

  return (
    <div className="app_container">
      <div className="grid wide">
        <div className="section_slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            autoplay
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoPlay={true}
          >
            <SwiperSlide>
              <div>
                <img alt="Slider 1" src={slider_1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img alt="Slider 1" src={slider_2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img alt="Slider 1" src={slider_3} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="grid wide">
        <div className="row sm-gutter">
          {/* Danh muc */}
          {/* <div className="col l-2 m-0 c-0 left-container">
            <Category collectionsContent={collectionsContent} />
          </div>
          <nav className="mobile-category">
            <CategoryMobile />
          </nav> */}
          {/* Content */}
          <div className="col l-12 m-12 c-12 right-container">
            {collectionsContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
