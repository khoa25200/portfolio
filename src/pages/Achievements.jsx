import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          {/* <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1AffY67ZamCGlrocrvHkmAT9NEYu3GNHd/view?usp=sharing">
              Google Hash Code 2021
            </a>
          </div> */}
        </ul>
      </Section>
    </React.Fragment>
  );
}
