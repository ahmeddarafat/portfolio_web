// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio.
//  Think of it like your app's constants.dart or app_data.dart.
// ============================================================

// ─── PERSONAL INFO ──────────────────────────────────────────
// Used in: Hero, About, Contact, Navbar
export const personalInfo = {
    name: 'Ahmed Arafat',
    title: 'Flutter Developer',
    location: 'Cairo, Egypt',
    email: 'ahmed.arafat3535@gmail.com',
    phone: '+20 122 986 2146',
    summary:
        'Passionate Flutter developer crafting beautiful, high-performance cross-platform apps. ' +
        'Clean architecture enthusiast with a focus on scalable code and great user experiences.',
    openToWork: true,

    resumeLink: '/Ahmed_Arafat_Flutter.pdf',
    links: {
        github: 'https://github.com/ahmeddarafat',
        gitlab: 'https://gitlab.com/arafatt',
        linkedin: 'https://www.linkedin.com/in/ahmed-arafat-064621231/',
    },
}

// ─── ABOUT SECTION ──────────────────────────────────────────
// Used in: About
// Stats shown under the bio text
export const aboutStats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Apps Shipped' },
    { number: '10K+', label: 'App Downloads' },
    { number: '4', label: 'Certificates' },
    { icon: '🎓', label: 'Very Good (83.91%)', sublabel: 'Mansoura University' },
    { icon: '📍', label: 'Cairo, Egypt', sublabel: 'Open to Remote' },
]

// ─── SKILLS ─────────────────────────────────────────────────
// Used in: Skills
// Each group = one card. Add/remove skills freely.
export const skillGroups = [
    {
        title: 'Languages',
        icon: '💻',
        skills: ['Dart', 'Python', 'C++', 'C#', 'SQL'],
    },
    {
        title: 'Frameworks',
        icon: '📱',
        skills: ['Flutter'],
    },
    {
        title: 'Architecture',
        icon: '🏗️',
        skills: ['Clean Architecture', 'MVVM', 'BLoC Pattern'],
    },
    {
        title: 'State Management',
        icon: '⚡',
        skills: ['BLoC / Cubit', 'Riverpod', 'Provider', 'GetX'],
    },
    {
        title: 'Backend Integration',
        icon: '🔌',
        skills: ['REST APIs', 'GraphQL', 'WebSocket'],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'SQLite', 'MS SQL Server'],
    },
    {
        title: 'Core Engineering',
        icon: '🧠',
        skills: ['Data Structures & Algorithms', 'OOP', 'SOLID Principles', 'Design Patterns', 'Clean Code'],
    },
    {
        title: 'Tools',
        icon: '🛠️',
        skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Figma', 'CI/CD', 'Agile', "Github Copilot", 'Cursor', "Antigravity", "Claude Dev", "Shell Scripts"],
    },
]

// Progress bars shown on the right side of Skills section.
// level: 0–100   color: any CSS hex color
export const proficiencies = [
    { name: 'Flutter / Dart', level: 95, color: '#54C5F8' },
    { name: 'Clean Architecture', level: 90, color: '#02569B' },
    { name: 'BLoC / State Mgmt', level: 92, color: '#40C4FF' },
    { name: 'REST API Integration', level: 88, color: '#0288d1' },
    { name: 'Firebase', level: 85, color: '#FFA000' },
    { name: 'UI / UX Implementation', level: 87, color: '#26C6DA' },
]

// ─── EXPERIENCE ──────────────────────────────────────────────
// Used in: Experience
// Jobs are displayed newest → oldest (top → bottom).
// type options: 'Full-time' | 'Part-time' | 'Freelance' | 'Internship'
// current: true → shows the pulsing green dot
export const jobs = [
    {
        role: 'Flutter Developer',
        company: 'X Coders',
        period: 'Nov 2024 – Present',
        type: 'Full-time',
        current: true,
        points: [
            'Worked closely with back-end teams to integrate efficient data handling solutions.',
            'Assisted in code refactoring to enhance maintainability and optimize performance.',
            'Developed new features and fixed bugs, improving overall app functionality.',
        ],
    },
    {
        role: 'Flutter Developer',
        company: 'Freelancer',
        period: 'Jan 2024 – Present',
        type: 'Freelance',
        current: true,
        points: [
            'Develop and maintain cross-platform mobile applications.',
            'Implement state management solutions with BLoC.',
            'Integrate RESTful APIs and third-party services.',
        ],
    },
    {
        role: 'Flutter Developer (Part-time)',
        company: 'Codes Roots',
        period: 'Jul 2024 – Nov 2024',
        type: 'Part-time',
        current: false,
        points: [
            'Maintained scalable, clean architecture across projects.',
            'Optimized app performance for production releases.',
            'Implemented continuous integration (CI/CD) pipelines.',
        ],
    },
    {
        role: 'Flutter Development Intern',
        company: 'Codeption',
        period: 'Oct 2024 – Nov 2024',
        type: 'Internship',
        current: false,
        points: [
            'Developed web applications using Flutter Web.',
            'Structured Flutter projects using Clean Architecture.',
            'Documented development progress and bug fixes.',
        ],
    },
    {
        role: 'Flutter Development Intern',
        company: 'MYM',
        period: 'Sep 2023 – Oct 2023',
        type: 'Internship',
        current: false,
        points: [
            'Participated in Agile development processes.',
            'Contributed to UI/UX, creating responsive layouts.',
            'Collaborated with senior developers on feature delivery.',
        ],
    },
    {
        role: 'Flutter Development Intern',
        company: 'RoQay',
        period: 'Jul 2023 – Sep 2023',
        type: 'Internship',
        current: false,
        points: [
            'Served as Mobile Team Leader.',
            'Participated in code review processes.',
            'Gained experience in branching strategies and Git workflows.',
        ],
    },
]

// ─── PROJECTS ────────────────────────────────────────────────
// Used in: Projects
// platforms: ['iOS'] | ['Android'] | ['iOS', 'Android']
// highlight: true → shows the ⭐ Featured badge
// storeLinks: set to null if not published on that store
//   e.g.  storeLinks: { appStore: 'https://...', playStore: null }
export const projects = [
    {
        name: 'SaaS Education Platform',
        category: 'EdTech',
        platforms: ['iOS', 'Android'],
        description:
            'A customizable SaaS educational platform for schools and learning centers. Each instance supports different color schemes and features per client. Students can watch courses, take exams, subscribe, and manage settings through a control panel.',
        tags: ['Flutter', 'SaaS', 'Multi-tenant', 'BLoC', 'REST API'],
        // Use 'apps' array when a project ships multiple separate apps
        apps: [
            {
                label: 'القدرات والتحصيلي', // App name shown above the store links
                appStore: 'https://apps.apple.com/eg/app/%D8%A7%D9%84%D9%82%D8%AF%D8%B1%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A/id6736402873',
                playStore: 'https://play.google.com/store/apps/details?id=com.crazyidea.qudorat3',
            },

        ],
    },
    {
        name: 'AZ Courses',
        category: 'EdTech',
        platforms: ['iOS', 'Android'],
        description:
            'Educational platform with over 10,000 downloads covering all educational stages. Users can purchase courses, earn in-app points, watch video tutorials, take exams, and read study notes. Managed through a robust control panel.',
        tags: ['Flutter', 'Video Streaming', 'Payment', 'BLoC', '10K+ Downloads'],
        storeLinks: { appStore: 'https://apps.apple.com/eg/app/azcourses/id1592327429', playStore: 'https://play.google.com/store/apps/details?id=com.crazyidea.azcourses' },
        // highlight: true,
    },
    {
        name: 'Orbit — Engineering & Real Estate',
        category: 'PropTech',
        platforms: ['Android'],
        description:
            'Comprehensive platform connecting users with professional engineers and real estate experts for construction, design, and investment decisions. Integrated consulting and real estate services in one solution.',
        tags: ['Flutter', 'Consulting', 'Real Estate', 'Clean Architecture'],
        storeLinks: { appStore: null, playStore: 'https://play.google.com/store/apps/details?id=com.techlab.orbit.client' },
    },
    {
        name: 'WSG - Auto Parts Ecosystem',
        category: 'E-commerce',
        platforms: ['iOS', 'Android'],
        description:
            'A unique platform for buying and selling car auto parts. Features a dual-user journey: Traders purchase directly from providers with fast delivery and earn redeemable points, while Customers buy from trader markets and earn points for future discounts. Simplifies the supply chain via an innovative rewards system.',
        tags: ['Flutter', 'E-commerce', 'Loyalty System', 'Supply Chain'],
        storeLinks: { appStore: 'https://apps.apple.com/us/app/wsg/id6756726740', playStore: 'https://play.google.com/store/apps/details?id=com.vlaro.wsg' },
    },
    {
        name: 'Sanadk & Sanadk Lawyer',
        category: 'LegalTech',
        platforms: ['iOS', 'Android'],
        description:
            'Dual-application legal ecosystem. Client app offers instant legal advice and document reviews. Lawyer app provides a professional dashboard to manage requests, work schedules, and client appointments.',
        tags: ['Flutter', 'Dual-app', 'Legal', 'Scheduling', 'BLoC'],
        // storeLinks: { appStore: 'https://apps.apple.com/us/app/____/id6760715437', playStore: 'https://play.google.com/store/apps/details?id=com.techlab.sanadkuser' },
        apps: [
            {
                label: 'Sanadk (Clients)',
                appStore: 'https://apps.apple.com/us/app/____/id6760715437',
                playStore: 'https://play.google.com/store/apps/details?id=com.techlab.sanadkuser',
            }, {
                label: 'Sanadk Lawyer',
                appStore: 'https://apps.apple.com/us/app/snadk-lawyer/id6761060439',
                playStore: 'https://play.google.com/store/apps/details?id=com.techlab.sanadklawyer',
            },]
    },
    {
        name: 'Sakni Way',
        category: 'PropTech',
        platforms: ['iOS', 'Android'],
        description:
            'Mobile app connecting property owners and renters, enabling users to browse and manage rental listings for homes and rooms, simplifying the property rental process.',
        tags: ['Flutter', 'Real Estate', 'Listings', 'REST API'],
        storeLinks: { appStore: 'https://apps.apple.com/eg/app/sakni-way/id6740748229', playStore: 'https://play.google.com/store/apps/details?id=com.crazyidea.sakni&pcampaignid=web_share' },
    },
    {
        name: 'Caro P.O',
        category: 'E-commerce',
        platforms: ['iOS', 'Android'],
        description:
            'Specialized e-commerce app for medical products. Offers reliable shopping with a wide range of trusted medical devices and supplies, secure purchasing, and fast delivery.',
        tags: ['Flutter', 'E-commerce', 'Medical', 'Payment Gateway'],
        storeLinks: { appStore: 'https://apps.apple.com/eg/app/care-p-o/id6751286401', playStore: 'https://play.google.com/store/apps/details?id=com.techlab.care.p.o' },
    },
    {
        name: 'Tyyli',
        category: 'Marketplace',
        platforms: ['iOS'],
        description:
            'Full-featured multi-vendor marketplace enabling vendors to manage products and customers to browse, purchase, and track orders. Integrated secure payment gateways, vendor dashboards, and real-time order management.',
        tags: ['Flutter', 'Multi-vendor', 'Payments', 'Real-time', 'Dashboard'],
        storeLinks: { appStore: 'https://apps.apple.com/us/app/tyyli/id6752359117', playStore: null },
    },
    {
        name: 'Jamaal.',
        category: 'E-commerce',
        platforms: ['iOS'],
        description:
            "Customized e-commerce platform for Jamaal Store focused on kids' products (toys, tools, accessories). Built with Flutter and integrated with WooCommerce and Tap payment gateway for seamless checkout.",
        tags: ['Flutter', 'WooCommerce', 'Tap Payment', 'Kids', 'E-commerce'],
        storeLinks: { appStore: 'https://apps.apple.com/us/app/jamaal/id6737206154', playStore: null },
    },
]

// Filter tabs shown above the projects grid.
// 'All' must always be first. The rest should match the `category` values above.
export const projectCategories = ['All', 'EdTech', 'E-commerce', 'LegalTech', 'PropTech', 'Marketplace']

// ─── EDUCATION ───────────────────────────────────────────────
// Used in: Education
export const education = [
    {
        degree: 'Bachelor of Engineering',
        major: 'Computers & Control Systems',
        school: 'Faculty of Engineering, Mansoura University',
        period: '2019 – 2024',
        grade: 'Very Good (83.91%)',
        icon: '🎓',
    },
]

// Add or remove certificates here.
export const certificates = [
    { name: 'Flutter – Animations', date: 'Oct 2023', icon: '🎬', link: "https://www.udemy.com/certificate/UC-f2a2973b-ed85-4b15-a445-599ba9db14bf/" },
    { name: 'Flutter Clean Architecture with MVVM', date: 'Apr 2023', icon: '🏗️', link: "https://www.udemy.com/certificate/UC-798f981e-8f50-49a3-a069-a13f6f011264/" },
    { name: 'The Complete Flutter & Dart Development', date: 'Feb 2022', icon: '📱', link: "http://ude.my/UC-c484bfa3-1545-4eef-822b-20d9c215b50d" },
    { name: 'The Complete Dart Language Guide', date: 'Jul 2021', icon: '💙', link: "http://ude.my/UC-c144abf6-2510-4a32-bbe9-ceb5fd3a05c7" },
]
