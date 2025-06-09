import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import GradientButton from '../GradientButton/GradienButton';

const HeroSection: React.FC = () => {
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
        <div dir={dir} className="w-full max-w-[1297px] mx-auto relative z-10 md:px-6 py-10 px-3">
            <div>
                <div className="flex flex-col items-center text-center lg:mt-20 mt-6">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] p-[1px] shadow-[0_4px_14px_rgba(91,90,255,0.2)]">
                        <div className="relative inset-0 bg-[#080911] flex items-center rounded-full shadow-[0_4px_14px_rgba(91,90,255,0.2)]">
                            <div className="w-full text-white h-full rounded-full text-[13px] px-[16px] py-[6px] md:px-4 flex items-center justify-center md:text-sm md:font-normal uppercase">
                                {t('streamline')}
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold">
                        {t('welcome')}{" "}
                        <span className="bg-gradient-to-r pb-4 from-[#3E3DFF] to-[#E789FF] bg-clip-text text-transparent inline-block">
                            {t('rvinJourney')}{" "}
                        </span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-[730px] mt-4">
                        {t('description')}
                    </p>
                    <GradientButton
                        className="mt-6"
                        size="lg"
                        variant="secondary"
                        showArrow={true}
                    >
                        <span>{t('requestDemo')}</span>
                    </GradientButton>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
