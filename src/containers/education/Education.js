import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import emoji from "react-easy-emoji";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="workExperience">
        <h1 className="education-heading"><span>{emoji('👨‍💼 ')}</span>Work Experience</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
