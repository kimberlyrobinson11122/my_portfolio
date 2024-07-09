import React from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import resume from '../../public/Resume.pdf'; // Important file that needs to be included

export default function ResumePage() {
  const [showModal, setShowModal] = React.useState(false);

  const handleDownload = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="pt-4" style={{ marginBottom: 100 }}>
      <h1>Resume</h1> <br/>

      <h2>Summary</h2>  
      <p>
        Highly adaptable and technology-proficient professional with strong foundations in web development and cloud technologies. Proven ability to deliver high-quality solutions using HTML, CSS, JavaScript, Node.js, and MongoDB. Adept at managing projects, implementing innovative solutions, and maintaining stringent confidentiality standards.
      </p> <br/>

      <div>
        <h3>Junior Web Developer</h3>
        <p>
          <strong>5/2014 - 12/2014</strong> <br />
          Other New <Company></Company> - Redmond, WA <br />
          - Assisted in the development of web applications, adhering to best practices and coding standards. <br />
          - Collaborated with senior developers to troubleshoot and resolve bugs, ensuring smooth project progression. <br />
          - Implemented features and enhancements using HTML, CSS, and JavaScript, contributing to project milestones. <br />
          - Selected as the Subject Matter Expert for JavaScript frameworks, leveraging expertise to optimize project outcomes.
        </p> <br/>
      </div>

      <div>
        <h3>Full-Stack Developer Intern</h3>
        <p>
          <strong>3/2016 - 8/2016</strong> <br />
          New Company Inc. - Seattle, WA <br />
          - Supported development teams in creating dynamic web pages using HTML, CSS, and JavaScript. <br />
          - Assisted in developing RESTful APIs using Node.js and Express.js. <br />
          - Participated in code reviews and debugging sessions, gaining practical experience in software development. <br />
          - Collaborated with UX/UI designers to implement responsive and accessible web designs.
        </p> <br/>
      </div>

      <div className="mt-4">
        <Button variant="primary" onClick={handleDownload}>
          Download Resume
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Click the button below to download your resume:</p>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Download Resume</Button>
          </a>
        </Modal.Body>
      </Modal>
    </Container>
  );
}