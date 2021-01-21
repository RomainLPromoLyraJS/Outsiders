import React from "react";

import PropTypes from 'prop-types';

// == Local imports
import ImgWip from '../../components/Home/wip.jpg';

const Profile = ({ descriptionValue, usernameValue, isConnected }) => {
  return (
    <div className="profile-page">
      <div className="profil-page__header">
        <div className="profil-page__image">
        <img className="profil-page__image__picture" src={ImgWip} alt="mon-visage" />
        </div>
        <h1 className="profil-page__name">{usernameValue}</h1>
        <div className="profil-page__modification">
          <h3><span><i className="fas fa-dot-circle"></i></span>Modifier mon profil</h3>
        </div>
      </div>
      <div className="profil-page__description">
        <p>{descriptionValue}</p>
      </div>
      <div className="profil-page__last-trips">
        <article className="profil-page__article">
          <p className='profil-page__article__trip'>contenu du trip : Maecenas ut felis
          leo. Quisque sed cursus arcu. Nullam augue enim, consectetur at urna
          sed, malesuada faucibus elit. Aliquam augue nibh, fringilla vel
          tincidunt efficitur, imperdiet in urna. Sed nec luctus risus. Ut.</p>
        </article>
        <article className="profil-page__article">
          <p className='profil-page__article__trip'>contenu du trip : Maecenas ut felis
          leo. Quisque sed cursus arcu. Nullam augue enim, consectetur at urna
          sed, malesuada faucibus elit. Aliquam augue nibh, fringilla vel
          tincidunt efficitur, imperdiet in urna. Sed nec luctus risus. Ut.</p>
        </article>
        <article className="profil-page__article">
          <p className='profil-page__article__trip'>contenu du trip : Maecenas ut felis
          leo. Quisque sed cursus arcu. Nullam augue enim, consectetur at urna
          sed, malesuada faucibus elit. Aliquam augue nibh, fringilla vel
          tincidunt efficitur, imperdiet in urna. Sed nec luctus risus. Ut.</p>
        </article>
      </div>
    </div>
  );
};

Profile.propTypes = {
  descriptionValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired
};

export default Profile;
