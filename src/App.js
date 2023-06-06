import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Irriga from './Irriga.js';
<Route path="/destinations" component={Irriga} />



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MainScreen} />
        <Route path="/destinations" component={Irriga} />
        {/* Adicione outras rotas aqui, se necessário */}
      </div>
    </Router>
  );
}

function MainScreen() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/destinations">Irriga</a>
            </li>
            <li>
              <a href="/about">Dados Agricola</a>
            </li>
            <li>
              <a href="/contact">Monitoramento de pragas</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bem-vindo à Hera</h1>
          <p>
            Explore a inovação na agricultura com o uso da IA para otimizar
            processos e aumentar a produtividade.
          </p>
          <button className="btn-primary">Navegar pelos Recursos</button>
        </section>

        <section className="features">
          <div>
            <h2>Irrigação Inteligente com Monitoramento em Tempo Real</h2>
            <p>
              Desenvolva um sistema de irrigação inteligente alimentado por IA
              para analisar dados em tempo real, como umidade do solo, condições
              climáticas e necessidades específicas das culturas. Essas
              informações são integradas a partir de sensores agrícolas e
              dispositivos conectados, permitindo ajustes automáticos e
              eficientes na irrigação.
            </p>
          </div>
          <div>
            <h2>Integração de Dados Agrícolas e Tomada de Decisão</h2>
            <p>
              A IA generativa é capaz de integrar dados agrícolas provenientes
              de diversas fontes, como sensores agrícolas e máquinas conectadas,
              em um único sistema. Essa integração em tempo real fornece aos
              agricultores informações valiosas sobre o desempenho das culturas,
              condições do solo, uso de recursos e outros aspectos importantes
              da produção agrícola, permitindo tomar decisões informadas e
              otimizar processos.
            </p>
          </div>
          <div>
            <h2>Monitoramento de Pragas e Doenças com Imagens Aéreas</h2>
            <p>
              Utilize drones equipados com câmeras de alta resolução para
              capturar imagens aéreas das plantações. A IA generativa analisará
              essas imagens, identificando padrões e sinais de pragas e doenças.
              Com isso, os agricultores poderão agir rapidamente para mitigar os
              problemas, minimizando os danos às plantações e reduzindo a
              necessidade de pesticidas.
            </p>
          </div>
        </section>

        <section className="additional-content">
          <div className="additional-content-item">
            <img src="url_da_imagem_1" alt="Imagem 1" />
            <h3>Título da Imagem 1</h3>
            <p>Descrição da Imagem 1</p>
          </div>
          <div className="additional-content-item">
            <img src="url_da_imagem_2" alt="Imagem 2" />
            <h3>Título da Imagem 2</h3>
            <p>Descrição da Imagem 2</p>
          </div>
          <div className="additional-content-item">
            <img src="url_da_imagem_3" alt="Imagem 3" />
            <h3>Título da Imagem 3</h3>
            <p>Descrição da Imagem 3</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <p>&copy; 2023 Inovação</p>
          </div>
          <div className="footer-right">
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainScreen;
