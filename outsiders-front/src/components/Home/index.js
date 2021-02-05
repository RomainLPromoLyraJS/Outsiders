// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports
//images
import groupImg from '../../assets/images/home.jpg';
// components
import SearchBar from '../../containers/SearchBar';
// utils
import { randomize } from '../../utils';

const Home = () => {
  // randomize the background picture
  const bgCss = `home__top__search bg${randomize(1, 6)}`

  return (
    <div className="home">
      <section className="home__top">
        <div className={bgCss}>
          <div className="home__top__search__bg">
            <SearchBar />
          </div>
        </div>
        <div className="home__top__baseline">
          <h2>Moins de frais pour plus de fun !</h2>
        </div>
      </section>
      <section className="home__bottom">
        <div className="home__bottom__img">
          <img src={groupImg} alt="Groupe hiking" />
        </div>
        <div className="home__bottom__text">
          <p>Chez Outsiders, nous sommes passionnés par les sports outdoors et nous pensons que tout le monde doit y avoir accès peu importe qu'on vive en centre-ville ou en pleine campagne.</p>
          <p>L'idée est de proposer une plateforme communautaire, qui permet aux passionnés de sensations fortes et de grands espaces d'être mis en relation pour partager des trajets et des sessions de sport.</p>
          <p>Tu as un moyen de locomotion ? Parfait ! Tu vas pouvoir proposer des sorties et ainsi partager les frais de transport. Tu n'en as pas ? Pas de souci... Rejoins des sorties proposées par d'autres utilisateurs pour pouvoir te déplacer et pratiquer ton sport.</p>
          <p>Dans les deux cas ce sera surtout l'occasion de rencontrer de nouvelles personnes passionnées par la même activité que toi. Et on le sait, le sport c'est toujours plus fun à plusieurs !</p>
          <p>Inscrit-toi dès maintenant pour proposer ou rejoindre ta première sortie.</p>
          <NavLink className="home__bottom__btn" to="/signup">Inscription</NavLink>
        </div>  
      </section>
    </div>
  );
};

export default Home;