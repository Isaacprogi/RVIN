import { useEffect, useState } from 'react';
import StepsGrid from '../StepsGrid/StepsGrid';
import GradientButton from '../GradientButton/GradienButton';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Process = () => {
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
        <div dir={dir} className="w-full max-w-[1297px] mx-auto px-3">
            <div className="lg:px-[169px] md:pt-4 pt-7 bg-cover bg-bottom flex flex-col px-2 relative">
                <div className="before:content-[''] before:absolute before:hidden sm:before:block before:-bottom-[5%] sm:before:-bottom-[7%] md:before:-bottom-[5%] lg:before:bottom-0 before:left-0 before:w-full before:h-full before:bg-[image:var(--bg-i)] before:bg-contain before:bg-no-repeat md:before:bg-top z-0" />

                <div className="relative z-10 text-center">
                    <h6 className="text-white font-bold lg:text-[30px] md:text-[24px] text-[20px] mb-1">
                        {t('accelerateInteractions')}
                    </h6>

                    <p className="text-3xl md:text-5xl lg:text-[110px] rtl:text-[32px] rtl:md:text-[50px] rtl:lg:text-[112px] font-bold lg:leading-[134px] tracking-[-0px] mb-5">
                        <span className="bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] bg-clip-text text-transparent">
                            {t('allInOne')}
                        </span>
                    </p>

                    <p className="text-[15px]/6 rtl:text-[17px]/7 md:text-[16px]/6 rtl:md:text-[18px]/7 text-[#ACAEBF] font-normal text-center max-w-[750px] m-auto">
                        {t('aiAgentsDescription')}
                    </p>

                    <div className="flex items-center justify-center">
                        <GradientButton className="mt-6" size="lg" variant="secondary" showArrow={true}>
                            <span>{t('learnMore')}</span>
                        </GradientButton>
                    </div>
                </div>

                {/* Process Section */}
                <div className="flex flex-col gap-y-[42px] relative z-10 mt-[100px] sm:mt-[150px] md:mt-[200px] lg:mt-[250px]">
                    <div className="flex flex-col gap-y-2">
                        <p className="bg-gradient-to-r from-[#403EFE] to-[#E688FE] bg-clip-text text-transparent font-bold text-[20px] rtl:text-[22px] flex justify-center items-center gap-2 leading-[30px] w-max m-auto">
                            {t('ourProcess')}
                        </p>
                        <p className="text-center text-[28px] rtl:text-[30px] font-bold tracking-[-0.02em] leading-[35px]">
                            {t('howRvinWorks')}
                        </p>
                    </div>

                    <StepsGrid />
                </div>
            </div>
        </div>
    );
};

export default Process;
