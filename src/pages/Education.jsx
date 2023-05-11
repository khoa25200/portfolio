import React from "react";
import Section from "../components/Section";
import _getProfileApi from "../api/_getProfileApi";

export default function Education() {
  const educations = _getProfileApi[0]?.educations;
  console.log("kkhoa==>", educations);
  return (
    <Section id="education" title="Education">
      {educations.map((value) => {
        return (
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{value.name}</h3>
              <div className="subheading mb-3">{value.major}</div>
              <div>{value.subjectsRelated}</div>
              <p>GPA: {value.GPA}</p>
              {value?.addditionInfor && (
                <ul>
                  {value?.addditionInfor.map((inf) => {
                    return <li>{inf}</li>;
                  })}
                </ul>
              )}
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
