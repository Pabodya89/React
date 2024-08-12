import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './About.css';
import worker1 from '../../assets/worker.webp';
import worker2 from '../../assets/worker2.webp';
import worker3 from '../../assets/worker3.jpeg';
import gift from '../../assets/gift.jpg';
import workershop from '../../assets/workshop.png';
import store from '../../assets/onlinestore.jpg';
import bookclub from '../../assets/bookclub.avif';


const Story = () => 
<div className="section-content">
    Suraksha Book Shop began as a small, independent bookstore in the heart of Kolonna. Fueled by a love for reading and a dedication to our community, we have grown into a beloved local destination for book enthusiasts. Our journey has been one of growth, learning, and unwavering commitment to our core values.
</div>;

const Team = () => 
<div className="section-content">
    <h3>This is Our dedicated Team</h3>
  <img src={worker1} className='worker'/>
  <h4>Pathum Anuththara</h4>
 
  <img src={worker2} className='worker'/>
  <h4>Pathumi Anuththara</h4>
  
  <img src={worker3} className='worker'/>
  <h4>Pathumika Anuththara</h4>

</div>;

const Values = () => 
<div className="section-content">
    <ul>
        <li><div className= "valuepoint">Customer Satisfaction</div> 
        We strive to offer a warm and welcoming environment where customers can explore and discover new reads. Our knowledgeable staff is always on hand to provide recommendations and assist with any inquiries.
        </li>
        <li>
            <div className= "valuepoint">Diversity and Inclusion</div> 
            We believe in the power of stories to bring people together. Our collection includes a wide array of genres, authors, and perspectives to ensure that every reader finds something that resonates with them.
        </li>
        <li>
            <div className= "valuepoint">Community Engagement</div>
             We take pride in being an integral part of our community. From hosting local author events and book signings to participating in literacy programs and charity drives, we are committed to making a positive impact.
        </li>
    </ul>
</div>;
const Collection = () =>
    <div lassName="section-content">
        
        <ul>
  <li>
    <strong className="point">Fiction</strong>
    <p className='p'>Dive into the world of imagination with our wide range of novels, from contemporary bestsellers to timeless classics. Whether you're in the mood for a gripping mystery, a heartwarming romance, or a thought-provoking literary piece, our fiction section has something to captivate every reader's imagination.</p>
  </li>
  <li>
    <strong className="point">Non-Fiction</strong>
    <p className='p'> Explore a wealth of knowledge on topics such as history, science, self-help, and more. Our non-fiction section is designed to enlighten and inspire, offering books that delve into real-world issues, biographies of fascinating individuals, and insightful guides to personal development and professional growth.</p>
  </li>
  <li>
    <strong className="point">Children's Books</strong>
    <p className='p'>Foster a love of reading in young minds with our delightful assortment of children's books, including picture books, early readers, and young adult novels. From enchanting fairy tales and adventurous stories to educational books and interactive activity books, our children's section aims to spark curiosity and creativity in every child.</p>
  </li>
  <li>
    <strong className="point">Local Authors</strong>
    <p className='p'>Celebrate the literary talents within our community by browsing our dedicated section for local authors. Discover the unique voices and stories that originate from our very own neighborhood, supporting the artists who bring our local culture and experiences to life through their writing.</p>
  </li>
</ul>

        
    </div>;

const Service = () =>
    <div>
       
        <ul>
  <li>
    <strong className= "name">Online Store</strong>
    <img src={store} className="service1"/>
    <p className="pi">Browse and purchase books from the comfort of your home through our user-friendly online store. With just a few clicks, you can explore our extensive catalog, read reviews, and have your favorite books delivered right to your doorstep.</p>
  </li>
  <li>
    <strong className= "name">Gift Wrapping</strong>
    <img src={gift} className="service"/>
    <p className="pi"> Make your gift-giving extra special with our complimentary gift-wrapping service. Whether it's for a birthday, holiday, or any special occasion, our beautifully wrapped books are sure to delight your loved ones.</p>
  </li>
  <li>
    <strong className= "name">Book Clubs</strong>
    <img src={bookclub} className="service"/>
    <p className="pi">Join one of our book clubs to connect with fellow readers and engage in enriching discussions. Our book clubs cover a variety of genres and interests, providing a great way to share your thoughts, discover new perspectives, and make new friends.</p>
  </li>
  <li>
    <strong className= "name">Events and Workshops</strong>
    <img src={workershop} className="service"/>
    <p className="pi">Attend our literary events, workshops, and author meet-and-greets to deepen your appreciation for the written word. From writing workshops and poetry readings to book signings and panel discussions, there's always something exciting happening at Suraksha Book Shop.</p>
  </li>
</ul>

       
    </div>;

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="paragraph">At Suraksha Book Shop, we are passionate about connecting book lovers with the literature they cherish. Established in 2001, our mission has always been to provide a diverse range of books that cater to readers of all ages and interests.</p>
      <nav>
        < NavLink to="story" className={({ isActive }) => (isActive ? 'active' : '')}>Our Story </NavLink>
        <NavLink to="team" className={({ isActive }) => (isActive ? 'active' : '')}>Team</NavLink>
        <NavLink to="values" className={({ isActive }) => (isActive ? 'active' : '')}>Values</NavLink>
        <NavLink to="collection" className={({ isActive }) => (isActive ? 'active' : '')}>Collection</NavLink>
        <NavLink to="service" className={({ isActive }) => (isActive ? 'active' : '')}>Service</NavLink>

      </nav>
      <Routes>
        <Route path="story" element={<Story />} />
        <Route path="team" element={<Team />} />
        <Route path="values" element={<Values />} />
        <Route path="collection" element={<Collection />} />
        <Route path="service" element={<Service />} /> 
      </Routes>
      <h3>Visit Us....................</h3>
      <p className="paragraph"> 
      We invite you to visit Suraksha Book Shop and experience the magic of books firsthand. Whether you're looking for your next great read or simply want to spend some time in a cozy, book-filled space, we look forward to welcoming you. </p>
    </div>
   
  );
};

export default About;
