import React from "react";
import Image from "next/image";
import cluster from "../../../public/assets/cluster.png"
import sql from "../../../public/assets/sql.png"
import modelnosql from "../../../public/assets/modelenosql.png"
import model1 from "../../../public/assets/model1.png"
import model2 from "../../../public/assets/model2.png"
import model3 from "../../../public/assets/model3.png"
import model4 from "../../../public/assets/model4.png"


function page() {
  return (
    <div className="page-veille">
      <h2>Les bases de données NoSQL dans les applications modernes</h2>

      <div className="introduction">
        <h3>Introduction</h3>
        <div className="introduction-content">
          <div className="introduction-corps">
            <p>
              Dans le monde des bases de données modernes, la question de
              choisir entre SQL et NoSQL se pose fréquemment. Alors que les
              bases de données relationnelles (SQL) ont été la norme pendant
              des décennies, les bases de données NoSQL ont gagné en
              popularité ces dernières années, surtout avec l'avènement des
              applications web et mobiles à grande échelle. Le but de cette
              veille est de comprendre les différences fondamentales entre ces
              deux types de bases de données, de mettre en lumière les
              avantages spécifiques de NoSQL dans les applications modernes et
              de donner un aperçu de leur utilisation au sein des entreprises
              actuelles.
            </p>
          </div>
        </div>
      </div>

      <div className="development">
        <h3>Développement</h3>
        <div className="veille-1">
          <h4>1. Définition des bases de données NoSQL</h4>
          <div className="veille-1-content">
            <p>
              L'article d'OVH Cloud nous explique clairement les différences
              entre les bases de données SQL et NoSQL. Alors que les bases SQL
              utilisent des tables pour organiser les données de manière
              relationnelle (par exemple, MySQL, PostgreSQL), les bases NoSQL,
              comme MongoDB ou Cassandra, permettent une approche plus flexible.
              Elles ne nécessitent pas de schéma prédéfini et sont souvent
              utilisées pour des <strong>données non structurées, semi-structurées ou massivement volumineuses.</strong>
            </p>
            <p>
              Les bases de données NoSQL sont particulièrement adaptées aux
              applications modernes qui traitent des <strong>données en temps réel</strong>
              ou des <strong>données complexes</strong>, comme les réseaux sociaux,
              l’Internet des objets (IoT), ou les applications mobiles. Cette
              flexibilité leur permet de mieux gérer des volumes de données en
              forte croissance et de s'adapter rapidement aux évolutions du
              schéma des données.
            </p>
          </div>
          <div className="veille-1-image">
            <Image
              src={sql}
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
          <a href="https://www.oracle.com/fr/database/nosql/technologies/nosql/">
            https://www.oracle.com/fr/database/nosql/technologies/nosql/
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
        </div>
      </div>
    </div>
  );
}

export default page;
