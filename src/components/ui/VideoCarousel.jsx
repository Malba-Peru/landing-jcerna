// VideoCarousel.jsx
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const VideoCarousel = ({ videos = [] }) => {
  useEffect(() => {
    const swiper = new Swiper("#videoSwiper", {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: () => {
          const activeSlide = document.querySelector(
            ".swiper-slide-active video",
          );
          if (activeSlide) activeSlide.play();
        },
        slideChangeTransitionStart: () => {
          document
            .querySelectorAll(".swiper-video video")
            .forEach((video) => video.pause());
        },
        slideChangeTransitionEnd: () => {
          const activeSlide = document.querySelector(
            ".swiper-slide-active video",
          );
          if (activeSlide) activeSlide.play();
        },
      },
    });

    document.querySelectorAll(".swiper-video video").forEach((video) => {
      video.addEventListener("ended", () => swiper.slideNext());
    });
  }, []);

  return (
    <>
      <div className="swiper" id="videoSwiper">
        <div className="swiper-wrapper">
          {videos.map((video, index) => (
            <div key={index} className="swiper-slide swiper-video">
              <video
                src={video.videoUrl}
                controls
                playsInline
                poster={video.poster}
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <style jsx>{`
        .swiper {
          width: 100%;
          height: 70vh;
          max-height: 800px;
          min-height: 300px;
          position: relative;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .swiper-wrapper {
          display: flex;
        }

        .swiper-video video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .swiper-button-prev,
        .swiper-button-next {
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          content: "";
          border: solid white;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 6px;
        }

        .swiper-button-prev::after {
          transform: rotate(135deg);
        }

        .swiper-button-next::after {
          transform: rotate(-45deg);
        }

        @media (max-width: 1024px) {
          .swiper {
            height: 60vh;
          }
        }

        @media (max-width: 768px) {
          .swiper {
            height: 50vh;
            min-height: 250px;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 480px) {
          .swiper {
            height: 40vh;
            min-height: 200px;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 30px;
            height: 30px;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            border-width: 0 2px 2px 0;
            padding: 4px;
          }
        }

        @media (min-width: 1600px) {
          .swiper {
            max-width: 1400px;
            height: 75vh;
          }
        }
      `}</style>
    </>
  );
};

export default VideoCarousel;
