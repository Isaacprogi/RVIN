import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { logo } from "../../data/data";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import GradientButton from "../GradientButton/GradienButton";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const [dir, setDir] = useState<'ltr' | 'rtl'>(i18n.language === 'ar' ? 'rtl' : 'ltr');

    useEffect(() => {
        const handleLangChange = (lng: string) => {
            const newDir = lng === 'ar' ? 'rtl' : 'ltr';
            setDir(newDir);
            document.documentElement.dir = newDir;
        };
        i18n.on('languageChanged', handleLangChange);
        return () => i18n.off('languageChanged', handleLangChange);
    }, []);


    return (
        <div
            dir={dir}
            className="bg-cover bg-center md:pt-[316px] md:pb-[161px] flex flex-col lg:gap-y-[216px] w-full bg-[#080911] gap-y-[70px] pt-[50px] pb-[70px]"
            style={{ backgroundImage: "url('https://www.rvin.sa/assets/footer-bg-CDqC0JgL.svg')" }}
        >
            {/* Top Section */}
            <div className="flex flex-col gap-[14px] items-center lg:px-0 px-4 sm:mt-0 mt-[200px]">
                <p className="bg-gradient-to-r from-[#403EFE] to-[#E688FE] bg-clip-text text-transparent font-bold text-[20px] flex justify-center items-center gap-2 leading-[30px] text-center w-max m-auto">
                    {t('experienceDemo')}
                </p>
                <p className="text-[#FFF] text-2xl md:text-[40px] font-bold text-center">
                    {t('benefitsText')}
                </p>
                <Link to="/contacts" className="flex items-center justify-center">
                    <GradientButton
                        className="mt-6"
                        size="lg"
                        variant="secondary"
                        showArrow={true}
                    >
                        <span>{t('requestDemo')}</span>
                    </GradientButton>
                </Link>
            </div>

            {/* Bottom Section */}
            <div className="flex text-white items-center flex-col gap-4 md:flex-row md:gap-0 justify-between w-full max-w-[1297px] mx-auto px-6 lg:px-4">
                {/* Links */}
                <ul className="flex items-center gap-[54px] list-none">
                    <a className="list-none" href="/termsAndCondition">
                        <li>{t('terms')}</li>
                    </a>
                    <span className="relative before:absolute before:content-[''] before:top-[0px] before:bg-[#FFF] before:w-[6px] before:h-[6px] before:left-1/2 before:-translate-x-1/2 before:rounded-full" />
                    <a className="list-none" href="/privacy">
                        <li>{t('privacy')}</li>
                    </a>
                    <span className="relative before:absolute before:content-[''] before:top-[0px] before:bg-[#FFF] before:w-[6px] before:h-[6px] before:left-1/2 before:-translate-x-1/2 before:rounded-full" />
                    <a className="list-none" href="/contactus">
                        <li>{t('contact')}</li>
                    </a>
                </ul>

                {/* Logo */}
                <a href="/">
                    <div className="logo">
                        <img
                            src={logo}
                            alt="logo"
                            className="max-w-[104px] m-auto"
                        />
                    </div>
                </a>

                {/* Social Media */}
                <div className="flex items-center gap-4">
                    <p className="text-white text-[14px] font-semibold">{t('channels')}</p>
                    <div className="flex items-center gap-4 text-[#9D9DA2]">
                        <a href="https://wa.me/966531661384" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-lg" />
                        </a>
                        <a href="https://x.com/rvin_ai" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-lg" />
                        </a>
                        <a href="https://www.instagram.com/rvin.ai" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
