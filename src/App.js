import React from 'react';
import './styles/styles.sass';
import Curso from './Curso';

const App = () => {
  return(
    <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="city.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Mi primer Proyecto en EDTeam</p>
            <p>Realizando los cursos de edteam y viendo videos de como realizarlo</p>
            <a href="https://www.google.com.bo" className="button">Ingresar</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
    </>
  );
}

export default App;
