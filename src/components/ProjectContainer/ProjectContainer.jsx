import uniqid from 'uniqid'
import { FaGithub } from "react-icons/fa";
import { MdOutlineLaunch } from "react-icons/md";
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {project.image && (<img
    src={project.image}
    alt={`${project.name} screenshot`}
    style={{ maxWidth: '300px', width: '100%', aspectRatio: 6/5, objectFit: 'cover', marginBottom: '2em' }}
    />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <FaGithub size={25} />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <MdOutlineLaunch size={25}/>
      </a>
    )}
  </div>
)

export default ProjectContainer
