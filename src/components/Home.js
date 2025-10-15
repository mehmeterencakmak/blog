import React from 'react';
import image1 from "../images/deer-sunset-thumb-728x410.jpg"
import image_profil_foto from "../images/profil_foto.jpeg";
import "../styles/home.css"
import RecipeReviewCard from './RecipeReviewCard';
import useScrollAnimation from './useScrollAnimation';

export const Home = () => {
  useScrollAnimation(".post-target");
  return (
      <div className='home'>
        <div className='header-target'>
            <img src={image1} alt="" />
            <div className='header-target-h'>
                <h1>My Blog</h1>
                <h3>It's a Dream</h3>
            </div>
        </div>
        <div className='homepage'>
          <div className='wrapper'>
            <div className='posts'>
              {/* <div className="post-target">
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
                  <RecipeReviewCard className="post-card" />
              </div> */}
              <div className='post-target'>
                <h1>Coding With Me</h1>
                <img src={image1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis vero itaque distinctio accusamus, voluptate ex excepturi dignissimos eos placeat nobis sed laudantium quae harum autem, pariatur nesciunt! Laudantium, tempora.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sunt laudantium distinctio assumenda excepturi soluta, vel debitis illum repellendus nostrum? Illum alias accusantium optio, nulla quibusdam laboriosam deserunt earum debitis.
                </p>
                <div className='authorAndDate'>
                  <span>Mehmet Eren ÇAKMAK</span>
                  <span>15.10.2025</span>
                </div>
              </div>
              <div className='post-target'>
                <h1>Coding With Me</h1>
                <img src={image1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis vero itaque distinctio accusamus, voluptate ex excepturi dignissimos eos placeat nobis sed laudantium quae harum autem, pariatur nesciunt! Laudantium, tempora.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sunt laudantium distinctio assumenda excepturi soluta, vel debitis illum repellendus nostrum? Illum alias accusantium optio, nulla quibusdam laboriosam deserunt earum debitis.
                </p>
                <div className='authorAndDate'>
                  <span>Mehmet Eren ÇAKMAK</span>
                  <span>15.10.2025</span>
                </div>
              </div>
              <div className='post-target'>
                <h1>Coding With Me</h1>
                <img src={image1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis vero itaque distinctio accusamus, voluptate ex excepturi dignissimos eos placeat nobis sed laudantium quae harum autem, pariatur nesciunt! Laudantium, tempora.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sunt laudantium distinctio assumenda excepturi soluta, vel debitis illum repellendus nostrum? Illum alias accusantium optio, nulla quibusdam laboriosam deserunt earum debitis.
                </p>
                <div className='authorAndDate'>
                  <span>Mehmet Eren ÇAKMAK</span>
                  <span>15.10.2025</span>
                </div>
              </div>
              

            </div>
            <div className='sidebar'>
              <div className='area-target'>
                  <h3>Who I Am</h3>
                  
                  <img src={image_profil_foto} alt="user" />
                  <div className="categories">
                      <span>#art</span>
                      <span>#design</span>
                      <span>#paint</span>
                      <span>#culture</span>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        
  )
}

