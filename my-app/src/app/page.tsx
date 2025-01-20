import Image from "next/image";
import cv from "../../public/assets/cv.png";
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
            <h1>Exercice Frontend</h1>
            <p>Avec Next</p>
            <a href=" https://github.com/YannCrt/FrontEnd-NextJs-Excercice" className="image-link" target="_blank">
              <Image src={project1} alt="Retro Project" />
            </a>
          </div>
          <div className="project">
            <h1>Arimayi App</h1>
            <p>Avec Next</p>

            <a href=" https://github.com/Ari-Mayi/arimayi-frontend" className="image-link" target="_blank">

              <Image src={project2} alt="Retro Project" />
            </a>
          </div>
        </div>
        <div className="container-project">
          <div className="project">
            <h1>GameNest</h1>
            <p>en Locale</p>
            <a href="https://github.com/YannCrt/GameNest" className="image-link" target="_blank">
              <Image src={project3} alt="Retro Project" />
            </a>
          </div>
          <div className="project">

            <h1>TeamQG</h1>
            <p>en Locale</p>
            <a href="https://github.com/YannCrt/TeamQG" className="image-link" target="_blank">
              <Image src={project4} alt="Retro Project" />
            </a>
          </div>
        </div>
      </div>
      <div className="cv">
        <h2>CV </h2>
        <a href="download/CV_Cretin_Yann.pdf" download="CV_Cretin_Yann.pdf">
          <Image
            src={cv}
            alt="Télécharger le CV"
            width={700}
            height={900}
          />
        </a>
      </div>
    </div>
  );
}
