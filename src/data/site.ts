import peopleData from '../../data/people.json';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Datasets', href: '/datasets/' }
];

export const hero = {
  eyebrow: 'JAIST · School of Information Science',
  title: 'Intelligent Robotic Laboratory',
  description:
    'Research in HRI, medical robotics, swarm systems, and autonomous manipulation. Directed by Prof. Nak Young Chong.',
  primaryCta: { label: 'View Research', href: '/research/' },
  secondaryCta: { label: 'Open Original Site', href: 'https://www.jaist.ac.jp/robot/' }
};

export const researchAreas = [
  {
    title: 'Human-Robot Interaction',
    description: 'Interactive systems, assistive robotics, and perception-driven safe manipulation.',
    href: '/research/'
  },
  {
    title: 'Robotic Autonomy',
    description: 'Planning, incremental learning, UAVs, and field-ready sensing pipelines.',
    href: '/research/'
  },
  {
    title: 'Distributed Systems',
    description: 'Swarm behavior, coordinated navigation, and networked robot platforms.',
    href: 'https://www.jaist.ac.jp/robot/'
  }
];

export const serviceTiles = [
  {
    label: 'Original JAIST Site',
    description: 'Full lab site and legacy content.',
    href: 'https://www.jaist.ac.jp/robot/',
    external: true,
    locked: false,
    icon: 'globe'
  },
  {
    label: 'Research Projects',
    description: 'Detailed project pages hosted by JAIST.',
    href: 'https://www.jaist.ac.jp/robot/research/',
    external: true,
    locked: false,
    icon: 'flask'
  },
  {
    label: 'Restricted Access',
    description: 'JAIST login required for member-only material.',
    href: 'https://www.jaist.ac.jp/robot/',
    external: true,
    locked: true,
    icon: 'lock'
  },
  {
    label: 'Datasets',
    description: 'Public dataset index on the static site.',
    href: '/datasets/',
    external: false,
    locked: false,
    icon: 'database'
  },
  {
    label: 'GitHub',
    description: 'Source repository and automation.',
    href: 'https://github.com/',
    external: true,
    locked: false,
    icon: 'brand-github'
  },
  {
    label: 'Contact',
    description: 'robot@ml.jaist.ac.jp',
    href: 'mailto:robot@ml.jaist.ac.jp',
    external: true,
    locked: false,
    icon: 'mail'
  }
];

export const introduction = {
  summary:
    'The JAIST Robotics Laboratory, directed by Prof. Nak Young Chong, is affiliated with the School of Information Science at JAIST. The lab is devoted to the research and development of intelligent robotic systems through knowledge networking and interactive communication.',
  director: {
    name: 'Nak Young Chong, Ph.D.',
    role: 'Professor, School of Information Science, JAIST',
    title: 'Professor, School of Information Science, JAIST',
    contact: '1-1 Asahidai, Nomi, Ishikawa 923-1292, Japan',
    email: 'nakyoung@jaist.ac.jp',
    office: 'Office I-61, 6F IS Building 1',
    phone: '+81-761-51-1248',
    fax: '+81-761-51-1149',
    photo: '/assets/img/prof-chong.jpg',
    jaist_profile_url: 'https://www.jaist.ac.jp/robot/'
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

export const researchThemes = [
  {
    title: 'Human-Robot Interaction',
    items: ['Safe AI-Powered Visual Grasping', 'Robot-Assisted Ultrasound Scan System', 'JARoW welfare robot']
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

export const people = peopleData;

export const datasets = [
  {
    title: 'comb1',
    description: 'Dataset family used for combinational object experiments.',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/comb1',
    links: ['0.zip', '1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  },
  {
    title: 'comb2',
    description: 'Second combinational object dataset set.',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/comb2',
    links: ['0.zip', '1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  },
  {
    title: 'ellip',
    description: 'Elliptical object dataset family.',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/ellip',
    links: ['0.zip', '1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  },
  {
    title: 'plg3',
    description: 'Polygonal object dataset family.',
    baseUrl: 'https://www.jaist.ac.jp/robot/datasets/plg3',
    links: ['1.zip', '2.zip', '3.zip', '4.zip', '5.zip', '6.zip', '7.zip', '8.zip', '9.zip']
  }
];
