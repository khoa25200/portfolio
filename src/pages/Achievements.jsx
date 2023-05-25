/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Section from "../components/Section";
import SW from "../assets/toeic_SW.jpg";
import LR from "../assets/toeic_LR.jpg";

import { BsTrophy } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          <li> 
            <h4>ENGLISH Certification:</h4>
            <div className="pointer">
              <span className="fa-li p-2">
                <i className="fas fa-trophy text-warning">
                  <BsTrophy />
                </i>
              </span>
              <a onClick={() => window.open(LR)}>TOEIC Reading & Listening 👉 560/990</a>
            </div>
            <div className="pointer">
              <span className="fa-li p-2">
                <i className="fas fa-trophy text-warning">
                  <BsTrophy />
                </i>
              </span>
              <a onClick={() => window.open(SW)}>TOEIC Speaking & Writing 👉 260/400</a>
            </div>
          </li>
        </ul>
      </Section>
    </React.Fragment>
  );
}
