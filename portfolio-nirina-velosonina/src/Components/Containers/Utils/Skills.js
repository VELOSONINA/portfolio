import React from 'react';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT',
    'GITHUB',
    'NODE JS',
    'MONGO DB',
    'AWS',
    'Sass',
    'Mongodb',
    'Figma'
  ];

  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-10 col-md-8 col-sm-6">
          <h2 className="text-center my-5">Skills</h2>
          <p className="lead">Je trouve plaisir à plonger dans l'avenir et à apprendre de nouvelles choses. Voici une liste des technologies avec lesquelles j'ai travaillé.</p>
          <div className="d-flex flex-wrap justify-content-around mt-5">
            {skills.map(skill => (
              <div key={skill} className="card m-2 shadow-sm">
                <div className="card-body">
                  <p className="card-text">{skill.toUpperCase()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
