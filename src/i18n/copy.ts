import type { Locale } from '../lib/i18n';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  zh: '中文'
};

export const localeSwitchLabels: Record<Locale, string> = {
  en: 'EN',
  ja: 'JA',
  zh: 'ZH'
};

export const copy = {
  en: {
    header: {
      brand: 'Chong Lab',
      subtitle: 'Intelligent Robotic Laboratory of JAIST',
      skipLink: 'Skip to content',
      menu: 'Menu',
      themeLabel: 'Theme',
      themeAuto: 'Auto',
      themeLight: 'Light',
      themeDark: 'Dark',
      languageLabel: 'Language'
    },
    ui: {
      themeCardLabel: 'Theme',
      requiresAccount: 'Requires JAIST account',
      scrollToNext: 'Scroll to the next section',
      datasetGroup: 'Dataset group'
    },
    nav: {
      home: 'Home',
      research: 'Research',
      people: 'People',
      datasets: 'Datasets'
    },
    footer: {
      brand: 'Chong Lab',
      subtitle: 'Robotics Laboratory, JAIST',
      address: '1-1 Asahidai, Nomi, Ishikawa 923-1292, Japan',
      email: 'robot@ml.jaist.ac.jp',
      quickLinks: 'Quick Links:',
      original: 'Original JAIST Site ↗',
      research: 'Research →',
      datasets: 'Datasets →',
      github: 'GitHub ↗',
      copyright: '© 2026 Chong Lab, JAIST. All Rights Reserved.'
    },
    home: {
      metaTitle: 'Chong Lab | Intelligent Robotic Laboratory of JAIST',
      metaDescription: 'JAIST Chong Lab static front door and research index.',
      hero: {
        eyebrow: 'JAIST · School of Information Science',
        title: 'Intelligent Robotic Laboratory',
        description:
          'Research in HRI, medical robotics, swarm systems, and autonomous manipulation. Directed by Prof. Nak Young Chong.',
        primaryCta: 'View Research',
        secondaryCta: 'Open Original Site'
      },
      researchSection: {
        eyebrow: 'Research Areas',
        title: 'Find more research areas here',
        summary: 'Research summaries that point either to the internal index or the original JAIST pages.'
      },
      researchAreas: [
        {
          title: 'Human-Robot Interaction',
          description: 'Interactive systems, assistive robotics, and perception-driven safe manipulation.',
          action: 'Explore →'
        },
        {
          title: 'Robotic Autonomy',
          description: 'Planning, incremental learning, UAVs, and field-ready sensing pipelines.',
          action: 'Explore →'
        },
        {
          title: 'Distributed Systems',
          description: 'Swarm behavior, coordinated navigation, and networked robot platforms.',
          action: 'Explore →'
        }
      ],
      serviceSection: {
        eyebrow: 'Lab Services',
        title: 'Quick access for members and visitors',
        summary: 'Links to the original JAIST site stay external, while public static pages stay local.'
      },
      serviceTiles: [
        { label: 'Original JAIST Site', description: 'Full lab site and legacy content.', action: 'Open →', locked: false },
        { label: 'Research Projects', description: 'Detailed project pages hosted by JAIST.', action: 'Open →', locked: false },
        { label: 'Restricted Access', description: 'JAIST login required for member-only material.', action: 'Open →', locked: true },
        { label: 'Datasets', description: 'Public dataset index on the static site.', action: 'Open →', locked: false },
        { label: 'GitHub', description: 'Source repository and automation.', action: 'Open →', locked: false },
        { label: 'Contact', description: 'robot@ml.jaist.ac.jp', action: 'Open →', locked: false }
      ],
      introductionSection: {
        eyebrow: 'Introduction',
        title: 'Director introduction',
        summary:
          'The JAIST Robotics Laboratory, directed by Prof. Nak Young Chong, is affiliated with the School of Information Science at JAIST. The lab is devoted to the research and development of intelligent robotic systems through knowledge networking and interactive communication.',
        directorLabel: 'Director',
        profileLabel: 'Full Profile on JAIST →'
      },
      directorName: 'Nak Young Chong, Ph.D.',
      directorProfile: 'Professor, School of Information Science, JAIST',
      directorAddress: '1-1 Asahidai, Nomi, Ishikawa 923-1292, Japan',
      directorOffice: 'Office I-61, 6F IS Building 1',
      serviceHistorySection: {
        eyebrow: 'Professional Service',
        title: 'Academic service and visiting appointments',
        summary: 'A condensed record of the service history from the original lab introduction.',
        cta: 'View full academic record →'
      },
      serviceHistory: [
        'Visiting Scholar, Robotics Institute, Carnegie Mellon University, U.S.A., 2015-2018',
        'International Scholar, Kyung Hee University, Korea, 2013-2014',
        'Associate Graduate Faculty, University of Nevada, U.S.A., 2011-2016',
        'Visiting Scholar, University of Genoa, Italy, 2010',
        'Visiting Scholar, Georgia Institute of Technology, U.S.A., 2008-2009',
        'Adjunct Senior Researcher, National Institute of Advanced Industrial Science and Technology, Tsukuba, Japan, 2003-2007',
        'Visiting Scholar, Northwestern University, U.S.A., 2001-2002'
      ]
    },
    research: {
      metaTitle: 'Research | Chong Lab',
      metaDescription: 'Research themes and original detail links for Chong Lab.',
      intro: {
        eyebrow: 'Research',
        title: 'Research presented as categories, not a dropdown maze',
        summary: 'This page brings forward the major lab themes while preserving links to the original detailed project pages.'
      },
      themes: {
        eyebrow: 'Themes',
        title: 'Research areas',
        cta: 'See all research projects on the JAIST site →'
      },
      featuredResearch: [
        {
          title: 'Safe AI-Powered Visual Grasping',
          category: 'Human-Robot Interaction',
          summary: 'A grasping system that balances perception, safety, and attack resilience.',
          action: 'Open original page →'
        },
        {
          title: 'Robot-Assisted Ultrasound Scan System',
          category: 'Medical Robotics',
          summary: 'Robotic scanning and medical image collection for accessible inspection.',
          action: 'Open original page →'
        },
        {
          title: 'Nonprehensile Manipulation',
          category: 'Manipulation',
          summary: 'Center-of-mass estimation and planar pushing for novel object handling.',
          action: 'Open original page →'
        },
        {
          title: 'Swarm Robotics',
          category: 'Collective Robotics',
          summary: 'Local interaction rules for scalable self-organization and navigation.',
          action: 'Open original page →'
        }
      ],
      themesList: [
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
      ]
    },
    about: {
      metaTitle: 'About | Chong Lab',
      metaDescription: 'Introduction to Chong Lab at JAIST.',
      intro: {
        eyebrow: 'Introduction',
        title: 'JAIST Robotics Laboratory',
        summary: 'The JAIST Robotics Laboratory, directed by Prof. Nak Young Chong, is affiliated with the School of Information Science at JAIST. The lab is devoted to the research and development of intelligent robotic systems through knowledge networking and interactive communication.'
      },
      director: {
        label: 'Director',
        profileLabel: 'Full Profile on JAIST →'
      },
      serviceHistory: [
        'Visiting Scholar, Robotics Institute, Carnegie Mellon University, U.S.A., 2015-2018',
        'International Scholar, Kyung Hee University, Korea, 2013-2014',
        'Associate Graduate Faculty, University of Nevada, U.S.A., 2011-2016',
        'Visiting Scholar, University of Genoa, Italy, 2010',
        'Visiting Scholar, Georgia Institute of Technology, U.S.A., 2008-2009',
        'Adjunct Senior Researcher, National Institute of Advanced Industrial Science and Technology, Tsukuba, Japan, 2003-2007',
        'Visiting Scholar, Northwestern University, U.S.A., 2001-2002'
      ]
    },
    people: {
      metaTitle: 'People | Chong Lab',
      metaDescription: 'Chong Lab director and teaching assistants.',
      intro: {
        eyebrow: 'People',
        title: 'Director and teaching assistants only',
        summary: 'This static site intentionally limits people content to the director and teaching assistants.'
      },
      director: {
        label: 'Director',
        profileLabel: 'Full Profile on JAIST →'
      },
      assistantsHeading: 'Current assistants',
      assistants: [
        { role: 'Teaching Assistant', note: 'Supports lab operation and coursework coordination.' },
        { role: 'Teaching Assistant', note: 'Supports experiments, scheduling, and member services.' }
      ],
      cta: 'For full member list, visit the JAIST lab page →'
    },
    datasets: {
      metaTitle: 'Datasets | Chong Lab',
      metaDescription: 'Open dataset index for Chong Lab.',
      intro: {
        eyebrow: 'Datasets',
        title: 'Open datasets preserved as links, not duplicated payloads',
        summary: 'This keeps the static site small while still surfacing the lab\'s downloadable assets.'
      },
      groups: [
        { title: 'comb1', description: 'Dataset family used for combinational object experiments.', action: 'Download / View on JAIST →' },
        { title: 'comb2', description: 'Second combinational object dataset set.', action: 'Download / View on JAIST →' },
        { title: 'ellip', description: 'Elliptical object dataset family.', action: 'Download / View on JAIST →' },
        { title: 'plg3', description: 'Polygonal object dataset family.', action: 'Download / View on JAIST →' }
      ]
    }
  },
  ja: {
    header: {
      brand: 'チョン研究室',
      subtitle: 'JAIST 知能ロボット研究室',
      skipLink: 'コンテンツへスキップ',
      menu: 'メニュー',
      themeLabel: 'テーマ',
      themeAuto: '自動',
      themeLight: 'ライト',
      themeDark: 'ダーク',
      languageLabel: '言語'
    },
    ui: {
      themeCardLabel: 'テーマ',
      requiresAccount: 'JAIST アカウントが必要です',
      scrollToNext: '次のセクションへスクロール',
      datasetGroup: 'データセット群'
    },
    nav: {
      home: 'ホーム',
      research: '研究',
      people: 'メンバー',
      datasets: 'データセット'
    },
    footer: {
      brand: 'チョン研究室',
      subtitle: 'JAIST ロボティクス研究室',
      address: '〒923-1292 石川県能美市旭台1-1',
      email: 'robot@ml.jaist.ac.jp',
      quickLinks: 'クイックリンク',
      original: 'JAIST 公式サイト ↗',
      research: '研究 →',
      datasets: 'データセット →',
      github: 'GitHub ↗',
      copyright: '© 2026 Chong Lab, JAIST. All Rights Reserved.'
    },
    home: {
      metaTitle: 'チョン研究室 | JAIST 知能ロボット研究室',
      metaDescription: 'JAIST チョン研究室の静的フロントページと研究案内。',
      hero: {
        eyebrow: 'JAIST · 情報科学系',
        title: '知能ロボット研究室',
        description: 'HRI、医療ロボティクス、群ロボティクス、自律マニピュレーションを研究しています。研究代表は Chong 教授です。',
        primaryCta: '研究を見る',
        secondaryCta: '公式サイトを開く'
      },
      researchSection: {
        eyebrow: '研究分野',
        title: '研究分野をもっと見る',
        summary: '研究概要は学内ページ、または JAIST 公式ページへリンクします。'
      },
      researchAreas: [
        { title: '人間・ロボット相互作用', description: '対話システム、支援ロボティクス、安全な知覚駆動操作。', action: '詳細を見る →' },
        { title: 'ロボット自律化', description: '計画、インクリメンタル学習、UAV、現場向けセンシング。', action: '詳細を見る →' },
        { title: '分散システム', description: '群行動、協調航法、ネットワーク型ロボット基盤。', action: '詳細を見る →' }
      ],
      serviceSection: {
        eyebrow: '研究室サービス',
        title: 'メンバーと来訪者のためのクイックアクセス',
        summary: '公式 JAIST サイトへのリンクは外部、公開静的ページはこのサイトで提供します。'
      },
      serviceTiles: [
        { label: 'JAIST 公式サイト', description: '研究室全体の公式ページ。', action: '開く →', locked: false },
        { label: '研究プロジェクト', description: 'JAIST にある詳細プロジェクトページ。', action: '開く →', locked: false },
        { label: '制限付きアクセス', description: 'JAIST アカウントが必要です。', action: '開く →', locked: true },
        { label: 'データセット', description: '公開データセット一覧。', action: '開く →', locked: false },
        { label: 'GitHub', description: 'ソースコードと自動化。', action: '開く →', locked: false },
        { label: 'お問い合わせ', description: 'robot@ml.jaist.ac.jp', action: '開く →', locked: false }
      ],
      introductionSection: {
        eyebrow: '紹介',
        title: '研究代表者の紹介',
        summary: 'JAIST 知能ロボティクス研究室は、Chong 教授が率い、知識ネットワークと対話的コミュニケーションを通じて知能ロボットシステムの研究開発を進めています。',
        directorLabel: '研究代表',
        profileLabel: 'JAIST の詳細プロフィール →'
      },
      directorName: 'Nak Young Chong, Ph.D.',
      directorProfile: '情報科学系 教授, JAIST',
      directorAddress: '〒923-1292 石川県能美市旭台1-1',
      directorOffice: '研究室 6F IS Building 1, I-61',
      serviceHistorySection: {
        eyebrow: '学会・役職',
        title: '学術サービスと客員歴',
        summary: '元サイトの研究者紹介から要約した経歴です。',
        cta: '学術経歴をすべて見る →'
      },
      serviceHistory: [
        'カーネギーメロン大学 Robotics Institute 客員研究員, 2015-2018',
        '慶熙大学 国際客員研究員, 2013-2014',
        'ネバダ大学 大学院客員教員, 2011-2016',
        'ジェノヴァ大学 客員研究員, 2010',
        'ジョージア工科大学 客員研究員, 2008-2009',
        '産業技術総合研究所 招聘上級研究員, 2003-2007',
        'ノースウェスタン大学 客員研究員, 2001-2002'
      ]
    },
    research: {
      metaTitle: '研究 | チョン研究室',
      metaDescription: 'チョン研究室の研究テーマと詳細リンク。',
      intro: {
        eyebrow: '研究',
        title: 'ドロップダウンではなく分類で研究を紹介',
        summary: '主要テーマを前面に出しつつ、詳細は JAIST の元ページへつなぎます。'
      },
      themes: {
        eyebrow: 'テーマ',
        title: '研究分野',
        cta: 'JAIST サイトですべての研究を見る →'
      },
      featuredResearch: [
        { title: '安全な AI ビジュアル把持', category: '人間・ロボット相互作用', summary: '知覚、安全性、攻撃耐性を両立する把持システム。', action: '元ページを開く →' },
        { title: 'ロボット支援超音波スキャン', category: '医療ロボティクス', summary: '安全で扱いやすい医療画像取得のためのロボット走査。', action: '元ページを開く →' },
        { title: '非把持マニピュレーション', category: 'マニピュレーション', summary: '重心推定と平面押しによる新しい物体操作。', action: '元ページを開く →' },
        { title: '群ロボティクス', category: '協調ロボティクス', summary: '局所的相互作用から生まれる自己組織化とナビゲーション。', action: '元ページを開く →' }
      ],
      themesList: [
        { title: '人間・ロボット相互作用', items: ['安全な AI ビジュアル把持', 'ロボット支援超音波スキャン', 'JARoW 福祉ロボット'] },
        { title: 'ロボット自律化', items: ['UAV 表面検査', 'インクリメンタル学習', '統合探索'] },
        { title: '分散システム', items: ['群ロボティクス', 'RFID アドホックネットワーク', '光学式水中マッピング'] }
      ]
    },
    about: {
      metaTitle: '研究室紹介 | チョン研究室',
      metaDescription: 'JAIST チョン研究室の紹介。',
      intro: { eyebrow: '紹介', title: 'JAIST ロボティクス研究室', summary: 'JAIST チョン研究室は、知識ネットワークと対話的コミュニケーションを通じて知能ロボットシステムの研究開発を進めています。' },
      director: { label: '研究代表', profileLabel: 'JAIST の詳細プロフィール →' },
      serviceHistory: [
        'カーネギーメロン大学 Robotics Institute 客員研究員, 2015-2018',
        '慶熙大学 国際客員研究員, 2013-2014',
        'ネバダ大学 大学院客員教員, 2011-2016',
        'ジェノヴァ大学 客員研究員, 2010',
        'ジョージア工科大学 客員研究員, 2008-2009',
        '産業技術総合研究所 招聘上級研究員, 2003-2007',
        'ノースウェスタン大学 客員研究員, 2001-2002'
      ]
    },
    people: {
      metaTitle: 'メンバー | チョン研究室',
      metaDescription: 'チョン研究室の研究代表とティーチングアシスタント。',
      intro: { eyebrow: 'メンバー', title: '研究代表と TA のみを掲載', summary: 'この静的サイトでは研究代表とティーチングアシスタントのみを紹介します。' },
      director: { label: '研究代表', profileLabel: 'JAIST の詳細プロフィール →' },
      assistantsHeading: '現在の TA',
      assistants: [
        { role: 'ティーチングアシスタント', note: '研究室運営と授業支援を担当。' },
        { role: 'ティーチングアシスタント', note: '実験、日程調整、メンバー支援を担当。' }
      ],
      cta: '全メンバー一覧は JAIST の研究室ページへ →'
    },
    datasets: {
      metaTitle: 'データセット | チョン研究室',
      metaDescription: 'チョン研究室の公開データセット一覧。',
      intro: { eyebrow: 'データセット', title: 'データは複製せず、リンクで提供', summary: '静的サイトを軽く保ちつつ、ダウンロード資産へ案内します。' },
      groups: [
        { title: 'comb1', description: '組み合わせ物体実験向けデータセット群。', action: 'JAIST で見る / ダウンロード →' },
        { title: 'comb2', description: '第 2 の組み合わせ物体データセット群。', action: 'JAIST で見る / ダウンロード →' },
        { title: 'ellip', description: '楕円体データセット群。', action: 'JAIST で見る / ダウンロード →' },
        { title: 'plg3', description: '多角形データセット群。', action: 'JAIST で見る / ダウンロード →' }
      ]
    }
  },
  zh: {
    header: {
      brand: '冲研究室',
      subtitle: 'JAIST 智能机器人实验室',
      skipLink: '跳到内容',
      menu: '菜单',
      themeLabel: '主题',
      themeAuto: '自动',
      themeLight: '浅色',
      themeDark: '深色',
      languageLabel: '语言'
    },
    ui: {
      themeCardLabel: '主题',
      requiresAccount: '需要 JAIST 账号',
      scrollToNext: '滚动到下一节',
      datasetGroup: '数据集组'
    },
    nav: {
      home: '首页',
      research: '研究',
      people: '成员',
      datasets: '数据集'
    },
    footer: {
      brand: '冲研究室',
      subtitle: 'JAIST 机器人实验室',
      address: '日本石川县能美市旭台 1-1，923-1292',
      email: 'robot@ml.jaist.ac.jp',
      quickLinks: '快速链接',
      original: 'JAIST 官方站点 ↗',
      research: '研究 →',
      datasets: '数据集 →',
      github: 'GitHub ↗',
      copyright: '© 2026 Chong Lab, JAIST. All Rights Reserved.'
    },
    home: {
      metaTitle: '冲研究室 | JAIST 智能机器人实验室',
      metaDescription: 'JAIST 冲研究室静态首页与研究索引。',
      hero: {
        eyebrow: 'JAIST · 信息科学系',
        title: '智能机器人实验室',
        description: '研究方向涵盖人机交互、医疗机器人、群体系统与自主操作。由 Chong 教授领导。',
        primaryCta: '查看研究',
        secondaryCta: '打开官方站点'
      },
      researchSection: {
        eyebrow: '研究方向',
        title: '了解更多研究方向',
        summary: '研究简介会链接到内部索引或 JAIST 官方页面。'
      },
      researchAreas: [
        { title: '人机交互', description: '交互系统、辅助机器人、感知驱动的安全操作。', action: '查看详情 →' },
        { title: '机器人自主性', description: '规划、增量学习、无人机和现场感知管线。', action: '查看详情 →' },
        { title: '分布式系统', description: '群体行为、协同导航和网络机器人平台。', action: '查看详情 →' }
      ],
      serviceSection: {
        eyebrow: '实验室服务',
        title: '成员和访客的快速入口',
        summary: '指向 JAIST 官方站点的链接保持外部打开，静态公开页面保留在本站。'
      },
      serviceTiles: [
        { label: 'JAIST 官方站点', description: '完整实验室站点与历史内容。', action: '打开 →', locked: false },
        { label: '研究项目', description: 'JAIST 承载的详细项目页面。', action: '打开 →', locked: false },
        { label: '受限访问', description: '需要 JAIST 账号。', action: '打开 →', locked: true },
        { label: '数据集', description: '本站公开数据集索引。', action: '打开 →', locked: false },
        { label: 'GitHub', description: '源码仓库与自动化。', action: '打开 →', locked: false },
        { label: '联系', description: 'robot@ml.jaist.ac.jp', action: '打开 →', locked: false }
      ],
      introductionSection: {
        eyebrow: '介绍',
        title: '研究负责人介绍',
        summary: 'JAIST 机器人实验室由 Chong 教授领导，致力于通过知识网络与交互式通信推进智能机器人系统的研究与开发。',
        directorLabel: '研究负责人',
        profileLabel: '查看 JAIST 个人主页 →'
      },
      serviceHistorySection: {
        eyebrow: '学术服务',
        title: '学术服务与访问经历',
        summary: '整理自原实验室介绍页面的简要履历。',
        cta: '查看完整学术记录 →'
      },
      serviceHistory: [
        '美国卡内基梅隆大学 Robotics Institute 访问学者，2015-2018',
        '韩国庆熙大学 国际学者，2013-2014',
        '美国内华达大学 研究生院联合教员，2011-2016',
        '意大利热那亚大学 访问学者，2010',
        '美国佐治亚理工学院 访问学者，2008-2009',
        '日本产业技术综合研究所 客座高级研究员，2003-2007',
        '美国西北大学 访问学者，2001-2002'
      ]
    },
    research: {
      metaTitle: '研究 | 冲研究室',
      metaDescription: '冲研究室的研究主题与原始详情链接。',
      intro: { eyebrow: '研究', title: '以分类而非下拉菜单呈现研究', summary: '突出实验室主要主题，同时保留到 JAIST 原始详情页的链接。' },
      themes: { eyebrow: '主题', title: '研究领域', cta: '在 JAIST 网站查看全部研究项目 →' },
      featuredResearch: [
        { title: '安全的 AI 视觉抓取', category: '人机交互', summary: '兼顾感知、安全与抗攻击性的抓取系统。', action: '打开原始页面 →' },
        { title: '机器人辅助超声扫描系统', category: '医疗机器人', summary: '用于可访问检查的机器人扫描与医学影像采集。', action: '打开原始页面 →' },
        { title: '非抓取式操作', category: '操作', summary: '用于新型物体处理的重心估计和平面推移。', action: '打开原始页面 →' },
        { title: '群体机器人', category: '群体机器人', summary: '通过局部交互实现可扩展的自组织与导航。', action: '打开原始页面 →' }
      ],
      themesList: [
        { title: '人机交互', items: ['安全的 AI 视觉抓取', '机器人辅助超声扫描系统', 'JARoW 福利机器人'] },
        { title: '机器人自主性', items: ['无人机表面巡检', '增量学习', '综合探索'] },
        { title: '分布式系统', items: ['群体机器人', 'RFID 自组网', '光学水下测绘'] }
      ]
    },
    about: {
      metaTitle: '关于 | 冲研究室',
      metaDescription: 'JAIST 冲研究室介绍。',
      intro: { eyebrow: '介绍', title: 'JAIST 机器人实验室', summary: 'JAIST 机器人实验室由 Chong 教授领导，致力于通过知识网络与交互式通信推进智能机器人系统的研究与开发。' },
      director: { label: '研究负责人', profileLabel: '查看 JAIST 个人主页 →' },
      serviceHistory: [
        '美国卡内基梅隆大学 Robotics Institute 访问学者，2015-2018',
        '韩国庆熙大学 国际学者，2013-2014',
        '美国内华达大学 研究生院联合教员，2011-2016',
        '意大利热那亚大学 访问学者，2010',
        '美国佐治亚理工学院 访问学者，2008-2009',
        '日本产业技术综合研究所 客座高级研究员，2003-2007',
        '美国西北大学 访问学者，2001-2002'
      ]
    },
    people: {
      metaTitle: '成员 | 冲研究室',
      metaDescription: '冲研究室的研究负责人和助教。',
      intro: { eyebrow: '成员', title: '仅展示研究负责人和助教', summary: '本站静态页面只展示研究负责人和教学助理。' },
      director: { label: '研究负责人', profileLabel: '查看 JAIST 个人主页 →' },
      assistantsHeading: '当前助教',
      assistants: [
        { role: '教学助理', note: '负责实验室运营与课程协调。' },
        { role: '教学助理', note: '负责实验、日程安排和成员支持。' }
      ],
      cta: '完整成员列表请访问 JAIST 实验室页面 →'
    },
    datasets: {
      metaTitle: '数据集 | 冲研究室',
      metaDescription: '冲研究室公开数据集索引。',
      intro: { eyebrow: '数据集', title: '以链接而非复制方式提供数据', summary: '在保持静态站点轻量的同时，仍然提供下载资源入口。' },
      groups: [
        { title: 'comb1', description: '用于组合物体实验的数据集系列。', action: '在 JAIST 查看 / 下载 →' },
        { title: 'comb2', description: '第二组组合物体数据集。', action: '在 JAIST 查看 / 下载 →' },
        { title: 'ellip', description: '椭球体数据集系列。', action: '在 JAIST 查看 / 下载 →' },
        { title: 'plg3', description: '多边形数据集系列。', action: '在 JAIST 查看 / 下载 →' }
      ]
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return copy[locale] ?? copy.en;
}
