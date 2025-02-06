import React from "react";
import Image from "next/image";
import cluster from "../../../public/assets/cluster.png"
import ransomhub from "../../../public/assets/ransomHub.jpg"
import modelnosql from "../../../public/assets/lockbit.png"
import model1 from "../../../public/assets/Akira.png"
import model2 from "../../../public/assets/darkgate.jpg"
import model3 from "../../../public/assets/model3.png"
import model4 from "../../../public/assets/model4.png"


function page() {
  return (
    <div className="page-veille">
      <h2>Comment les techniques d’attaques ont-elles évolué ? </h2>

      <div className="introduction">
        <h3>Introduction</h3>
        <div className="introduction-content">
          <div className="introduction-corps">
            <p>
              Au fil des décennies, les techniques d'attaques informatiques ont considérablement évolué, passant des premiers virus rudimentaires aux menaces sophistiquées actuelles telles que les ransomwares à double ou triple extorsion. Les cybercriminels exploitent désormais des vulnérabilités variées, combinant failles logicielles et ingénierie sociale, ce qui souligne l'importance cruciale de la cybersécurité pour protéger les systèmes et les données sensibles.
            </p>
          </div>
        </div>
      </div>

      <div className="development">
        <h3>Développement</h3>
        <div className="veille-1">
          <h4>1. Les Malwares les plus utilisés en 2024</h4>
          <div className="introduction-content">
            <div className="introduction-corps">
              <p>
                En 2024, plusieurs malwares ont marqué le paysage de la cybersécurité par leur sophistication et leur impact significatif :
              </p>
            </div>
          </div>
          <h4>Exemple de Malware récent : </h4>
          <div className="veille-1-image">
            <Image
              src={ransomhub}
              alt="image-nosql"
              width={500}
              height={350}
            />
            <Image
              src={modelnosql}
              alt="image-model-nosql"
              width={500}
              height={350} />

          </div>
          <div className="veille-1-model">

            <div className="veille-1-model-content">
              <Image
                src={model1}
                alt="image-model-1"
                width={400}
                height={250} />
              <Image
                src={model2}
                alt="image-model-2"
                width={400}
                height={250} />
              <Image
                src={model3}
                alt="image-model-3"
                width={400}
                height={250} />
              <Image
                src={model4}
                alt="image-model-4"
                width={400} height={250} />
            </div>
          </div>
        </div>

        <div className="veille-2">
          <h4>2. Avantages des bases de données NoSQL dans les applications modernes</h4>
          <div className="veille-2-content">
            <p>
              Les bases de données NoSQL offrent plusieurs avantages par rapport
              aux bases de données relationnelles, en particulier dans le
              contexte des applications modernes.
            </p>
            <ul>
              <li>
                <div className="veille-2-content-item">
                  <p><strong>Scalabilité horizontale</strong> : Alors que les bases
                    SQL doivent être mises à l'échelle verticalement (augmentation
                    des ressources d’un serveur), les bases NoSQL peuvent être
                    mises à l’échelle horizontalement, en ajoutant simplement plus
                    de serveurs. Cela est particulièrement utile dans les
                    architectures distribuées et pour les applications à fort
                    trafic.</p>
                  <Image
                    src={cluster}
                    alt="image-cluster"
                    width={400} height={250} />
                </div>
              </li>
              <li>
                <strong>Flexibilité du modèle de données</strong> : Les bases
                de données NoSQL ne nécessitent pas de schéma fixe, ce qui
                permet aux développeurs d’ajouter des colonnes ou des types de
                données sans perturber l’ensemble du système. Cela offre une
                grande agilité dans le développement d’applications en
                constante évolution.
              </li>
              <li>
                <strong>Optimisation pour les données non structurées</strong> :
                Avec l'explosion des données générées par les utilisateurs
                (comme les images, vidéos, et les messages sur les réseaux
                sociaux), les bases NoSQL sont optimisées pour stocker des
                données non structurées ou semi-structurées.
              </li>
            </ul>
          </div>
        </div>

        <div className="veille-3">
          <h4>3. Exemples d'utilisation de NoSQL</h4>
          <div className="veille-3-content">
            <p>
              Dans le secteur technologique, plusieurs entreprises et projets
              utilisent des bases NoSQL pour améliorer la performance et la
              scalabilité de leurs applications. Par exemple, <strong>MongoDB</strong>,
              une des bases NoSQL les plus populaires, est utilisée par des
              entreprises telles que <strong>eBay</strong>, <strong>LinkedIn</strong>
              et <strong>Adobe</strong>. Ces entreprises traitent des milliards
              de transactions par jour, et NoSQL leur permet de mieux gérer
              ces volumes tout en maintenant une grande flexibilité dans la
              structure de leurs données.
            </p>
            <p>
              De plus, des plateformes comme <strong>Cassandra</strong> sont
              très prisées pour les applications nécessitant une disponibilité
              élevée et une grande tolérance aux pannes. Cela fait partie des
              avantages des bases NoSQL dans des architectures distribuées.
            </p>
          </div>
        </div>
      </div>

      <p>
        <strong>Conclusion</strong>
      </p>
      <p>
        Les bases de données NoSQL ont bien démontré leur utilité et leur
        efficacité dans les applications modernes, notamment celles qui
        nécessitent une grande scalabilité, une flexibilité du modèle de
        données, et une gestion efficace de grandes quantités de données non
        structurées. Elles sont particulièrement adaptées à des environnements
        comme les réseaux sociaux, l'IoT, ou encore les applications en temps
        réel, qui nécessitent des performances et une agilité maximales. En
        revanche, les bases de données relationnelles restent une option
        valable pour des applications nécessitant des transactions complexes
        ou des structures de données très rigides. Le choix entre SQL et NoSQL
        dépendra des besoins spécifiques de l'application, mais dans le
        contexte actuel des données massives et distribuées, NoSQL occupe une
        place de plus en plus centrale dans le développement des systèmes
        modernes.
      </p>

      <div className="source">
        <h4 id="source-h4">Source</h4>
        <div className="link-source">
          <a href="https://www.checkpoint.com/fr/cyber-hub/threat-prevention/ransomware/what-is-ransomhub-ransomware/">
            https://www.checkpoint.com/fr/cyber-hub/threat-prevention/ransomware/what-is-ransomhub-ransomware/
          </a>
          <a href="https://oracle.com/fr/database/nosql/">
            https://oracle.com/fr/database/nosql/
          </a>
          <a href="https://www.oracle.com/ma/database/nosql/what-is-nosql/">
            https://www.oracle.com/ma/database/nosql/what-is-nosql/
          </a>
          <a href="https://rlogical.com/blog/nextjs-vs-expressjs-performance">
            https://rlogical.com/blog/nextjs-vs-expressjs-performance/
          </a>
          <a href="https://youtu.be/2rkvCnZVsow?si=sJ8DXGtxdwU5XOPf">
            https://youtu.be/2rkvCnZVsow?si=sJ8DXGtxdwU5XOPf
          </a>
          <a href="https://www.clubic.com/antivirus-securite-informatique/virus-hacker-piratage/malware-logiciel-malveillant/actualite-464376-rorschach-attention-a-ce-nouveau-ransomware-chiffre-vos-donnees-plus-vite-qu-aucun-autre.html">
            https://www.clubic.com/antivirus-securite-informatique/virus-hacker-piratage/malware-logiciel-malveillant/actualite-464376-rorschach-attention-a-ce-nouveau-ransomware-chiffre-vos-donnees-plus-vite-qu-aucun-autre.html
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
