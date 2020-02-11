import React, { useState, useEffect } from 'react';
import './style.css'
import PlyrVideo from '../../components/PlyrVideo';

function App() {
  const handleexpanded = (e) => {
    const elem = e.target;
    let chapter = elem.closest('.chapter');    
    let chatpterItems = chapter.querySelector('.chapter-items');
    let icon = elem.parentNode.querySelector('i');
    
    if (chapter.getAttribute('expanded') === 'true') {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      chapter.setAttribute('expanded','false');
      chatpterItems.style.display = 'none';
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      chapter.setAttribute('expanded','true');
      chatpterItems.style.display = 'block';
    }       
  }

  return (
    <div className="container">
        <div className="video">
          <PlyrVideo/>
        </div>        
        <div className="sidebar">
          <ul>
            <li className="chapter" expanded="true">
              <div className="chapter-title" onClick={((e) => handleexpanded(e))}>
                <i class="fas fa-chevron-down"></i> <strong>Capitulo 1</strong>
              </div>
              <ul className="chapter-items">
                <li className="active"><div className="check"><i class="fas fa-check-circle"></i></div><strong>1. Apresentação do curso</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>2. Boas Vindas</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>3. Revisão</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>4. Pré-requisitos</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>5. Questionário</strong><p>Teste</p></li>
              </ul>
            </li>
            <li className="chapter" expanded="true">
              <div className="chapter-title" onClick={((e) => handleexpanded(e))}>
                <i class="fas fa-chevron-down"></i> <strong>Capitulo 2</strong>
              </div>
              <ul className="chapter-items">
                <li className="active"><div className="check"><i class="fas fa-check-circle"></i></div><strong>1. Apresentação do curso</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>2. Boas Vindas</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>3. Revisão</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>4. Pré-requisitos</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>5. Questionário</strong><p>Teste</p></li>
              </ul>
            </li>       
            <li className="chapter" expanded="true">
              <div className="chapter-title" onClick={((e) => handleexpanded(e))}>
                <i class="fas fa-chevron-down"></i> <strong>Capitulo 2</strong>
              </div>
              <ul className="chapter-items">
                <li className="active"><div className="check"><i class="fas fa-check-circle"></i></div><strong>1. Apresentação do curso</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>2. Boas Vindas</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>3. Revisão</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>4. Pré-requisitos</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>5. Questionário</strong><p>Teste</p></li>
              </ul>
            </li>   
            <li className="chapter" expanded="true">
              <div className="chapter-title" onClick={((e) => handleexpanded(e))}>
                <i class="fas fa-chevron-down"></i> <strong>Capitulo 2</strong>
              </div>
              <ul className="chapter-items">
                <li className="active"><div className="check"><i class="fas fa-check-circle"></i></div><strong>1. Apresentação do curso</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>2. Boas Vindas</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>3. Revisão</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>4. Pré-requisitos</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>5. Questionário</strong><p>Teste</p></li>
              </ul>
            </li>   
            <li className="chapter" expanded="true">
              <div className="chapter-title" onClick={((e) => handleexpanded(e))}>
                <i class="fas fa-chevron-down"></i> <strong>Capitulo 2</strong>
              </div>
              <ul className="chapter-items">
                <li className="active"><div className="check"><i class="fas fa-check-circle"></i></div><strong>1. Apresentação do curso</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>2. Boas Vindas</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>3. Revisão</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>4. Pré-requisitos</strong><p>Teste</p></li>
                <li><div className="check"><i class="far fa-circle"></i></div><strong>5. Questionário</strong><p>Teste</p></li>
              </ul>
            </li>                    
          </ul>          
        </div>
        <div className="content">
          <h1>Sobre este curso</h1>
          Crie sites com design elegante em poucas linhas de código usando Adobe XD, Bootstrap 4, FontAwesome e DataTables
        </div>
    </div>
  );
}

export default App;
