export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Datasets', href: '/datasets/' }
];

export const hero = {
  eyebrow: 'JAIST Chong Lab',
  title: 'A calm static home for the lab, with the original site preserved behind it.',
  description:
    'This site is a lightweight Cloudflare-ready front door. It summarizes the lab, surfaces key research, and sends readers to the original JAIST pages for the full legacy content.',
  primaryCta: { label: 'Explore Research', href: '/research/' },
  secondaryCta: { label: 'Open Original Site', href: 'https://www.jaist.ac.jp/robot/' }
};

export const highlights = [
  {
    label: 'Static by default',
    value: 'Astro pages generated to plain HTML'
  },
  {
    label: 'Deployment',
    value: 'GitHub to Cloudflare Pages'
  },
  {
    label: 'Content policy',
    value: 'New summaries, original detail links'
  }
];

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
