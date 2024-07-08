import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function ResumePage() {
  return (
    <Container className="pt-4">
      <h1>Resume</h1> <br/>
      
      <h2>Summary</h2>  
      <p>
        Highly adaptable and technology-proficient professional with over a decade of adeptness in project management, specializing in coordinating both internal and external client projects and deployments. Developing and nurturing strong partnerships. Thrives within dynamic environments, consistently delivering timely executions and quality results. Recognized for efficiently managing diverse and complex projects while upholding stringent confidentiality standards and exhibiting meticulous attention to detail. Known for innovative problem-solving skills, adept at finding imaginative and elegant solutions to challenges across various project domains.
      </p> <br/>

      <div>
        <h3>Office Manager</h3>
        <p>
          <strong>2/2019 - 1/2024</strong> <br />
          Milliman, Inc. - Seattle, WA <br />
          - Supervised a team of 18 staff, optimizing productivity, and overseeing operational improvements, including expense reporting and annual review tools. <br />
          - Orchestrated HR operations, ensuring smooth onboarding and meticulous leave administration while upholding confidentiality and compliance with company policies. <br />
          - Facilitated communication between senior management and staff, spearheading procedural enhancements and fostering a culture of transparency and collaboration. <br />
          - Acted as the primary liaison with other firm-wide practices, coordinating events ranging from confidential meetings to large-scale celebrations. <br />
          - Managed comprehensive office operations, optimizing supply inventory management and streamlining office moves for enhanced efficiency. <br />
          - Implemented an efficient expense approval process, saving executive management significant time and ensuring regulatory compliance. <br />
          - Led the design and integration of a user-friendly ticketing system, reducing delays in finalized work product by 25%.
        </p> <br/>
      </div>

      <div>
        <h3>Executive Assistant, Chief of Health Services</h3>
        <p>
          <strong>11/2017 - 2/2019</strong> <br />
          Community Health Plan of Washington - Seattle, WA <br />
          - Provided advanced administrative support to the Chief of Health Services Division, managing complex schedules, confidential correspondence, and cross-discipline inquiries. <br />
          - Coordinated complex meetings and travel arrangements, ensuring seamless execution and prioritization of tasks. <br />
          - Led cross-departmental projects and initiatives, serving as a subject matter expert for office-related matters. <br />
          - Managed expense reporting and invoicing, maintaining meticulous records for divisional financial transactions.
        </p> <br/>
      </div>

      <div>
        <h3>Administrative Assistant, Healthcare Management Team</h3>
        <p>
          <strong>3/2016 - 11/2017</strong> <br />
          Milliman, Inc. - Seattle, WA <br />
          - Supported high-functioning consulting team and executive leadership, ensuring the delivery of flawless client products and services. <br />
          - Coordinated meetings, conference calls, and travel arrangements, optimizing schedules for efficiency and productivity. <br />
          - Managed expense reporting and invoice processing, liaising with accounting to streamline billing procedures. <br />
          - Maintained file management systems and equity principal calendars, facilitating seamless operations for leadership and staff.
        </p> <br/>
      </div>

      <div>
        <h3>User Research Project Coordinator / Office Subject Matter Expert</h3>
        <p>
          <strong>5/2014 - 12/2014</strong> <br />
          Microsoft Corporation/Kelly Services - Redmond, WA <br />
          - Coordinated the recruitment of participants for research studies, adhering to predefined requirements and best practices, ensuring the smooth progression of projects. <br />
          - Collaborated with Senior Project Managers to oversee studies throughout the project lifecycle, addressing issues promptly to maintain project momentum. <br />
          - Selected as the Subject Matter Expert for the Microsoft Office Suite Research Team, leveraging expertise to enhance project outcomes and streamline processes.
        </p> <br/>
      </div>

      <div className="mt-4">
        <Button variant="primary">
          <a href="/Resume.pdf" download>Download Resume</a>
        </Button>
      </div>
    </Container>
  );
}