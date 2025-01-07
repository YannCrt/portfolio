import Image from "next/image";
import project1 from '../../public/assets/project1.png';
import project2 from '../../public/assets/project2.png';
import project3 from '../../public/assets/project3.png';
import project4 from '../../public/assets/project4.png';

export default function Home() {
  return (
    <div className="home">
      <h2>PORTFOLIO</h2>
      <div className="projects">
        <h3>PROJETS :</h3>
        <div className="container-project">
          <div className="project">
            <h1>Excercice Frontend</h1>
            <p>Avec Next</p>
            <a href="/projects/project1" className="image-link">
              <Image src={project1} alt="Retro Project" />
            </a>
          </div>
          <div className="project">
            <h1>Arimayi App</h1>
            <p>Avec Next</p>

            <a href="/projects/project2" className="image-link">

              <Image src={project2} alt="Retro Project" />
            </a>
          </div>
        </div>
        <div className="container-project">
          <div className="project">
            <h1>GameNest</h1>
            <p>en Locale</p>
            <a href="/projects/project3" className="image-link">
              <Image src={project3} alt="Retro Project" />
            </a>
          </div>
          <div className="project">

            <h1>TeamQG</h1>
            <p>en Locale</p>
            <a href="/projects/project4" className="image-link">
              <Image src={project4} alt="Retro Project" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
