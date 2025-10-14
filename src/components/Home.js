import React from 'react';
import image1 from "../images/deer-sunset-thumb-728x410.jpg"
import image_profil_foto from "../images/profil_foto.jpeg";
import "../styles/home.css"
import RecipeReviewCard from './RecipeReviewCard';


export const Home = () => {
  return (
      <div className='home'>
        <div className='header-target'>
            <img src={image1} alt="" />
            <div className='header-target-h'>
                <h1>My Blog</h1>
                <h3>It's a Dream</h3>
            </div>
        </div>
        <div className='wrapper'>
          <div className='posts'>
            <div className="post-target">
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
            </div>

          </div>
          <div className='sidebar'>
            <div className='area-target'>
                <h3>Who I Am</h3>
                
                <img src={image_profil_foto} alt="user" />
                <div class="categories">
                    <span>#art</span>
                    <span>#design</span>
                    <span>#paint</span>
                    <span>#culture</span>
                </div>
            </div>
          </div>
        </div>

      </div>
        
  )
}

