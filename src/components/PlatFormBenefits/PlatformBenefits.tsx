import { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { benefits } from '../../data/data';

const PlatformBenefits = () => {
  const { t } = useTranslation();
  const [selectedBenefit, setSelectedBenefit] = useState(0);
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
    <div dir={dir} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:gap-[45px] lg:pt-[140px] gap-y-5 pt-[60px]">
      <div className="col-span-7">
        <div className="flex flex-col gap-y-[16px]">
          <p className="bg-gradient-to-r from-[#403EFE] to-[#E688FE] bg-clip-text text-transparent font-bold text-[20px] rtl:text-[22px] flex justify-start items-center gap-2 leading-[30px] w-max rtl:text-right">
            {t('platformBenefits')}
          </p>
          <p className="text-left text-[28px] rtl:text-[30px] font-bold tracking-[-0.02em] leading-[35px] rtl:text-right">
            {t('keyOfferings')}
          </p>
          <p className="text-left text-[#ACAEBF] md:text-[16px] rtl:md:text-[18px] text-sm rtl:text-[18px] font-medium md:leading-[28px] leading-6 rtl:text-right">
            {t('platformDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[46px] md:grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onClick={() => setSelectedBenefit(index)}
              className={`flex gap-[16px] rounded-[12px] items-center cursor-pointer transition-all duration-300 relative w-full h-full z-10 p-[2px] ${selectedBenefit === index
                  ? "before:content-[''] before:absolute before:inset-0 before:-z-10 before:inline-block before:bg-gradient-to-r before:from-[#3E3DFF] before:to-[#E789FF] before:rounded-[8px]"
                  : ""
                }`}
            >
              <div className={`w-full h-full rounded-[8px] flex p-5 gap-[16px] items-center justify-between transition-all duration-300 ${selectedBenefit === index ? benefit.bgColor : 'bg-[#111220]'
                }`}>
                <div className="flex gap-[16px] items-center">
                  <img src={benefit.img} alt="key" />
                  <p className={`md:text-[16px] rtl:md:text-[18px] text-sm rtl:text-[18px] font-medium md:leading-[28px] leading-6 text-left rtl:text-right ${selectedBenefit === index ? benefit.textColor : 'text-[#ACAEBF]'
                    }`}>
                    {t(benefit.text)}
                  </p>
                </div>
                <BiChevronRight
                  size={30}
                  className={`transition-all duration-300 ${selectedBenefit === index ? benefit.textColor : 'text-[#ACAEBF] hidden'
                    }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" md:block lg:col-span-5 md:pl-[40px] md:pt-[60px] mt-8 lg:mt-0 bg-[linear-gradient(239.08deg,_#1F2125_0%,_#23262B_28.84%,_#131519_100%)] rounded-[24px] border-[1.5px] border-[#35363A] overflow-hidden">
        <div className="w-full h-[352px] md:h-[400px] lg:h-[452px] rounded-[12px] overflow-hidden">
          <img
            src={benefits[selectedBenefit].bgImage}
            alt="key visual"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformBenefits;
