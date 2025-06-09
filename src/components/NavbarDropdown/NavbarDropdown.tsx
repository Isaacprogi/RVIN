import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from '../GradientButton/GradienButton';

interface NavbarDropdownProps {
    isArabic: boolean;
    toggleLanguage: () => void;
    menuOpen: boolean;
    toggleMenu: () => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
    toggleMenu,
    isArabic,
    menuOpen,
    toggleLanguage
}) => {
    const { t } = useTranslation();

    // Animation variants for the main container
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };

    // Animation variants for individual items
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            x: -10,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    // Animation variants for the language toggle
    const toggleVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    // Animation variants for the gradient button
    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="p-4 bg-gradient-to-r from-[#010041] to-[#4B0062] flex items-center justify-center absolute w-full h-screen top-0 lg:hidden left-0  lg:relative z-10   flex-col  gap-4 "
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="flex gap-5 relative flex-col items-center justify-center"
                        variants={itemVariants}
                    >
                        <motion.button
                            onClick={toggleMenu}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                className="text-white text-center hover:text-gray-300 transition-colors duration-300"
                                to="/aboutus"
                            >
                                {t('about')}
                            </Link>
                        </motion.button>

                        <motion.button
                            onClick={toggleMenu}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                className="text-white hover:text-gray-300 transition-colors duration-300"
                                to="/contactus"
                            >
                                {t('contact')}
                            </Link>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="relative w-[1px] h-[16px] bg-[rgba(150,148,211,0.4)] lg:inline-block hidden"
                        variants={itemVariants}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    />

                    {/* Language Toggle */}
                    <motion.div
                        className="lg:my-0 my-3"
                        variants={toggleVariants}
                    >
                        <motion.div
                            className="flex justify-center items-center transition-colors duration-500 gap-2 cursor-pointer"
                            onClick={toggleLanguage}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
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
                        </motion.div>
                    </motion.div>



                    <motion.div
                        className="relative w-[1px] h-[16px] bg-[rgba(150,148,211,0.4)] lg:inline-block hidden"
                        variants={itemVariants}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    />

                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/login"
                            onClick={toggleMenu}
                            className="bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] bg-clip-text text-transparent font-bold hover:text-gray-300 flex items-center gap-2 group justify-center lg:justify-start lg:my-0 my-3 transition-all duration-300"
                        >
                            {t('signIn')}
                            <motion.svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                className="text-[#E789FF] fill-current group-hover:text-white rtl:rotate-180"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                            </motion.svg>
                        </Link>
                    </motion.div>

                    <motion.div variants={buttonVariants}>
                        <Link to="/contactus" data-discover="true">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <GradientButton
                                    onClick={toggleMenu}
                                    size="lg"
                                    variant="secondary"
                                    showArrow={true}
                                >
                                    <span>{t('requestQuote')}</span>
                                </GradientButton>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavbarDropdown;