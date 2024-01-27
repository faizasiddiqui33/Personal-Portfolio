import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="May 2023 - Dec 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            PCL Construction
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Science Student
          </h6>
          <p>• Conducted groundbreaking workforce data analysis using Python and SQL in Azure Databricks. Validated results with PowerBI and Excel, presenting key insights to stakeholders</p>
          <p>• Integrated data from diverse sources into Azure SQL database using MS SQL & Azure Data Studio, implementing data cleaning, transformation with SQL. Utilized Python libraries such as Pandas, NumPy in Jupyter notebook</p>
          <p>• Implemented a variety of ML algorithms with Scikit-learn to enhance recruitment processes for effective future workforce planning. Also, automated data quality checks through unit tests for data validation</p>
          <p>• Organized team-building activities as Data Science Intern Lead, supporting team of interns, and supported agile processes for task execution as a Scrum Leader</p>
          <p>• Dockerized and deployed data-driven Panel app & Dash app on Azure for PCL employees, enabling exclusive access. Established continuous integration on GitHub for seamless maintenance of the apps</p>
          <p>• Created a Streamlit front-end interface app aligned with PCL's theme for efficient data management in database, enabling non-technical contributors</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Jan 2023 - Apr 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            iQmetrix
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Engineer Co-op
          </h6>
          <p>• Implemented Data Flow design and data definition workflows</p>
          <p>• Conducted verification processes of data flow processes, with strong attention-to-detail and analytical skills</p>
          <p>• Developed & merged multiple data streams in Kafka Confluent Cloud to facilitate real-time data analysis</p>
          <p>• Efficiently produced detailed documentation for data flow designs and Kafka Confluent Cloud configurations, enhancing clarity and future scalability</p>
          <p>• Proven track record of strong interpersonal and organizational skills, which allowed to effectively communicate with colleagues</p>
          <p>• Successfully worked with little supervision to complete tasks</p>
        </VerticalTimelineElement>

        {/* New Experience: Object-Oriented Design Lab Instructor */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Jul 2022 - Dec 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            University of Regina – Canada
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Object-Oriented Design Lab Instructor
          </h6>
          <p>• Assisted students in developing problem-solving techniques in C++ by displaying strong attention-to-detail</p>
          <p>• Monitored student progress and provided ongoing feedback using multiple data sources such as lab reports, test scores, and attendance records with effective time management and organizational skills</p>
          <p>• Troubleshot & resolved technical issues in the lab to ensure the accuracy and reliability of the systems</p>
          <p>• Trained students of all levels of expertise with effective and excellent communication both verbal and written</p>
        </VerticalTimelineElement>

        {/* New Experience: AI/ML Lead at Google Developer Student Club */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Mar 2022 - Current"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Google Developer Student Club of University of Regina (URGDSC) – Canada
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Artificial Intelligence / Machine Learning Lead
          </h6>
          <p>• Established relationships with for 150 students and ensured all students felt attended with personalized feedback, class discussions and engagement demonstrating excellent presentation skills</p>
          <p>• Delivered presentations to students & community groups with a proven ability to adapt and collaborate</p>
          <p>• Collaborated with students to plan AI/ML workshops for students on campus with communicative approach</p>
          <p>• Helped with the development and validation of AI/ML models</p>
          <p>• Gave workshops on Tableau teaching how to develop and modify reports and dashboards</p>
        </VerticalTimelineElement>

        {/* New Experience: Software Quality Assurance Analyst */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Apr 2016 - Aug 2021"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            King Faisal Specialist Hospital & Research Centre (KFSHRC) – Saudi Arabia
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Software Quality Assurance Analyst
          </h6>
          <p>• Demonstrated excellent problem-solving skills and the ability to think algorithmically, which enabled me to identify and resolve complex issues</p>
          <p>• Reported application defects & interoperability flaws to developers using Microsoft Excel & PowerPoint</p>
          <p>• Collaborated with teams in Software Development Life Cycle like Requirement Analysis, Design, Implementation, and testing, using Agile Methodology</p>
          <p>• Assisted with writing of test scripts, test execution along with business requirements gathering.</p>
          <p><strong>Accomplishments:</strong></p>
          <ul>
            <li>Awarded thrice with the Certificate of Appreciation for best employee of the year</li>
            <li>50% decrease in the processing time of the requests that were automated</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
