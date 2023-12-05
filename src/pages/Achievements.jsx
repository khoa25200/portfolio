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
              <a onClick={() => window.open(LR)}>TOEIC Reading & Listening 👉 545/990</a>
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
          <br />
          <br />
          <li> 
            <h4>Hacker Rank Certification:</h4>
            <div className="pointer">
              <span className="fa-li p-2">
                <i className="fas fa-trophy text-warning">
                  <BsTrophy />
                </i>
              </span>
              <a onClick={() => window.open("https://www.hackerrank.com/certificates/4d19bdef9edf")}>JavaScript (Intermediate) Certificate</a>
            </div>
            <div className="pointer">
              <span className="fa-li p-2">
                <i className="fas fa-trophy text-warning">
                  <BsTrophy />
                </i>
              </span>
              <a onClick={() => window.open("https://www.hackerrank.com/certificates/2aa09968e62c")}>JavaScript (Basic) Certificate</a>
            </div>
            <div className="pointer">
              <span className="fa-li p-2">
                <i className="fas fa-trophy text-warning">
                  <BsTrophy />
                </i>
              </span>
              <a onClick={() => window.open("https://www.hackerrank.com/certificates/92063b378d7b")}>Node (Basic) Certificate</a>
            </div>
            <div className="pointer">
              <span className="fa-li p-2">
                <i className="fas fa-trophy text-warning">
                  <BsTrophy />
                </i>
              </span>
              <a onClick={() => window.open("https://www.hackerrank.com/certificates/742903a96f27")}>Software Engineer Certificate</a>
            </div>
          </li>
        </ul>
      </Section>
    </React.Fragment>
  );
}
