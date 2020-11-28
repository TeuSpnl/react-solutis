import React from "react";
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">

    <div className="main-image">
      <img src="" alt="AbrigaLar" />
    </div>
      
      <div className="content">
          
          <main>
              <h1>Você está na melhor idade pra ajudar quem precisa</h1>
              <p>Conheça os asilos e os viste</p>
          </main>

            <Link to= "/map" className="enter-app">
                Conhecer
            </Link>
      </div>
    </div>
  );
}

export default Landing;
