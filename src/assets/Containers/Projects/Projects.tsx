import ProjectTile from "../../Components/ProjectTile/ProjectTile";
import "./Projects.scss";
import Carousel from "react-material-ui-carousel";

const Projects = () => {
  const projects = [
    {
      projectName: "Calculator",
      projectLanguage: "Typescript",
      projectLiveLink: "https://msalehprofile.github.io/calculator-test/",
      projectCodeLink: "https://github.com/msalehprofile/calculator-test",
      projectDesc:
        "A calculator created in Typescript. It has both portrait and landscape layout, as well as a day and night mode that changes based on the time of the day.",
    },
    {
      projectName: "Suduko",
      projectLanguage: "Typescript",
      projectLiveLink: "https://msalehprofile.github.io/sudoku-game-challenge/",
      projectCodeLink: "https://github.com/msalehprofile/sudoku-game-challenge",
      projectDesc:
        "A game of Suduko created using Typescript. The game consists of three levels and has multiple games to play at each level.",
    },
    {
      projectName: "Punk API",
      projectLanguage: "Typescript",
      projectLiveLink: "https://github.com/msalehprofile/react-punk-api",
      projectCodeLink: "https://msalehprofile.github.io/react-punk-api/",
      projectDesc: "First use of an API. Please note that due to using a local API, the live site is not fully functional",
    },
    {
      projectName: "Hangman",
      projectLanguage: "Java",
      projectCodeLink: "https://github.com/msalehprofile/java-hangman",
      projectDesc:
        "First project created in Java. This is a game of Hangman, where users can either plan single or double player and select the level they wish to play.",
    },
    {
      projectName: "Card Games",
      projectLanguage: "Java",
      projectCodeLink:
        "https://github.com/msalehprofile/java-pairprogramming-games",
      projectDesc:
        "First pair-programming project. We created a deck of cards, along with actions as a pair and then developed our own card games. I worked on the Rummy section of this project, which is playable from 2-4 players.",
    },
    {
      projectName: "Book Tracker",
      projectLanguage: "Typescript & Java",
      projectFrontEndCode:
        "https://github.com/msalehprofile/frontend-book-tracker",
      projectBackEndCode:
        "https://github.com/msalehprofile/backend-book-tracker",
      projectDesc:
        "For the first full stack project I decided to create a book tracker. It is single person use, where a player can rate, review and list books they have read or want to read. Please note that due to using a local API, the live site is not fully functional.",
    },
    {
        projectName: "Budget Tracker",
        projectLanguage: "Typescript & Java",
        projectFrontEndCode:
          "https://github.com/msalehprofile/frontend-spendingtracker",
        projectBackEndCode:
          "https://github.com/msalehprofile/backend-spendingtracker",
        projectDesc:
          "I pushed myself slightly further with this project by having my first attempt at authorisation and using multiple packages for the first time. The premise is a user being able to create an account and track what they have spent and where against personal budget plans. Please note that due to using a local API, the live site is not fully functional",
      },
  ];

  return (
    <div>
      <Carousel>
        {projects.map((projects, i) => (
          <ProjectTile
            key={i}
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
    </div>
  );
};

export default Projects;
