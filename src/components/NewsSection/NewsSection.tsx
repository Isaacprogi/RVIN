import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const NewsSection: React.FC = () => {
    const { t } = useTranslation();
    const [dir, setDir] = useState<"ltr" | "rtl">(i18n.language === "ar" ? "rtl" : "ltr");

    useEffect(() => {
        const handleLangChange = (lng: string) => {
            const newDir = lng === "ar" ? "rtl" : "ltr";
            setDir(newDir);
            document.documentElement.dir = newDir;
        };
        i18n.on("languageChanged", handleLangChange);
        return () => i18n.off("languageChanged", handleLangChange);
    }, []);

    return (
        <div
            dir={dir}
            className="col-span-12 mt-[5rem] lg:col-span-3 flex flex-col gap-y-[20px] relative"
        >
            <p className="bg-gradient-to-r from-[#4540FF] to-[#E688FE] bg-clip-text text-transparent font-bold text-[20px] rtl:text-[22px] flex justify-start items-center gap-2 leading-[30px] w-max">
                {t("newsAndArticles")}
            </p>
            <p className="text-left rtl:text-right text-[28px] rtl:text-[30px] font-bold tracking-[-0.02em] leading-[35px]">
                {t("seeWhatsTrending")}
            </p>
            <p className="text-left rtl:text-right text-[#ACAEBF] text-[16px] rtl:text-[18px] font-medium leading-[28px]">
                {t("newsDescription")}
            </p>
            <div className="rounded-lg bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] p-[2px] w-max group mt-2">
                <div className="bg-[#080911] rounded-lg w-max group-hover:bg-gradient-to-r from-[#3E3DFF] to-[#E789FF]">
                    <button className="cursor-pointer items-center gap-2 relative bg-gradient-to-r from-[#3E3DFF] to-[#E789FF] bg-clip-text text-transparent font-bold capitalize p-4 inline-flex w-max group-hover:text-white">
                        {t("learnMore")}
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 320 512"
                            className="text-[#E789FF] fill-current group-hover:text-white rtl:rotate-180"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
