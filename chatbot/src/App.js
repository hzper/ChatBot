
import { Button } from '@material-ui/core';
import React from "react";
import "./styles.css";
import srgt from "./srgt.png";
import "./eyes.js";
import $ from "jquery";



function App() {

  return (
  
    <div className="App">
    
   

    
<main class="main">



  <aside class="sidebar">
  <img class= "srgt" src={srgt}></img>

    <nav  class="nav">
      <ul>
        <li class="active"><a href="#">Assistant</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </aside>

  <section class="twitter">
  
  <div class="block"><div class="orb"></div> </div>
  <div class="blockmob"><div class="orbmob"></div> </div>
        <div>
        
        <iframe class="chat"
    allow="microphone;"
   
    src="https://console.dialogflow.com/api-client/demo/embedded/8fcaad77-9788-45c7-85cb-2d25b051ec7c">



</iframe>

        </div>

  </section>

</main>

</div>






    
    
  );
}

export default App;
