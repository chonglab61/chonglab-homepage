export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Research', href: '/research/' },
  { label: 'Datasets', href: '/datasets/' }
];

export const hero = {
  eyebrow: 'Welcome to Chong Lab',
  title: 'Intelligent Robotic Laboratory of JAIST',
  description:
    'This static site presents the lab in a simpler, cleaner format while keeping the original JAIST project pages available for detailed reading.',
  primaryCta: { label: 'Research Areas', href: '/research/' },
  secondaryCta: { label: 'Open Original Site', href: 'https://www.jaist.ac.jp/robot/' }
};

export const highlights = [
  {
    label: 'Robotic Area',
    value: 'Start your research with robots'
  },
  {
    label: 'CV Area',
    value: 'Vision, emotion detection, and Caresses'
  },
  {
    label: 'Lab format',
    value: 'Modern static front door, original detail pages preserved'
  }
];

export const introduction = {
  summary:
    'The JAIST Robotics Laboratory, directed by Prof. Nak Young Chong, is affiliated with the School of Information Science at JAIST. The lab, also known as the Intelligent Mechanical Systems Laboratory, is devoted to the research and development of novel intelligent robotic systems through knowledge networking and interactive communication.',
  director: {
    name: 'NakYoung Chong, Ph.D.',
    role: 'Professor, School of Information Science, Japan Advanced Institute of Science and Technology',
    contact: '1-1 Asahidai, Nomi, Ishikawa 923-1292 Japan',
    email: 'nakyoung@jaist.ac.jp',
    office: 'Office I-61, 6F IS Building 1',
    phone: '+81-761-51-1248',
    fax: '+81-761-51-1149'
  },
  service: [
    'Visiting Scholar, Robotics Institute, Carnegie Mellon University, U.S.A., 2015-2018',
    'International Scholar, Kyung Hee University, Korea, 2013-2014',
    'Associate Graduate Faculty, University of Nevada, U.S.A., 2011-2016',
    'Visiting Scholar, University of Genoa, Italy, 2010',
    'Visiting Scholar, Georgia Institute of Technology, U.S.A., 2008-2009',
    'Adjunct Senior Researcher, National Institute of Advanced Industrial Science and Technology, Tsukuba, Japan, 2003-2007',
    'Visiting Scholar, Northwestern University, U.S.A., 2001-2002'
  ]
};

export const featuredResearch = [
  {
    title: 'Safe AI-Powered Visual Grasping',
    category: 'Human-Robot Interaction',
    summary: 'A grasping system that balances perception, safety, and attack resilience.',
    href: 'https://www.jaist.ac.jp/robot/research/sg4hri/sg4hri.php',
    image: '/images/research/sg4hri.svg'
  },
  {
    title: 'Robot-Assisted Ultrasound Scan System',
    category: 'Medical Robotics',
    summary: 'Robotic scanning and medical image collection for accessible inspection.',
    href: 'https://www.jaist.ac.jp/robot/research/ultrasound/ultrasound.php',
    image: '/images/research/ultrasound.svg'
  },
  {
    title: 'Nonprehensile Manipulation',
    category: 'Manipulation',
    summary: 'Center-of-mass estimation and planar pushing for novel object handling.',
    href: 'https://www.jaist.ac.jp/robot/research/TEPP/TEPP.php',
    image: '/images/research/tepp.svg'
  },
  {
    title: 'Swarm Robotics',
    category: 'Collective Robotics',
    summary: 'Local interaction rules for scalable self-organization and navigation.',
    href: 'https://www.jaist.ac.jp/robot/research/swarmrobot/swarmrobot.php',
    image: '/images/research/swarm.svg'
  }
];

export const researchGroups = [
  {
    title: 'Human-Robot Interaction',
    items: [
      'Safe AI-Powered Visual Grasping',
      'Robot-Assisted Ultrasound Scan System',
      'JARoW welfare robot'
    ]
  },
  {
    title: 'Robotic Autonomy',
    items: ['UAV surface inspection', 'Incremental learning', 'Integrated exploration']
  },
  {
    title: 'Distributed Systems',
    items: ['Swarm robotics', 'RFID ad hoc networks', 'Optical underwater mapping']
  }
];

export const people = {
  staff: [
    {
      name: 'Nak Young Chong',
      role: 'Professor',
      email: 'nakyoung@jaist.ac.jp',
      href: 'https://fp.jaist.ac.jp/public/Default2.aspx?id=352&l=0'
    },
    {
      name: 'GAO Ziyan',
      role: 'Assistant Professor',
      email: 'ziyan-g@jaist.ac.jp',
      href: 'https://scholar.google.com/citations?hl=vi&user=c_62MhUAAAAJ'
    }
  ],
  students: [
    { name: 'KIKUCHI Taku', role: 'Doctoral Student', note: 'Development of a clawler type mobile robot.' },
    { name: 'LI Chenghao', role: 'Doctoral Student', note: 'Interactive and safe grasping in dense clutter.' },
    { name: 'NGUYEN CANH Thanh', role: 'Doctoral Student', note: '3D Active Semantic SLAM for UAVs.' },
    { name: 'ZHANG Haolan', role: 'Doctoral Student', note: 'Adaptive Scene-Aware Dynamic SLAM.' },
    { name: 'HARADA Hisamichi', role: 'Doctoral Student', note: 'Reinforcement learning based robot controller.' },
    { name: 'Pham Ngoc Son', role: 'Master Student', note: 'Enhancing power efficiency.' }
  ]
};

export const datasets = [
  {
    group: 'comb1',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/comb1',
    links: ['0.zip', '1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  },
  {
    group: 'comb2',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/comb2',
    links: ['0.zip', '1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  },
  {
    group: 'ellip',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/ellip',
    links: ['0.zip', '1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  },
  {
    group: 'plg3',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/plg3',
    links: ['1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  }
];
