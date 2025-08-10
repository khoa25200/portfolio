import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
// eslint-disable-next-line import/no-anonymous-default-export
const _getProfileApi = [
  {
    socialIcons: [
      // {
      //   href: "https://www.linkedin.com/in/khoa2520/",
      //   icon: <FaLinkedinIn />,
      // },
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
      },
      {
        name: 'MISA JSC',
        major: 'WEB DEV FULL-STACK',
        subjectsRelated: 'HTML, CSS, Javascript, C#, ASP.NET, API',
        GPA: 4,
        addditionInfor: ['Credential ID 0xce5E8ADC8Cb1Cca9FBe1E5c0f970B5edF07a9996'],
        times: '2022'
      },
      {
        name: 'UniGap',
        major: 'Backend Developer',
        subjectsRelated: 'Java, Spring',
        GPA: 4,
        addditionInfor: [],
        times: '2023-5/2020'
      }
    ],
    experiences: [
      {
        _id: '0',
        roleName: 'Front-end Developer (Angular)',
        companyName: 'SaiGon Technology',
        companyUrl: '',
        skills: 'Angular, Primeng, Material UI',
        responsibilities: [
          'Worked with clients to clarify requirements.',
          'Built reusable, high-performance UI components (React, Angular).',
          'Wrote clean, maintainable code following modern principles.',
          'Collaborated with the engineering team on feature integration.',
          'Utilized open-source tools and external technologies when needed.',
          'Provided technical guidance and support to colleagues.',
        ],
        times: 'Feb 2025 - Now'
      },
      {
        _id: '1',
        roleName: 'Front-end Developer',
        companyName: 'Doctogo',
        companyUrl: '',
        skills: 'Angular, Ionic, React, Javascript, Socket',
        responsibilities: [
          'Developed a web system connecting patients and doctors, supporting appointment scheduling and prescription management.',
          'Integrated RESTful APIs and WebSocket for real-time features.',
          'Used Angular to deliver modern and optimized user interfaces.'
        ],
        times: 'Dec 2023 - Feb 2025'
      },
      {
        _id: '2',
        roleName: 'Backend Developer (nodejs)',
        companyName: 'Finviet',
        companyUrl: '',
        skills: 'Javascript, NodeJS, NestJS, Redis, Message Queue, MongoDB, Angular',
        responsibilities: [
          'This involves ensuring seamless communication withfront - end systems',
          'integrating diverse partners like Viettel Post, Titkul tuition',
          'VinaID tuition, and overseeing functionalities such as VPBank account registration'
        ],
        times: 'Aug 2023 - Dec 2023'
      },
      {
        _id: '3',
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
        _id: '4',
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
        _id: '5',
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
