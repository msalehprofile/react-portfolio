import ProjectTile, { ProjectTileProps } from "../../Components/ProjectTile/ProjectTile";
import "./Projects.scss";
import Carousel from "react-material-ui-carousel";
import brewdogImage from "./../../Images/projects/brewdog.png";
import calculator from "./../../Images/projects/calc.png";
import sudoku from "./../../Images/projects/sudoku.png";
import budgetTracker from "./../../Images/projects/budgettracker.png";
// import bookTracker from "./../../Images/projects/booktracker.png";
import rummy from "./../../Images/projects/rummy.png";
import hangman from "./../../Images/projects/hangman.png";
import Footer from "../../Components/Footer/Footer";

const Projects = () => {
  const projects = [
    {
      projectName: "Calculator",
      projectImage: calculator,
      projectLanguage: "Typescript",
      projectLiveLink: "https://msalehprofile.github.io/calculator-test/",
      projectCodeLink: "https://github.com/msalehprofile/calculator-test",
      projectDesc:
        "A calculator created in Typescript. It has both portrait and landscape layout, as well as a day and night mode that changes based on the time of the day.",
    },
    {
      projectName: "Suduko",
      projectImage: sudoku,
      projectLanguage: "Typescript",
      projectLiveLink: "https://msalehprofile.github.io/sudoku-game-challenge/",
      projectCodeLink: "https://github.com/msalehprofile/sudoku-game-challenge",
      projectDesc:
        "A game of Suduko created using Typescript. The game consists of three levels and has multiple games to play at each level.",
    },
    {
      projectName: "Punk API",
      projectImage: brewdogImage,
      projectLanguage: "Typescript",
      projectLiveLink: "https://msalehprofile.github.io/react-punk-api/",
      projectCodeLink: "https://github.com/msalehprofile/react-punk-api",
      projectDesc:
        "First use of an API, where I have paginated a list of beers, along with creating the functionality to be able to filter by one or more options.",
    },
    {
      projectName: "Hangman",
      projectImage: hangman,
      projectLanguage: "Java",
      projectCodeLink: "https://github.com/msalehprofile/java-hangman",
      projectDesc:
        "First project created in Java. This is a game of Hangman, where users can either play single or double player and select the level they wish to play.",
    },
    // {
    //   projectName: "Book Tracker",
    //   projectImage: bookTracker,
    //   projectLanguage: "Typescript & Java",
    //   projectLiveLink: "https://msalehprofile.github.io/frontend-book-tracker/",
    //   projectFrontEndCode:
    //     "https://github.com/msalehprofile/frontend-book-tracker",
    //   projectBackEndCode:
    //     "https://github.com/msalehprofile/backend-book-tracker",
    //   projectDesc:
    //     "For the first full stack project I decided to create a book tracker. It is single person use, where a player can rate, review and list books they have read or want to read.",
    // },
    {
      projectName: "Budget Tracker",
      projectImage: budgetTracker,
      projectLanguage: "Typescript & Java",
      projectFrontEndCode:
        "https://github.com/msalehprofile/frontend-spendingtracker",
      projectBackEndCode:
        "https://github.com/msalehprofile/backend-spendingtracker",
      projectDesc:
        "I pushed myself slightly further with this project by having my first attempt at authorisation and using multiple packages for the first time. The premise is a user being able to create an account and track what they have spent and where against personal budget plans.",
        projectLiveLink: "https://msalehprofile.github.io/frontend-spendingtracker/",
      },
      {
        projectName: "Card Games",
        projectImage: rummy,
        projectLanguage: "Java",
        projectCodeLink:
          "https://github.com/msalehprofile/java-pairprogramming-games",
        projectDesc:
          "First pair-programming project. We created a deck of cards, along with actions as a pair and then developed our own card games. I worked on the Rummy section of this project, which is playable from 2-4 players.",
      },
  ];

  const pairProjects = (projects: ProjectTileProps[]) => {
    const pairedProjects = [];
    for (let i = 0; i < projects.length; i += 2) {
      pairedProjects.push(projects.slice(i, i + 2));
    }
    return pairedProjects;
  };

  const pairedProjects = pairProjects(projects);

  return (
    <div className="projects">
      <h2 className="projects__heading">Projects</h2>
      <p className="projects__underline"></p>
      <p className="projects__summary">
        Below is a slide show of the projects that I am proud to share, I have
        included links to the code base and the live sites where possible.
        Please note that due to not being in the position to host my own sites
        the full stack applications are not fully functional.
      </p>
      <ul className="projects__list">
        <li>Front End = FE</li>
        <li>Back End = BE</li>
      </ul>
      <Carousel
        className="projects__carousel"
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysInvisible={true}
        swipe={true}
        animation="slide"
      >
        {projects.map((projects, i) => (
          <ProjectTile
            key={i}
            projectImage={projects.projectImage}
            projectFrontEndCode={projects.projectFrontEndCode}
            projectBackEndCode={projects.projectBackEndCode}
            projectName={projects.projectName}
            projectLanguage={projects.projectLanguage}
            projectLiveLink={projects.projectLiveLink}
            projectCodeLink={projects.projectCodeLink}
            projectDesc={projects.projectDesc}
          />
        ))}
      </Carousel>
      <Carousel
        className="projects__carousel-desktop"
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          className: "projects__carousel-desktop--nav-button",  // Add a custom class to the buttons
        }}
        
        swipe={false}
        animation="slide"
      >
        {pairedProjects.map((pair, i) => (
          <div className="projects__carousel-desktop--pair" key={i}>
            {pair.map((project, j) => (
              <ProjectTile
                key={j}
                projectImage={project.projectImage}
                projectFrontEndCode={project.projectFrontEndCode}
                projectBackEndCode={project.projectBackEndCode}
                projectName={project.projectName}
                projectLanguage={project.projectLanguage}
                projectLiveLink={project.projectLiveLink}
                projectCodeLink={project.projectCodeLink}
                projectDesc={project.projectDesc}
              />
            ))}
          </div>
        ))}
      </Carousel>
      <Footer />
    </div>
  );
};

export default Projects;
