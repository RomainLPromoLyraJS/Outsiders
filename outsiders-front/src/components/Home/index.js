// == Package imports
import React from 'react';

// == Local imports
//images
import groupImg from '../../assets/images/home2.jpg';
// components
import SearchBar from '../../containers/SearchBar';

const Home = () => (
  <div className="home">
    <section className="home__top">
      <div className="home__top__search">
        <div className="home__top__search__bg">
          <SearchBar />
        </div>
      </div>
      <div className="home__top__baseline">
        <h2>Feugiat in ante metus dictum at tempor</h2>
      </div>
    </section>
    <section className="home__bottom">
      <div className="home__bottom__img">
        <img src={groupImg} alt="Groupe hiking" />
      </div>
      <div className="home__bottom__text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit. Curabitur gravida arcu ac tortor dignissim convallis aenean. Nisi porta lorem mollis aliquam ut porttitor leo. Molestie nunc non blandit massa. Tortor pretium viverra suspendisse potenti nullam ac. Sem nulla pharetra diam sit amet. Varius vel pharetra vel turpis nunc. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Bibendum enim facilisis gravida neque convallis a.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit.</p>
      </div>  
    </section>
  </div>
);

export default Home;