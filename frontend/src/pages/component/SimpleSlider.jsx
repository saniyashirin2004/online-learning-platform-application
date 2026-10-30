import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        arrows: true,
    };

    const images = [
        "https://wallpaperaccess.com/full/8901671.jpg",
        "https://tse3.mm.bing.net/th/id/OIP.xYcW7Dr20aeR5ojKEAd9nAHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png",
        "https://www.traininginbangalore.com/images/infographics/java-full-stack-developer-training-in-bangalore-tib.jpg"
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((imgUrl, index) => (
                    <div key={index} className="slide-item">
                        <img
                            src={imgUrl}
                            alt={`Slide ${index + 1}`}
                            className="slider-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleSlider;