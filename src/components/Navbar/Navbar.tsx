import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import GradientButton from '../GradientButton/GradienButton';
import { logo } from '../../data/data';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);


    const [isArabic, setIsArabic] = useState(i18n.language === 'ar');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    // Update UI if language changes outside the component
    useEffect(() => {
        const handleLangChange = (lng: string) => {
            setIsArabic(lng === 'ar');
            document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        };
        i18n.on('languageChanged', handleLangChange);
        return () => i18n.off('languageChanged', handleLangChange);
    }, []);
    

    // Toggle language
    const toggleLanguage = () => {
        const newLang = isArabic ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="w-full flex justify-between items-center py-4 md:px-8 px-3 max-w-[1296px] z-20 lg:m-auto">
            <Link to="/">
                <div className="text-2xl font-bold">
                    <img
                        alt="Rvin Logo"
                        className="w-full max-w-[104px]"
                        src={logo}
                    />

                </div>
            </Link>

            {menuOpen && (
                <NavbarDropdown
                    isArabic={isArabic}
                    toggleLanguage={toggleLanguage}
                    toggleMenu={toggleMenu}
                    menuOpen={menuOpen}
                />
            )}

            <div className="p-4  hidden absolute w-full h-screen top-0 lg:bg-transparent left-0 lg:relative z-10 lg:h-auto lg:flex lg:items-center space-x-10 flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-end">
                <div className="flex gap-5 relative lg:flex-row flex-col">
                    <Link className="text-white hover:text-gray-300" to="/aboutus">
                        {t('about')}
                    </Link>
                    <Link className="text-white hover:text-gray-300" to="/contactus">
                        {t('contact')}
                    </Link>
                </div>

                <div className="relative w-[1px] h-[16px] bg-[rgba(150,148,211,0.4)] lg:inline-block hidden" />

                {/* Language Toggle */}
                <div className="lg:my-0 my-3">
                    <div className="flex justify-center items-center gap-2 cursor-pointer" onClick={toggleLanguage}>
                        <span className="font-semibold text-[14px] text-white">English</span>
                        <div className="relative inline-flex items-center">
                            <div className="w-10 h-6 p-[2px] rounded-full bg-gradient-to-r from-[#3E3DFF] to-[#E789FF]">
                                <div className="w-full h-full bg-[#0b0c20] rounded-full" />
                            </div>
                            <div
                                className={`absolute w-5 h-5 rounded-full top-0.5 left-0.5 transition-transform duration-300 bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] ${isArabic ? 'translate-x-4' : 'translate-x-0'
                                    }`}
                            />
                        </div>
                        <span className="font-normal text-[14px] text-white">العربية</span>
                    </div>
                </div>

                <div className="relative w-[1px] h-[16px] bg-[rgba(150,148,211,0.4)] lg:inline-block hidden" />

                <Link
                    to="/login"
                    className="bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] bg-clip-text text-transparent font-bold hover:text-gray-300 flex items-center gap-2 group"
                >
                    {t('signIn')}
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                        className="text-[#E789FF] fill-current group-hover:text-white rtl:rotate-180"
                        height="1em"
                        width="1em"
                    >
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                </Link>

                <Link to="/contactus">
                    <GradientButton
                        size="lg"
                        variant="secondary"
                        showArrow={true}
                    >
                        <span>{t('requestQuote')}</span>
                    </GradientButton>
                </Link>
            </div>

            {/* Mobile menu icon (unchanged) */}
            <div onClick={toggleMenu} className="lg:hidden z-20 relative">
                <span role="img" aria-label="menu" className="anticon anticon-menu text-white text-2xl">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em" height="1em" fill="currentColor">
                        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
