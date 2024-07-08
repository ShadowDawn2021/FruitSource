import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import trialPic4 from '../assets/trialPic4.jpg'
import "../css/Home.css"


function Home() {
  return (
    <>
      <NavBar/>
      <div id='home' className='home-section'>
        <img src={trialPic4} alt="FruitSource Trial" className="home-page-banner" />
        <div className="banner-text">Fruit Source <br/> Where Growth Meets FriendShip</div>
      </div>
      <div id='about' className='about-section'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet et nostrum corrupti consequatur ullam doloribus exercitationem quos facere doloremque beatae dignissimos error nobis odit aut obcaecati ut, animi sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam at qui autem pariatur a ullam tempora, fugiat, dolore facere maiores accusamus possimus molestiae alias saepe ex dolor dicta nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit, dolores alias natus quibusdam aspernatur perferendis fugit quasi pariatur vitae necessitatibus aperiam consequuntur exercitationem a expedita minus quidem? Dicta, fugiat.</p>
      </div>
      <Footer/>
    </>
  );
}


export default Home