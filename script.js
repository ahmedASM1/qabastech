// Initialize Vanta.js NET effect
let vantaEffect = null;

function initVantaBackground() {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
    
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    
    vantaEffect = VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 0.75,
        color: isDarkTheme ? 0x6c63ff : 0x4a6bff,
        backgroundColor: isDarkTheme ? 0x050510 : 0x0a0a1a,
        points: 12.00,
        maxDistance: 25.00,
        spacing: 18.00,
        showDots: true,
        speed: 1.5
    });
    
    console.log('Vanta background initialized with theme:', isDarkTheme ? 'dark' : 'light');
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Vanta.js background
    initVantaBackground();
    
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        offset: 100,
        easing: 'ease-in-out',
        once: true,
    });
    
    // Update current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // DOM Elements
    const header = document.querySelector('.header');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const langButtons = document.querySelectorAll('.lang-btn');
    const themeToggleBtns = document.querySelectorAll('.theme-toggle, .mobile-theme-toggle');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    // Translations data
    const translations = {
        en: {
            home: "Home",
            about: "About",
            services: "Our Services",
            solutions: "Our Solutions",
            contact: "Contact Us",
            language: "Language",
            themeMode: "Theme Mode",
            followUs: "Follow Us",
            quickLinks: "Quick Links",
            rightsReserved: "All Rights Reserved",
            ourVision: "OUR VISION",
            visionText: "Delight Customers' offering Creative, Distinctive & Customized Services and Solutions in the field of Information Technology and Telecommunications by adopting Innovative and Emerging Technologies thereby Attaining Leadership position among the top Saudi Service Providers.",
            ourMission: "OUR MISSION",
            missionText: "Exceed the expectations of employees and customers there by becoming the first choice IT services provider to our clients. Leadership position among the top Saudi Service Providers.",
            
            // Capabilities section translations
            capabilitiesTitle: "IN SHORT, QABASTECH IS CAPABLE OF",
            capabilitiesIntro: "Customers leverage our experience which helps establish, adopt and manage the complex and hybrid IT landscape of today's enterprises, combining aspects of people, process and technology to deliver an enterprise of the future that is geared to overcome challenges across the following segments:",
            capability1: "Next-Generation Data Centers",
            capability2: "Business Productivity Services",
            capability3: "Identity And Access Management",
            capability4: "Collaborative Sourced (Co-Sourced) Model Of Engagement",
            capability5: "Integrated Application Development",
            capability6: "Migrate You From A Current Straight Jacketed IT Outsourcing Engagement To A Fresh New Experience",
            
            // Existing translations
            servicesTitle: "HOW WE CAN HELP YOU",
            service1Title: "CUSTOMER EXPERIENCE",
            service1Text: "End-to-end solutions, from designing the customer journey to improving user interfaces, ensuring a seamless and engaging experience across all touchpoints.",
            service2Title: "DIGITAL TRANSFORMATION",
            service2Text: "Designing digital services, developing custom mobile applications, migrating systems to the cloud, and implementing metaverse solutions to deliver innovative and integrated experiences.",
            service3Title: "INNOVATION",
            service3Text: "Holistic innovation strategies, encompassing the creation of innovation hubs, tailored incubation and acceleration programs, and the orchestration of hackathons to foster groundbreaking ideas, driving growth and advancement.",
            service4Title: "DIGITAL MARKETING",
            service4Text: "A to Z innovative digital marketing solutions designed to elevate your online presence and enhance engagement with your target audience.",
            service5Title: "ARTIFICIAL INTELLIGENCE",
            service5Text: "Cutting-edge AI solutions that enhance operational efficiency, empower intelligent decision-making, and boost performance through big data analytics and the implementation of machine learning and deep learning technologies.",
            service6Title: "CONSULTING AND STRATEGIC PLANNING",
            service6Text: "Tailored consulting solutions aligned with your unique objectives, offering strategic insights to drive success and ensuring seamless execution at every stage of your projects.",
            industry1: "Gaming & Animation",
            industry2: "Next-generation data centers",
            industry3: "Business productivity services",
            industry4: "Innovation",
            solution1: "Internet of Things (IoT)",
            solution2: "IT Support and Managed Services",
            solution3: "Qabastech Strategy and Planning",
            solution4: "Gaming & Animation",
            solution5: "Procurement",
            solution6: "Security Consultancy",
            solution7: "Innovation",
            solution8: "Artificial-intelligence",
            heroTitle1: "TAILOR-MADE STRATEGIES",
            heroTitle2: "CRAFTED TO ADDRESS",
            heroTitle3: "YOUR INNOVATION NEEDS",
            heroDescription: "QabasTech is committed to ensuring the highest levels of ongoing support for the critical infrastructure and applications that drive your business forward.",
            whyQabas: "WHY SHOULD YOU CONSIDER QABASTECH?",
            aboutText1: "Qabas Tech is a Saudi Company based in Riyadh, one of the best technology service providers in Saudi Arabia Founded 2010.",
            aboutText2: "As a dedicated managed services provider, Qabas tech is committed to ensuring the highest levels of ongoing support for the critical infrastructure and applications that drive your business forward. Outstanding support is based on predictable and measurable resolution processes that you can rely on for effective communication, ticket management, and incident resolution.",
            yearsExperience: "Years of Experience",
            completedProjects: "Completed Projects",
            industriesTitle: "INDUSTRIES WE SUPPORT AND TRANSFORM",
            industriesText: "As needs are numerous and varied, QabasTech takes a holistic approach to innovation, gaming, and technology investments, focusing on the major priorities of all public and private entities. This includes creating more seamless user experiences across all platforms, optimizing performance through advanced data analytics, and fostering creative solutions to drive growth and strategic development initiatives.",
            solutionsTitle: "INNOVATIVE SOLUTIONS FOR YOUR BUSINESS NEEDS",
            solutionsText: "QabasTech identifies and implements IT solutions that address specific business needs. Combining technical expertise with an understanding of the unique requirements of the customer environment, we are able to identify optimal solutions for our clients.",
            partnersTitle: "OUR PARTNERS",
            partnersSubtitle: "We are happy to be working with",
            partnersDescription: "As an independent provider of information technology services, Qabastech uses world-class products during the design and development of our technology solutions. Qabastech has established long-standing relationships with a network strategic partners that ensure we have access to hardware and software products required to implement our innovative solutions. Visit one of our Solutions pages to see how qabastech is leveraging our strategic partnerships to deliver world class IT consulting solutions to our customers today.",
            alliancesTitle: "QABASTECH Technology Alliances",
            alliancesSubtitle: "Technology Alliances",
            alliancesDescription: "Our technology alliances enable us to deliver integrated solutions that address complex business challenges and provide innovative technologies to help you stay ahead of the competition.",
            contactTitle: "CONTACT US",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendButton: "Send",
            address1: "P.O Box 87205, Riyadh 11642, Kingdom Of Saudi Arabia",
            address2: "Moon Tower, Al Hadrawi, Ar Rahmaniyyah, Riyadh 12341",
            phone: "Phone: +966 11 2111896"
        },
        ar: {
            home: "الرئيسية",
            about: "من نحن",
            services: "خدماتنا",
            solutions: "حلولنا",
            contact: "اتصل بنا",
            language: "اللغة",
            themeMode: "وضع السمة",
            followUs: "تابعنا",
            quickLinks: "روابط سريعة",
            rightsReserved: "جميع الحقوق محفوظة",
            ourVision: "رؤيتنا",
            visionText: "إسعاد العملاء من خلال تقديم خدمات وحلول إبداعية ومميزة ومخصصة في مجال تكنولوجيا المعلومات والاتصالات من خلال تبني التقنيات المبتكرة والناشئة وبالتالي تحقيق مكانة قيادية بين كبار مزودي الخدمة السعوديين.",
            ourMission: "مهمتنا",
            missionText: "تجاوز توقعات الموظفين والعملاء وبالتالي أن نصبح الخيار الأول لمزود خدمات تكنولوجيا المعلومات لعملائنا. مكانة قيادية بين كبار مزودي الخدمة السعوديين.",
            
            // Capabilities section translations
            capabilitiesTitle: "باختصار، قبس تك قادرة على",
            capabilitiesIntro: "يستفيد العملاء من خبرتنا التي تساعد في إنشاء وتبني وإدارة المشهد المعقد والهجين لتكنولوجيا المعلومات في مؤسسات اليوم، مع الجمع بين جوانب الأفراد والعمليات والتكنولوجيا لتقديم مؤسسة المستقبل المصممة للتغلب على التحديات عبر القطاعات التالية:",
            capability1: "مراكز بيانات الجيل التالي",
            capability2: "خدمات إنتاجية الأعمال",
            capability3: "إدارة الهوية والوصول",
            capability4: "نموذج المشاركة التعاونية (المشتركة)",
            capability5: "تطوير التطبيقات المتكاملة",
            capability6: "نقلك من ارتباط تعهيد خارجي لتكنولوجيا المعلومات مقيد إلى تجربة جديدة منعشة",
            
            // Existing translations
            servicesTitle: "كيف يمكننا مساعدتك",
            service1Title: "تجربة العملاء",
            service1Text: "حلول شاملة، من تصميم رحلة العميل إلى تحسين واجهات المستخدم، مما يضمن تجربة سلسة وجذابة عبر جميع نقاط الاتصال.",
            service2Title: "التحول الرقمي",
            service2Text: "تصميم الخدمات الرقمية، وتطوير تطبيقات الجوال المخصصة، ونقل الأنظمة إلى السحابة، وتنفيذ حلول الميتافيرس لتقديم تجارب مبتكرة ومتكاملة.",
            service3Title: "الابتكار",
            service3Text: "استراتيجيات ابتكار شاملة، تشمل إنشاء مراكز الابتكار، وبرامج الحضانة والتسريع المخصصة، وتنظيم الهاكاثونات لتعزيز الأفكار الرائدة، ودفع النمو والتقدم.",
            service4Title: "التسويق الرقمي",
            service4Text: "حلول تسويق رقمي مبتكرة من الألف إلى الياء مصممة لرفع وجودك على الإنترنت وتعزيز التفاعل مع جمهورك المستهدف.",
            service5Title: "الذكاء الاصطناعي",
            service5Text: "حلول الذكاء الاصطناعي المتطورة التي تعزز كفاءة التشغيل، وتمكن اتخاذ القرارات الذكية، وتعزز الأداء من خلال تحليلات البيانات الضخمة وتنفيذ تقنيات التعلم الآلي والتعلم العميق.",
            service6Title: "الاستشارات والتخطيط الاستراتيجي",
            service6Text: "حلول استشارية مخصصة تتوافق مع أهدافك الفريدة، وتقدم رؤى استراتيجية لدفع النجاح وضمان التنفيذ السلس في كل مرحلة من مراحل مشاريعك.",
            industry1: "الألعاب والرسوم المتحركة",
            industry2: "مراكز بيانات الجيل التالي",
            industry3: "خدمات إنتاجية الأعمال",
            industry4: "الابتكار",
            solution1: "إنترنت الأشياء",
            solution2: "دعم تقنية المعلومات والخدمات المدارة",
            solution3: "استراتيجية وتخطيط قبس تك",
            solution4: "الألعاب والرسوم المتحركة",
            solution5: "المشتريات",
            solution6: "استشارات الأمن",
            solution7: "الابتكار",
            solution8: "الذكاء الاصطناعي",
            heroTitle1: "استراتيجيات مخصصة",
            heroTitle2: "مصممة لتلبية",
            heroTitle3: "احتياجات الابتكار الخاصة بك",
            heroDescription: "قبس تك ملتزمة بضمان أعلى مستويات الدعم المستمر للبنية التحتية والتطبيقات الحيوية التي تدفع أعمالك إلى الأمام",
            whyQabas: "لماذا يجب عليك اختيار قبس تك؟",
            aboutText1: "قبس تك هي شركة سعودية مقرها في الرياض، وهي واحدة من أفضل مزودي خدمات التكنولوجيا في المملكة العربية السعودية، تأسست عام 2010.",
            aboutText2: "كمزود خدمات مُدارة متخصص، تلتزم قبس تك بضمان أعلى مستويات الدعم المستمر للبنية التحتية والتطبيقات الحيوية التي تدفع أعمالك إلى الأمام. يعتمد الدعم المتميز على عمليات حل قابلة للتنبؤ وقابلة للقياس يمكنك الاعتماد عليها للتواصل الفعال وإدارة التذاكر وحل الحوادث.",
            yearsExperience: "سنوات من الخبرة",
            completedProjects: "مشروع مكتمل",
            industriesTitle: "الصناعات التي ندعمها ونطورها",
            industriesText: "نظرًا لأن الاحتياجات متعددة ومتنوعة، تتبنى قبس تك نهجًا شاملاً للابتكار والألعاب واستثمارات التكنولوجيا، مع التركيز على الأولويات الرئيسية لجميع الكيانات العامة والخاصة. ويشمل ذلك إنشاء تجارب مستخدم أكثر سلاسة عبر جميع المنصات، وتحسين الأداء من خلال تحليلات البيانات المتقدمة، وتعزيز الحلول الإبداعية لدفع النمو ومبادرات التطوير الاستراتيجي.",
            solutionsTitle: "حلول مبتكرة لاحتياجات عملك",
            solutionsText: "تحدد قبس تك وتنفذ حلول تكنولوجيا المعلومات التي تلبي احتياجات الأعمال المحددة. من خلال الجمع بين الخبرة التقنية وفهم المتطلبات الفريدة لبيئة العميل، نحن قادرون على تحديد الحلول المثلى لعملائنا.",
            partnersTitle: "شركاؤنا",
            partnersSubtitle: "نحن سعداء بالعمل مع",
            partnersDescription: "كمزود مستقل لخدمات تكنولوجيا المعلومات، تستخدم قبس تك منتجات عالمية المستوى أثناء تصميم وتطوير حلولنا التكنولوجية. أقامت قبس تك علاقات طويلة الأمد مع شبكة من الشركاء الاستراتيجيين الذين يضمنون وصولنا إلى منتجات الأجهزة والبرامج اللازمة لتنفيذ حلولنا المبتكرة. قم بزيارة إحدى صفحات الحلول لدينا لمعرفة كيف تستفيد قبس تك من شراكاتنا الاستراتيجية لتقديم حلول استشارية عالمية المستوى في مجال تكنولوجيا المعلومات لعملائنا اليوم.",
            alliancesTitle: "التحالفات التكنولوجية لقبس تك",
            alliancesSubtitle: "التحالفات التكنولوجية",
            alliancesDescription: "تمكننا تحالفاتنا التكنولوجية من تقديم حلول متكاملة تعالج تحديات الأعمال المعقدة وتوفر تقنيات مبتكرة لمساعدتك على البقاء في طليعة المنافسة.",
            contactTitle: "اتصل بنا",
            namePlaceholder: "الاسم",
            emailPlaceholder: "البريد الإلكتروني",
            messagePlaceholder: "رسالتك",
            sendButton: "إرسال",
            address1: "ص.ب 87205، الرياض 11642، المملكة العربية السعودية",
            address2: "برج مون، الحدراوي، الرحمانية، الرياض 12341",
            phone: "الهاتف: 2111896 11 966+"
        }
    };
    
    // Initialize theme from localStorage or default
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
    
    // Initialize language from localStorage or default
    const savedLang = localStorage.getItem('language') || 'en';
    console.log('Initial language:', savedLang);
    
    // Set the initial direction attribute
    document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
    
    // Apply the saved language
    applyLanguage(savedLang);
    
    // Toggle mobile menu function
    function toggleMobileMenu() {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        
        console.log('Mobile menu toggled');
    }
    
    // Apply chosen language
    function applyLanguage(lang) {
        console.log('Applying language:', lang);
        
        // Update html attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update content with translations
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        // Update logo direction based on language
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.flexDirection = lang === 'ar' ? 'row-reverse' : 'row';
        }
        
        // Update active state of language buttons
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Update font family for better Arabic display
        document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Poppins', sans-serif";
        
        // Force any remaining carousels to reset on language change
        resetCarousels();
        
        // Save language preference
        localStorage.setItem('language', lang);
        
        console.log('Language applied:', lang);
    }
    
    function resetCarousels() {
        // Reset any active carousels (not needed for our static grids)
        const carousels = document.querySelectorAll('.carousel-container');
        carousels.forEach(carousel => {
            const slides = carousel.querySelector('.carousel-slides');
            if (slides) {
                // Reset transform and redraw carousel
                slides.style.transition = 'none';
                slides.style.transform = 'translateX(0)';
                
                // Force reflow
                void slides.offsetWidth;
                
                // Restore transition
                slides.style.transition = 'transform 0.3s ease-out';
            }
        });
    }
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply theme to HTML element
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update theme toggle icons
        updateThemeIcons(newTheme);
        
        // Update Vanta background for theme change
        initVantaBackground();
    }
    
    // Update theme icons based on current theme
    function updateThemeIcons(theme) {
        themeToggleBtns.forEach(btn => {
            const sunIcon = btn.querySelector('.fa-sun');
            const moonIcon = btn.querySelector('.fa-moon');
            
            if (sunIcon && moonIcon) {
                if (theme === 'dark') {
                    sunIcon.style.display = 'block';
                    moonIcon.style.display = 'none';
                } else {
                    sunIcon.style.display = 'none';
                    moonIcon.style.display = 'block';
                }
            }
        });
    }
    
    // Set active navigation link based on scroll position
    function setActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        // Get all sections with IDs for navigation
        const sections = document.querySelectorAll('section[id]');
        
        // Check each section's position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // Get all links that point to this section
            const links = document.querySelectorAll(`a[href="#${section.id}"]`);
            
            // Check if we're currently in this section
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Set this section's links as active
                links.forEach(link => {
                    link.classList.add('active');
                });
            } else {
                // Remove active class if not in this section
                links.forEach(link => {
                    link.classList.remove('active');
                });
            }
        });
        
        // Special case for top of page (home section)
        if (scrollPosition < 100) {
            const homeLinks = document.querySelectorAll('a[href="#home"]');
            homeLinks.forEach(link => {
                link.classList.add('active');
            });
        }
    }
    
    // Initialize all carousels
    function initCarousels() {
        console.log('Initializing carousels');
        // Exclude partners and alliances carousels since they now use a static grid layout
        const carousels = document.querySelectorAll('.carousel-container:not(.partners .carousel-container):not(.alliances .carousel-container)');
        
        carousels.forEach(carousel => {
            const slides = carousel.querySelector('.carousel-slides');
            const prevButton = carousel.querySelector('.carousel-prev');
            const nextButton = carousel.querySelector('.carousel-next');
            
            if (!slides || !prevButton || !nextButton) return;
            
            // Reset state
            slides.style.transform = 'translateX(0)';
            
            // Check document direction
            const isRTL = document.documentElement.dir === 'rtl';
            console.log('Document direction:', document.documentElement.dir, 'isRTL:', isRTL);
            
            let position = 0;
            let touchStartX = 0;
            let touchMoveX = 0;
            
            // Calculate max position based on container and slides width
            function getMaxPosition() {
                const slideWidth = slides.scrollWidth;
                const containerWidth = carousel.clientWidth;
                return Math.max(0, slideWidth - containerWidth);
            }
            
            function goToPrev() {
                const step = carousel.clientWidth * 0.7;
                // For RTL, prev and next directions are reversed
                if (isRTL) {
                    // In RTL, prev button moves content left (position increases)
                    position = Math.min(getMaxPosition(), position + step);
                } else {
                    // In LTR, prev button moves content right (position decreases)
                    position = Math.max(0, position - step);
                }
                updatePosition();
            }
            
            function goToNext() {
                const step = carousel.clientWidth * 0.7;
                const maxPosition = getMaxPosition();
                // For RTL, prev and next directions are reversed
                if (isRTL) {
                    // In RTL, next button moves content right (position decreases)
                    position = Math.max(0, position - step);
                } else {
                    // In LTR, next button moves content left (position increases)
                    position = Math.min(maxPosition, position + step);
                }
                updatePosition();
            }
            
            function updatePosition() {
                const translateDirection = isRTL ? 1 : -1;
                slides.style.transition = 'transform 0.3s ease-out';
                slides.style.transform = `translateX(${position * translateDirection}px)`;
                
                // Update button state
                const maxPosition = getMaxPosition();
                prevButton.disabled = isRTL ? position >= maxPosition : position <= 0;
                nextButton.disabled = isRTL ? position <= 0 : position >= maxPosition;
            }
            
            // Touch events for mobile swiping
            function touchStart(e) {
                touchStartX = e.touches[0].clientX;
                touchMoveX = touchStartX;
                slides.style.transition = 'none';
            }
            
            function touchMove(e) {
                if (touchStartX === 0) return;
                
                touchMoveX = e.touches[0].clientX;
                const diff = touchMoveX - touchStartX;
                
                // Determine swipe threshold based on screen size
                const isSmallScreen = window.innerWidth < 768;
                const swipeThreshold = isSmallScreen ? 10 : 20;
                
                // Only apply transform if the swipe is significant
                if (Math.abs(diff) > swipeThreshold) {
                    let moveAmount;
                    
                    if (isRTL) {
                        // In RTL mode
                        moveAmount = position - diff; // Reversed direction for RTL
                        slides.style.transform = `translateX(${moveAmount}px)`;
                    } else {
                        // In LTR mode
                        moveAmount = position + diff;
                        slides.style.transform = `translateX(-${moveAmount}px)`;
                    }
                }
            }
            
            function touchEnd() {
                if (touchStartX === 0) return;
                
                const diff = touchMoveX - touchStartX;
                const isSmallScreen = window.innerWidth < 768;
                const significantSwipe = isSmallScreen ? 50 : 100;
                
                slides.style.transition = 'transform 0.3s ease-out';
                
                if (Math.abs(diff) > significantSwipe) {
                    // Significant swipe detected
                    if (isRTL) {
                        // In RTL mode, swipe directions are reversed
                        if (diff < 0) {
                            // Swipe left in RTL - go to prev (move content left)
                            goToPrev();
                        } else {
                            // Swipe right in RTL - go to next (move content right)
                            goToNext();
                        }
                    } else {
                        // Standard LTR mode
                        if (diff > 0) {
                            // Swipe right in LTR - go to prev (move content right)
                            goToPrev();
                        } else {
                            // Swipe left in LTR - go to next (move content left)
                            goToNext();
                        }
                    }
                } else {
                    // Return to current position
                    updatePosition();
                }
                
                touchStartX = 0;
            }
            
            // Event listeners for buttons
            prevButton.addEventListener('click', goToPrev);
            nextButton.addEventListener('click', goToNext);
            
            // Touch events for mobile
            slides.addEventListener('touchstart', touchStart);
            slides.addEventListener('touchmove', touchMove);
            slides.addEventListener('touchend', touchEnd);
            
            // Initialize position
            updatePosition();
        });
    }
    
    // Event Listeners
    
    // Hamburger button
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Navigation links - smooth scroll and active state
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Update active states on all matching links
                allNavLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Set this link and all links with same href as active
                const matchingLinks = document.querySelectorAll(`a[href="${targetId}"]`);
                matchingLinks.forEach(matchingLink => {
                    matchingLink.classList.add('active');
                });
                
                // Smooth scroll to target section
                let offsetTop = target.offsetTop;
                
                // Adjust for fixed header
                offsetTop -= 70;
                
                // Special case for home section
                if (targetId === '#home') {
                    offsetTop = 0;
                }
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Language switchers
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
    
    // Theme toggles
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleTheme();
            console.log('Theme toggle button clicked');
        });
    });
    
    // Scroll to top button
    window.addEventListener('scroll', function() {
        // Show scroll to top button after scrolling down
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Add shadow to header on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active navigation link based on scroll position
        setActiveNavLink();
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize carousels on page load
    initCarousels();
    
    // Window resize event for responsive adjustments
    window.addEventListener('resize', function() {
        // Re-initialize carousels on window resize
        initCarousels();
        
        // Refresh Vanta effect on window resize after a short delay to avoid excessive redraws
        if (vantaEffect) {
            clearTimeout(window.vantaResizeTimer);
            window.vantaResizeTimer = setTimeout(function() {
                initVantaBackground();
            }, 200);
        }
    });
    
    // Initial run to set active nav links
    setActiveNavLink();
    
    // Initial execution of theme detection to ensure proper display
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcons(savedTheme);
        console.log('Initial theme set to:', savedTheme);
        
        // Initialize Vanta with correct theme colors if not already done
        if (!vantaEffect) {
            setTimeout(initVantaBackground, 100);
        }
    }

    // Close menu with overlay click
    mobileMenuOverlay.addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close button in mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }
});
