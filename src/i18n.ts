// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    about: "About",
                    contact: "Contact",
                    signIn: "Sign In",
                    requestQuote: "Request a Quote",
                    streamline: "Streamline Operations, Maximize revenues",
                    welcome: "Welcome to Your",
                    description:
                        "Discover the power of AI agents transforming how you connect with your customers. RVIN's agents are built to handle every touchpoint, tailored to your business.",
                    requestDemo: "Request Demo",
                    whyRvin: "Why RVIN",
                    experienceImpact: "Experience the Impact",
                    withAgents: "With AI Agents",
                    withoutAgents: "Without AI Agents",
                    withAgentPoints: [
                        "Respond in seconds, 24/7",
                        "Turn visitors into buyers",
                        "Auto-classify, triage and resolve tickets",
                        "Capture rich data and turn it into actionable insights",
                        "Personalize every interaction",
                        "Omnichannel support through one console",
                        "Understand customer needs thoroughly",
                        "Automate repetitive tasks and workflows",
                        "Free up human agents to focus on high-value work"
                    ],
                    withoutAgentPoints: [
                        "Delayed replies leading to lost revenue",
                        "Missed leads, dropped tickets",
                        "Burned-out teams juggling requests",
                        "Lack of valuable customer data capture",
                        "Generic, impersonal conversations",
                        "Gaps in multilingual and omnichannel support",
                        "Manual task overload, drained productivity",
                        "Inconsistent customer experiences",
                        "Human errors and bottlenecks pile up"
                    ],
                    accelerateInteractions: "Accelerate Your Customer Interactions",
                    allInOne: "All in One",
                    aiAgentsDescription: "RVIN’s AI agents are trained to master customer conversations — from first touch to final transaction. Whether answering questions, resolving issues, or driving sales, we help your team scale effortlessly and delight customers at every step.",
                    learnMore: "Learn More",
                    ourProcess: "Our Process",
                    howRvinWorks: "How RVIN Works"
                    ,
                    platformBenefits: "Platform Benefits",
                    keyOfferings: "Key Offerings",
                    platformDescription: "Explore our offerings and discover how they can drive value for your business. We help you achieve more with less.",
                    tailoredAIAgentTrainedOnCompanyData: "Tailored AI agent trained on company's data",
                    customerDataCaptureAndManagement: "Customer data capture and management",
                    seamlessAndConsistentOmnichannelSupport: "Seamless and consistent omnichannel support",
                    newsAndArticles: "News & Articles",
                    seeWhatsTrending: "See Whats Trending in The Market",
                    newsDescription: "Stay ahead with the latest insights on customer interactions, AI-powered automation, and digital transformation. Discover how businesses are rethinking engagement, support, and growth.",
                    experienceDemo: "Experience Our Demo Today!",
                    benefitsText: "Ripe the Benefits and Get Your AI Agent Now!",
                    terms: "Terms and Conditions",
                    privacy: "Privacy Policy",
                    channels: "Channels:",
                    firstBenefit:"Tailored AI agent trained on company's data",
                    secondBenefit:"Customer data capture and management",
                    thirdBenefit:"Seamless and consistent omnichannel support",
                    forthBenefit:"Intelligent triage and ticket management",
                    fifthBenefit:"Intelligent learning on harnessed insights",
                    sixthBenefit:"Actionable Analytics in data-driven visualization",
                    rvinJourney:'RVIN Journey'
                },
            },
            ar: {
                translation: {
                    about: "حول",
                    contact: "اتصال",
                    signIn: "تسجيل الدخول",
                    requestQuote: "اطلب عرض سعر",
                    streamline: "تبسيط العمليات، وتعظيم الإيرادات",
                    welcome: "مرحبًا بك في",
                    description:
                        "اكتشف قوة وكلاء الذكاء الاصطناعي الذين يغيرون طريقة تواصلك مع عملائك. تم تصميم وكلاء RVIN للتعامل مع كل نقطة اتصال، بما يتناسب مع عملك.",
                    requestDemo: "اطلب عرضًا توضيحيًا",
                    whyRvin: "لماذا RVIN",
                    experienceImpact: "اكتشف التأثير",
                    withAgents: "مع وكلاء الذكاء الاصطناعي",
                    withoutAgents: "بدون وكلاء الذكاء الاصطناعي",
                    rvinJourney:"مع رڤن",
                    withAgentPoints: [
                        "الرد خلال ثوانٍ، على مدار الساعة",
                        "تحويل الزوار إلى مشترين",
                        "تصنيف وحل التذاكر تلقائيًا",
                        "جمع بيانات غنية وتحويلها إلى رؤى قابلة للتنفيذ",
                        "تخصيص كل تفاعل",
                        "دعم متعدد القنوات من خلال وحدة تحكم واحدة",
                        "فهم احتياجات العملاء بعمق",
                        "أتمتة المهام المتكررة وتدفقات العمل",
                        "إتاحة الوقت لوكلاء البشر للتركيز على المهام عالية القيمة"
                    ],
                    withoutAgentPoints: [
                        "ردود متأخرة تؤدي إلى خسارة الإيرادات",
                        "فقدان العملاء المحتملين وسقوط التذاكر",
                        "فرق عمل مرهقة تتعامل مع طلبات متعددة",
                        "عدم وجود بيانات قيمة عن العملاء",
                        "محادثات عامة وغير مخصصة",
                        "ثغرات في الدعم متعدد اللغات والقنوات",
                        "تحميل زائد للمهام اليدوية، مما يقلل الإنتاجية",
                        "تجارب عملاء غير متناسقة",
                        "تراكم الأخطاء البشرية والعوائق"
                    ],

                    accelerateInteractions: "عزّز تفاعلات العملاء الخاصة بك",
                    allInOne: "الكل في واحد",
                    aiAgentsDescription: "تم تدريب وكلاء RVIN الذكاء الاصطناعي على إتقان محادثات العملاء — من أول تواصل إلى إتمام الصفقة. سواء في الإجابة عن الأسئلة أو حل المشكلات أو زيادة المبيعات، نساعد فريقك على التوسع بسلاسة وإسعاد العملاء في كل خطوة.",
                    learnMore: "اعرف المزيد",
                    ourProcess: "عمليتنا",
                    howRvinWorks: "كيف تعمل RVIN",
                    platformBenefits: "فوائد المنصة",
                    keyOfferings: "العروض الرئيسية",
                    platformDescription: "استكشف عروضنا واكتشف كيف يمكنها أن تضيف قيمة لأعمالك. نحن نساعدك على إنجاز المزيد بأقل.",
                    TailoredAIagentTrainedOnCompanysData: "وكلاء ذكاء اصطناعي مُخصص مدرب على بيانات الشركة",
                    CustomerDataCaptureAndManagement: "التقاط بيانات العملاء وإدارتها",
                    SeamlessAndConsistentOmnichannelSupport: "دعم متكامل ومتسق عبر جميع القنوات",
                    IntelligentTriageAndTicketManagement: "ترتيب ذكي وإدارة التذاكر",
                    newsAndArticles: "الأخبار والمقالات",
                    seeWhatsTrending: "اطلع على ما هو شائع في السوق",
                    newsDescription: "ابقَ في الصدارة مع أحدث الرؤى حول تفاعلات العملاء، الأتمتة المدعومة بالذكاء الاصطناعي، والتحول الرقمي. اكتشف كيف تعيد الشركات التفكير في التفاعل، الدعم، والنمو.",
                    experienceDemo: "جرب العرض التوضيحي الخاص بنا اليوم!",
                    benefitsText: "اجنِ الفوائد واحصل على وكيل الذكاء الاصطناعي الخاص بك الآن!",
                    terms: "الشروط والأحكام",
                    privacy: "سياسة الخصوصية",
                    channels: "القنوات:",
                    firstBenefit:"الشروط والأحكام",
                    secondBenefit:"الشروط والأحكام",
                    thirdBenefit:"الشروط والأحكام",
                    forthBenefit:"الشروط والأحكام",
                    fifthBenefit:"الشروط والأحكام",
                    sixthBenefit:"الشروط والأحكام",

                },
            },
        },
    });

export default i18n;
