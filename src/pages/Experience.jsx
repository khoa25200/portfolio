/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Section from "../components/Section";
import _getProfileApi from "../api/_getProfileApi";

export default function Experience() {
  const experiences = _getProfileApi[0]?.experiences;
  return (
    <Section id="experience" title="Experience">
      {experiences.map((value) => {
        return (
          <div key={value?._id} className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{value?.roleName}</h3>
              <a className="mb-0 font-weight-bold text-light urlCompany" target="_blank" href={value?.companyUrl}><p className="">{value?.companyName}</p></a>
              <div className="skills mb-3">
                {value?.skills}
              </div>
              <p>
                <strong>Roles/Responsibilities</strong>
                <br />
                {
                  value?.responsibilities?.map(re => <li>{re}</li>)
                }
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{value.times}</span>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
