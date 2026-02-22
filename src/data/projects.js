export const projects = [
    {
        id: 'ispar',
        title: 'ISPAR: Integrated Simulation Platform for Arab Region',
        organization: 'UN ESCWA',
        year: '2025',
        description: 'Policy simulation platform enabling Arab UN member states to model economic indicators, technology adoption, and development scenarios through interactive data-driven simulations.',
        fullDescription: 'Contributed to ISPAR, ESCWA\'s flagship integrated simulation platform that enables policymakers across 22 Arab nations to model and forecast socioeconomic indicators. Updated and integrated 4 new technology indicator datasets into the index simulator, aligning statistical methods with real-time simulations to support evidence-based policy decisions across the region.',
        tech: ['Python', 'Statistical Modeling', 'Data Integration', 'Policy Simulation', 'EViews'],
        impact: 'Live platform used by policymakers across 22 Arab nations',
        metrics: {
            label: '22 Nations Served',
            value: '22'
        },
        logo: 'un-escwa-logo.png',
        link: 'https://ispar.unescwa.org/'
    },
    {
        id: 'cedar',
        title: 'Cedar: Climate-Smart Lending Platform',
        organization: 'TartanHacks 2026',
        year: '2026',
        description: 'Mobile-first platform helping Microfinance Institutions in developing countries make climate-smart lending decisions using real-time climate data, ML risk models, and AI-powered transcription.',
        fullDescription: 'Built in under 24 hours at TartanHacks 2026, Cedar is a mobile-first platform that helps Microfinance Institutions (MFIs) in developing countries make climate-smart lending decisions. By integrating real-time climate data, machine learning risk models, and AI-powered conversation transcription, loan officers can make more informed decisions that protect both borrowers and lenders from climate-related risks.',
        tech: ['React', 'Node.js', 'Python', 'XGBoost', 'FastAPI', 'AI Transcription'],
        impact: 'Built in <24hrs at TartanHacks 2026',
        metrics: {
            label: '92% ML Accuracy',
            value: '92%'
        },
        logo: 'cedarlogo.png',
        link: 'https://cedar-tartanhacks-final.vercel.app/'
    },
    {
        id: 'al-minhaj',
        title: 'Al-Minhaj: AI Policy Support System',
        organization: 'UN ESCWA',
        year: '2025',
        description: 'Hybrid ML/Econometrics forecasting tool for Arab UN member states with AWS deployment and real-time simulation integration.',
        fullDescription: 'Developed a comprehensive AI-powered policy support system for Arab UN member states, combining machine learning with traditional econometric methods. The system provides real-time forecasting capabilities and integrates with existing simulation frameworks to support evidence-based policymaking.',
        tech: ['Python', 'AWS', 'Econometric Modeling', 'Machine Learning', 'Real-time Simulation'],
        impact: 'Supporting policy decisions across 22 Arab nations',
        metrics: {
            label: '22 Arab Nations',
            value: '22'
        },
        logo: 'un-escwa-logo.png'
    },
    {
        id: 'yemen-dashboard',
        title: 'Yemen Economic Intelligence Dashboard',
        organization: 'U.S. State Department',
        year: '2024',
        description: 'Automated NLP pipeline processing 500+ weekly data points with 40% reduction in manual collection time.',
        fullDescription: 'Built an automated intelligence dashboard that processes diverse data sources including satellite imagery, economic indicators, and on-ground reports. Implemented advanced NLP techniques for Arabic and English text processing, with geospatial visualization capabilities.',
        tech: ['Python', 'BeautifulSoup', 'NLTK', 'ArcGIS', 'Satellite Imagery Analysis'],
        impact: '40% reduction in manual data collection time',
        metrics: {
            label: '500+ Data Points/Week',
            value: '500+'
        },
        logo: 'state-dept-logo.png'
    },
    {
        id: 'centcom-tracking',
        title: 'CENTCOM Conflict Tracking System',
        organization: 'Defense Intelligence Agency',
        year: '2023-24',
        description: 'Led 10-person team, reduced intelligence lag from 48hrs to 6hrs with interactive GIS mapping.',
        fullDescription: 'Spearheaded development of a real-time conflict tracking system for CENTCOM operations. Managed cross-functional team to integrate multiple intelligence sources, creating interactive visualizations that reduced decision-making lag times by 87%.',
        tech: ['ArcGIS', 'Google BigQuery', 'Real-time Data Integration', 'Team Leadership'],
        impact: '87% reduction in intelligence lag time',
        metrics: {
            label: '150+ Monthly Incidents',
            value: '150+'
        },
        logo: 'dia-logo.png'
    },
    {
        id: 'aml-study',
        title: 'Abandoned Mine Lands Impact Study',
        organization: 'Carnegie Mellon University',
        year: '2024',
        description: 'Analyzed disproportionate impact on communities of color in Western Pennsylvania.',
        fullDescription: 'Conducted comprehensive environmental justice analysis examining the impact of abandoned mine lands on communities of color in Western Pennsylvania. Presented findings to Pittsburgh City Council and PA Department of Environmental Protection, informing policy recommendations.',
        tech: ['R', 'Python', 'Tableau', 'Power BI', 'Statistical Analysis'],
        impact: 'Presented to Pittsburgh City Council & PA DEP',
        metrics: {
            label: 'Policy Impact',
            value: 'High'
        },
        logo: 'cmu-logo.png'
    },
    {
        id: 'lebanon-aid',
        title: 'Lebanon Aid Tracking System',
        organization: 'American Task Force on Lebanon',
        year: '2023',
        description: 'SQL-based monitoring of $500M+ U.S. aid supporting congressional delegation & 25+ offices.',
        fullDescription: 'Designed and implemented a comprehensive aid tracking system to monitor U.S. assistance to Lebanon. System supported a congressional delegation visit and provided critical data to over 25 congressional offices for oversight and policy decisions.',
        tech: ['MySQL', 'Data Visualization', 'Policy Analytics', 'Congressional Briefings'],
        impact: 'Supported 25+ congressional offices',
        metrics: {
            label: '$500M+ Aid Tracked',
            value: '500M+'
        },
        logo: 'atfl-logo.png'
    },
    {
        id: 'energy-hackathon',
        title: 'MIT Energy Hackathon: AR/AI HVAC Optimization',
        organization: 'MIT',
        year: '2025',
        description: 'Finalist project for COMSOL Multiphysics using Augmented Reality and AI optimization.',
        fullDescription: 'Developed an innovative augmented reality application for HVAC system optimization using AI algorithms. Achieved finalist status in the MIT Energy Hackathon, demonstrating practical applications of AR/AI in building energy efficiency.',
        tech: ['Augmented Reality', 'AI Optimization', 'COMSOL Multiphysics', 'Energy Modeling'],
        impact: 'Finalist at MIT Energy Hackathon',
        metrics: {
            label: 'Competition Finalist',
            value: 'Top 5'
        },
        logo: 'mit-logo.png'
    },
    {
        id: 'renaissance-dam',
        title: 'Renaissance Dam Conflict Risk Analysis',
        organization: 'University of South Florida',
        year: '2024',
        description: 'Econometric study on climate change and geopolitical conflict in Egypt-Sudan-Ethiopia.',
        fullDescription: 'Conducted time series econometric analysis examining the intersection of climate change, water resource management, and geopolitical tensions surrounding the Grand Ethiopian Renaissance Dam. Presented findings at multiple academic conferences.',
        tech: ['R', 'Time Series Analysis', 'Econometrics', 'Geopolitical Modeling'],
        impact: 'Presented at USF academic conferences',
        metrics: {
            label: '3 Countries Analyzed',
            value: '3'
        },
        logo: 'usf-logo.png'
    }
];
