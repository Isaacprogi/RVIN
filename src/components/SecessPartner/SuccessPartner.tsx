import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { successPartners, successPartnersImage } from '../../data/data';

const SuccessPartners = () => {
    return (
        <div
            className="px-3 bg-cover flex flex-col bg-center md:py-28 pt-12 pb-8"
            style={{ backgroundImage: `url(${successPartnersImage})` }}
        >
            <h2 className="bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] bg-clip-text text-transparent font-bold md:mb-10 mb-6 w-max m-auto">
                Success Partners
            </h2>

            <div className="w-full  py-6 brand-slider">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="max-w-max flex items-center justify-center "
                >
                    {successPartners.map((partner, index) => (
                        <SwiperSlide
                            key={index}
                            style={{ width: '232.5px' }}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SuccessPartners;
