import React from "react";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profil-page__header">
        <img className="profil-page__picture" src="/src/components/Home/wip.jpg" alt="mon-visage" />
        <h1 className="profil-page__name">Jane Doe</h1>
      </div>
      <div className="profil-page__description">
        <p>
          ma bio : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          imperdiet est diam, sed laoreet tellus blandit id. Maecenas ut felis
          leo. Quisque sed cursus arcu. Nullam augue enim, consectetur at urna
          sed, malesuada faucibus elit. Aliquam augue nibh, fringilla vel
          tincidunt efficitur, imperdiet in urna. Sed nec luctus risus. Ut.
        </p>
      </div>
      <div className="profil-page__last-trips">
        <article className="profil-page__article">
          <h2 classeName="profil-page__article__title">Surf</h2>
        </article>
      </div>
    </div>
  );
};

export default Profile;
