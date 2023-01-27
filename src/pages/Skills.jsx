import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import Skill from "../components/Skill";
import Pie3D from "../components/Chart/Pie3D";
import {
  SiAngular,
  SiCss3,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiMongodb,
  SiNodeDotJs,
  SiPostgresql,
  SiGit,
  SiPython,
  SiReact,
  SiTensorflow,
  SiVisualstudiocode,
  SiVueDotJs,
} from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";
import _getProfileApi from "../api/_getProfileApi";

const Skills = () => {
  const [repoItems, setRepoItems] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  let data = _getProfileApi[0]?.skills;

  const getData = () => {
    fetch("https://api.github.com/users/khoa25200/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => setRepoItems(data));
  };

  useEffect(() => {
    // Fetch from official api
    getData();
    console.log("this==>", getData());

    // Offline api
    // setRepoItems(items)
  }, []);

  useEffect(() => {
    let languages = repoItems.reduce((total, item) => {
      const { language, stargazers_count } = item;
      if (!language) return total;

      if (!total[language]) {
        total[language] = {
          label: language,
          value: 1,
          stars: stargazers_count,
        };
      } else {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
          stars: total[language].stars + 1,
        };
      }

      return total;
    }, {});

    const mostUsed = Object.values(languages)
      .sort((a, b) => {
        return b.value - a.value;
      })
      .slice(0, 5);
    setDataSource(mostUsed);
  }, [repoItems]);

  const { skills, frameworks } = data;

  const skillsJsx = skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ));

  const frameworksJsx = frameworks.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} secondary />
    </div>
  ));

  const languagesUsedChart = (
    <div className="col-md-6 py-1">
      <Pie3D data={dataSource} />
    </div>
  );

  const SocialIcon = ({ icon }) => {
    return (
      <div
        className="list-inline-item dev-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </div>
    );
  };

  const iconsSet1 = [
    {
      icon: <SiGit />,
    },
    {
      icon: <SiGithub />,
    },
    {
      icon: <SiGitlab />,
    },
  ];

  const iconsSet2 = [
    {
      icon: <SiPython />,
    },
    {
      icon: <SiJavascript />,
    },
  ];

  const iconsSet3 = [
    {
      icon: <SiTensorflow />,
    },
    {
      icon: <SiKeras />,
    }
  ];

  const iconsSet4 = [
    {
      icon: <SiHtml5 />,
    },
    {
      icon: <SiCss3 />,
    },
    {
      icon: <SiReact />,
    },
    {
      icon: <SiAngular />,
    }
  ];

  const iconsSet5 = [
    {
      icon: <SiNodeDotJs />,
    },
    {
      icon: <SiMongodb />,
    },
    {
      icon: <SiPostgresql />,
    }

  ];

  const iconsSet6 = [
    {
      icon: <SiVisualstudiocode />,
    },
    {
      icon: <SiJupyter />,
    },
    {
      icon: <SiIntellijidea />,
    }
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>
      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="row mb-4">{frameworksJsx}</div>
      <div className="subheading mb-3">Languages used as per Github</div>
      <div className="row mb-4">{languagesUsedChart}</div>
      <div className="subheading mb-3">
        Programming Languages, Tools & Technologies
      </div>
      <div>
        {iconsSet1.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet2.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet3.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet4.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet5.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet6.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
