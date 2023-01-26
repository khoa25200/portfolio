import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
// eslint-disable-next-line import/no-anonymous-default-export
const _getProfileApi =  [
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
                name: 'VNUHCM-UNIVERSITY OF ECONOMICS ANF LAWS',
                major:'MANAGEMENT INFORMATION SYSTEMS',
                subjectsRelated:'Data Structures, Algorithms, OOPs, OS, DBMS, Web Development, Big Data',
                GPA: 3.05,
                addditionInfor: [],
                times: 'July 2019 - Present'
            }
        ],
        experiences: [
            {   
                _id: 'abc',
                roleName: 'experience',
                skills:'',
                responsibilities: [
                    'Responsible to handle the Frontend as well as Backend.',
                    'Implement new features to the apps.',
                    'Make the app very efficient.',
                    'Implement many alternative solution for a problem.'
                ],
                times: 'June 2021 - Present'
            }
        ],
        skills: {
            skills: [
              {
                title: "C / C++",
                progress: "75%",
              },
              {
                title: "Java",
                progress: "75%",
              },
              {
                title: "Javascript",
                progress: "65%",
              },
              {
                title: "Python",
                progress: "45%",
              },
              {
                title: "HTML",
                progress: "90%",
              },
              {
                title: "CSS",
                progress: "80%",
              },
              {
                title: "Dart",
                progress: "65%",
              },
            ],
            frameworks: [
              {
                title: "React.js",
                progress: "90%",
              },
              {
                title: "Flutter",
                progress: "85%",
              },
              {
                title: ".NET",
                progress: "70%",
              },
              {
                title: "Angular.js",
                progress: "65%",
              },
              {
                title: "Vue.js",
                progress: "60%",
              },
              {
                title: "Redux",
                progress: "80%",
              },
              {
                title: "Framer Motion",
                progress: "40%",
              },
              {
                title: "Photoshop / Figma / UI / UX",
                progress: "60%",
              },
              {
                title: "Django",
                progress: "50%",
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
