import { LogoImg } from "../styles/MainNavStyles";
import BFStudiosLogo from '../../components/images/BFStudiosLogo.png';

const ProjectIntro = () => (
  <>
    <LogoImg 
      src={BFStudiosLogo} 
      alt="logo" 
      effect="blur"
    />
    <p>^^ Different image here</p>
    <h4>Check out my projects</h4>
    <p>
      I'm always working on new projects to simplify user experience. Come take a look at
      some of my featured projects!
    </p>
    <p>Button to Projects HERE</p>
  </>
)

export default ProjectIntro;