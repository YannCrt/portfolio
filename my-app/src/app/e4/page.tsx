import Image from "next/image";
import React from "react";
import tableau from "../../../public/assets/tableau.png"
import Rapport1 from "../../../public/assets/project4.png"
import Rapport2 from "../../../public/assets/comingsoon.png"

function Page() {
  return (
    <div className="e4">
      <div className="e4-container">
        <h3>Rapports de stage</h3>
        <div className="e4-rapport">
          <div className="e4-a">
            <h4>Télécharger Rapport 1</h4>
            <p>Veuillez cliquez sur l'image</p>
            <a href="/download/rapport1.docx" download="Rapport_de_Stage_1_Cretin_Yann.docx">
              <Image
                src={Rapport1}
                alt="Télécharger Rapport 1"
                width={700}
                height={300}
              />
            </a>
          </div>
          <div className="e4-a">
            <h4>Télécharger Rapport 2</h4>
            <p>Non disponible pour le moment</p>
            <a download="Rapport_de_Stage_1_Cretin_Yann.pdf">
              <Image
                src={Rapport2}
                alt="Télécharger Rapport 2"
                width={700}
                height={300}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="e4-container">
        <h3>Tableau de compétences</h3>
        <div className="e4-a">
          <h4>Télécharger le Tableau de Compétences</h4>
          <p>Pdf vide pour le moment.</p>
          <a href="download/tableau.pdf" download="Tableau_Cretin_Yann.pdf">
            <Image
              src={tableau}
              alt="Télécharger Tableau de Compétences"
              width={700}
              height={700}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
