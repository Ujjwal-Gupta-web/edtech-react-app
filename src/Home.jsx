import React from 'react';

function Home(){
    return (
        <>
        
 <div id="home">
      <img src="./home.jpg" alt="#" height="100%" width="100%"/>
    </div>

    <div id="about" >
      <div className="title">About us</div>   
      <hr/> 
      <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptate, earum eveniet culpa officia delectus sint ex cupiditate fugit obcaecati possimus non est corrupti alias mollitia voluptas doloremque molestiae. Fuga!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt necessitatibus culpa exercitationem, a officiis omnis ratione possimus iure. Rem quibusdam corrupti suscipit rerum eaque quae quasi laudantium dolore sequi perferendis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in obcaecati reprehenderit praesentium aliquid ex quo? Ducimus voluptatem quas veritatis nihil, accusamus adipisci praesentium debitis ipsa voluptates minima quibusdam. Odio.
      </div>
    </div>

    <div id="gen" className="flex-c-c">
      <div className="img"><img src="./happyStudents.jpg" alt="#"/></div>
      <div className="title">Satisfied Students</div>
    </div>

    <div id="register">
      
        <div id="registeration-form">
        <h2>Register here</h2>
        <form action="">
          <input type="text" placeholder="Name"/><br/>
          <input type="text" placeholder="Class"/><br/>
          <input type="text" placeholder="Mobile No"/><br/>
          <input type="text" placeholder="Email"/><br/><br/>
          <button>Register</button><br/>
        </form>
        </div>
      
    </div>
        </>
    );
}

export default Home;