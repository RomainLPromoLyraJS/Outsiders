/* eslint-disable jsx-a11y/img-redundant-alt */
// IMPORTS
import React from "react";
import productOwnerPicture from "../../assets/team/Leo-JOLY.png";
import leadDevFrontPicture from "../../assets/team/Lucas-BAIBA.png";
import scrumMasterPicture from "../../assets/team/Romain-LAFOSSE.png";
import leadDevBackPicture from "../../assets/team/Mathieu-SALVADO.png";

// My Component
const About = () => {
  return (
    <main className="about">
      <section className="about__presentation">
        <h1 className="about__presentation__title">À propos</h1>
      </section>
      <section className="about__website">
        <h2 className="about__website__title">Faire du sport ensemble</h2>
        <article className="about__website__article">
          <p>
            Notre envie a toujours été de pouvoir rassembler les gens entre eux
            et de leur faire connaitre au moins une chose sur deux : un nouveau
            sport et de nouvelles rencontres, d'échanger avec les uns avec les
            autres pour toujours plus de fun. Alors quand les deux objectifs
            sont remplis, c'est alors qu'une immense joie nous envahit !
          </p>
        </article>
      </section>
      <section className="about__team">
        <div className="about__team__presentation">
          <h2 className="about__team__title">La team au complet</h2>
          <p className="about__team__text">
            Voici l'équipe à l'oeuvre depuis la création du site et son
            développement qui ne s'arrête jamais pour satisfaire ses
            utilisateurs :
          </p>
        </div>
        <article className="about__team__article">
          <div className="about__team__article__content">
						<div className="about__team__article__content__img">
							<img src={productOwnerPicture} alt="photo-léo" />
						</div>
            <h3 className="about__team__article__content__subtitle">
              Léo
            </h3>
          </div>
					<p className="about__team__article__text">
						Le créateur à l'origine du site, l'homme qui a les idées. Sans
						lui, la terre serait sans doute encore plate, la vie encore à
						l'état mono-cellulaire, ce site n'existerait pas et peut-être même
						que toi non plus !
					</p>
        </article>
        <article className="about__team__article">
          <div className="about__team__article__content">
						<div className="about__team__article__content__img">
							<img src={leadDevFrontPicture} alt="photo-léo" />
						</div>
            <h3 className="about__team__article__content__subtitle">
            Lucas
            </h3>
          </div>
					<p className="about__team__article__text">
                    Le Lead Dev Front : celui qu'on appelle quand il y a un souci de
              code mais pas que. Toujours cool d'avoir un Lucas sous la main en
              cas de coup dur ! Avec lui, quand on fait les choses, "c'est
              carré" comme il dit.
					</p>
        </article>
        <article className="about__team__article">
          <div className="about__team__article__content">
						<div className="about__team__article__content__img">
							<img src={scrumMasterPicture} alt="photo-léo" />
						</div>
            <h3 className="about__team__article__content__subtitle">
              Romain
            </h3>
          </div>
					<p className="about__team__article__text">
                    Le Scrum Master : celui qui remplit le journal d'équipe et qui
              voulait le poste car il aime bien avoir master dans son nom.
					</p>
        </article>
        <article className="about__team__article">
          <div className="about__team__article__content">
						<div className="about__team__article__content__img">
							<img src={leadDevBackPicture} alt="photo-léo" />
						</div>
            <h3 className="about__team__article__content__subtitle">
              Mathieu
            </h3>
          </div>
					<p className="about__team__article__text">
                    Notre Lead Dev Back à nous AKA Le mécanicien du groupe ! Ne lui
              demandez pas de peindre une toile, il s'en moque, il a déjà
              dévissé le pinceau pour savoir comment ca se branche !
					</p>
       </article>
      </section>
    </main>
  );
};

export default About;
