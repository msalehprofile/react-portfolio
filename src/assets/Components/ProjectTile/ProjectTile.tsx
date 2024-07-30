import { Link } from "react-router-dom";
import PersonalisedButton from "../PersonalisedButton/PersonalisedButton";
import "./ProjectTile.scss";

type ProjectTileProps = {
  projectName: string;
  projectLanguage: string;
  projectLiveLink?: string;
  projectCodeLink?: string;
  projectBackEndCode?: string;
  projectFrontEndCode?: string;
  projectDesc: string;
  projectImage: string;
};

const ProjectTile = ({
  projectName,
  projectLanguage,
  projectLiveLink,
  projectCodeLink,
  projectDesc,
  projectFrontEndCode,
  projectBackEndCode,
  projectImage
}: ProjectTileProps) => {
  return (
    <div>
      <div className="project-tile">
        <img
          src={projectImage}
          alt="project image"
          className="project-tile__img"
        />
        <h4 className="project-tile__language">{projectLanguage}</h4>
        <h1 className="project-tile__name">{projectName}</h1>
        <p className="project-tile__description">{projectDesc}</p>
        <div className="project-tile__button">
          {projectCodeLink && (
            <Link to={projectCodeLink} target="_blank">
              <PersonalisedButton
                label="Code </>"
                size="large"
                color="primary"
              />
            </Link>
          )}
          {projectLiveLink && (
            <Link to={projectLiveLink} target="_blank">
              <PersonalisedButton
                label="Preview"
                size="large"
                color="primary"
              />
            </Link>
          )}
          {projectFrontEndCode && (
            <Link to={projectFrontEndCode} target="_blank">
              <PersonalisedButton
                label="FE Code </>"
                size="medium"
                color="primary"
              />
            </Link>
          )}
          {projectBackEndCode && (
            <Link to={projectBackEndCode} target="_blank">
              <PersonalisedButton
                label="BE Code </>"
                size="medium"
                color="primary"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
