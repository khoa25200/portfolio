import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
// eslint-disable-next-line import/no-anonymous-default-export
const _getProfileApi = [
  {
    socialIcons: [
      {
        href: "https://www.linkedin.com/in/khoa2520/",
        icon: <FaLinkedinIn />,
      },
      {
        href: "https://github.com/khoa25200",
        icon: <FaGithub />,
      },
      {
        href: "https://www.facebook.com/profile.php?id=100007340288042",
        icon: <FaFacebookF />,
      }
    ],
    educations: [
      {
        name: 'VNU HCM - UNIVERSITY OF ECONOMICS AND LAWS',
        major: 'MANAGEMENT INFORMATION SYSTEMS',
        subjectsRelated: 'Data Structures, Algorithms, OOPs, DBMS, Web Development, Big Data',
        GPA: 3.05,
        addditionInfor: [],
        times: 'July 2019 - Present'
      }
    ],
    experiences: [
      {
        _id: '1',
        roleName: 'Software Engineer - Intern (Frontend, ReactJS)',
        companyName: 'Kyanon Digital - Digital Transformation & Agile Engineering',
        companyUrl: 'https://kyanon.digital/',
        skills: 'ReactJS, NextJS, JavaScript, Typescript, Redux, SCSS, Chakra - UI, Git',
        responsibilities: [
          'Responsible to handle the Frontend: responsive, UI, ...',
          'Implement new features/fix bug to the web',
          'Maintenance of existing projects launched',
          'Implement many alternative solution for a problem.'
        ],
        times: 'Oct 2022 - Feb 2023'
      },
      {
        _id: '2',
        roleName: 'Web Designer - FullTime (Wordpress)',
        companyName: 'BMS Global - Agency Company',
        companyUrl: 'https://bmsglobal.vn/',
        skills: 'HTML, CSS, JavaScript, PHP, MySQL, Wordpress',
        responsibilities: [
          'Build website for small and medium business',
          'Implement new features to the ecommerce website using WORDPRESS',
          'Design layout and animation for website',
          'Optimize website in terms of interface (mobile & tablet) and page load speed (90+ google page speed).',
          'Custom new website on the existing template'
        ],
        times: 'Jun 2022 - Sep 2022'
      },
      {
        _id: '3',
        roleName: 'Designer - PartTime',
        companyUrl: '',
        companyName: 'Az-Media Designer - PartTime',
        skills: 'Photoshop, AI, Adobe XD, Figma',
        responsibilities: [
          'Design banners, publications, and images for posts on the fan page.',
          'Building brand identities: logos, employee cards, clothes, etc. for corporate customers'
        ],
        times: 'Feb 2022 - Jun 2022'
      }
    ],
    skills: {
      skills: [
        {
          title: "Javascript",
          progress: "90%",
        },
        {
          title: "Typescript",
          progress: "70%",
        },
        {
          title: "NodeJS",
          progress: "60%",
        },
        {
          title: "HTML, CSS",
          progress: "95%",
        },
        {
          title: "Python",
          progress: "45%",
        },
      ],
      frameworks: [
        {
          title: "ReactJS",
          progress: "90%",
        },
        {
          title: "Angular",
          progress: "65%",
        },
        {
          title: "Photoshop / Figma / UI / UX",
          progress: "60%",
        },
        {
          title: "Bootstrap",
          progress: "70%",
        },
        {
          title: "Material-UI",
          progress: "80%",
        },
      ],
    }

  }
]
export default _getProfileApi
