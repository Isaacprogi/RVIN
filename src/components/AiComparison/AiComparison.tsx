import  { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const AiComparison = () => {
  const { t } = useTranslation();
  const [dir, setDir] = useState<'rtl' | 'ltr'>(i18n.language === 'ar' ? 'rtl' : 'ltr');

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
    <div dir={dir} className="space-y-10 mt-[5rem]">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="bg-gradient-to-r from-[#403EFE] to-[#E688FE] bg-clip-text text-transparent font-bold text-[20px] flex justify-center items-center gap-2 leading-[30px] w-max m-auto">
          {t('whyRvin')}
        </p>
        <h1 className="text-3xl text-white lg:text-[40px] font-bold">
          {t('experienceImpact')}
        </h1>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] md:gap-y-0 gap-y-8">
        {/* With AI Agents */}
        <div className="bg-[linear-gradient(239.08deg,_#010041_0%,_#4B0062_100%)] lg:p-[60px] p-6 rounded-[24px]">
          <h3 className={`${dir === "rtl"? "text-left": dir === "ltr"? "text-left":"text-left"}} text-[24px] text-white leading-[30px] font-bold mb-[20px] `}>
            {t('withAgents')}
          </h3>
          
          <ul className="text-[#ACAEBF] text-[18px] leading-[28px] font-normal flex flex-col gap-y-[12px] custom-bullet blue custom-bullet-before">
            {(t('withAgentPoints', { returnObjects: true } ) as string[]).map((item: string, idx: number) => (
              <li key={idx} className="ps-8 relative text-left">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Without AI Agents */}
        <div className="bg-[linear-gradient(239.08deg,_#1F2125_0%,_#23262B_28.84%,_#131519_100%)] lg:p-[60px] p-6 rounded-[24px] border-[1.5px] border-[#35363A]">
          <h3 className={`${dir === "rtl"? "text-left": dir === "ltr"? "text-left":"text-left"}} text-[24px] text-white leading-[30px] font-bold mb-[20px] `}>
            {t('withoutAgents')}
          </h3>
          <ul className="text-[#ACAEBF] text-[18px] leading-[28px] font-normal flex flex-col gap-y-[12px] custom-bullet purple custom-bullet-before">
            {(t('withoutAgentPoints', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <li key={idx} className="ps-8 relative text-left">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiComparison;
