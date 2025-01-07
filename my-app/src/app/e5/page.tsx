import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="e4-a">
      <h4>Télécharger Rapport </h4>
      <p>Veuillez cliquez sur le lien</p>
      <a href="/download/01specificationsGSBRapportDeVisites_V2.pdf" download="Contexte_Cretin_Yann.pdf">
        <Image
          src="/assets/contexte.png"
          alt="Télécharger Rapport 1"
          width={700}
          height={900}
        />
      </a>
    </div>
  )
}

export default page;
