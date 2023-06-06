import React from 'react';


function IrrigacaoInteligente() {
  return (
    <div>
         <link rel="stylesheet" href="caminho_para_o_arquivo_css/irrigacao.css" /> {/* Adicione esta linha para vincular o arquivo CSS */}
      
      {/* Conteúdo da página de irrigação inteligente */}
      <div className="container">
        {/* ...conteúdo... */}
      </div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/inteligente">Irrigação inteligente</a>
            </li>
            <li>
              <a href="/about">Dados Agrícolas</a>
            </li>
            <li>
              <a href="/contact">Monitoramento de pragas</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Irrigação Inteligente com Monitoramento em Tempo Real</h1>
          <p>
            Desenvolva um sistema de irrigação inteligente alimentado por IA
            para analisar dados em tempo real, como umidade do solo, condições
            climáticas e necessidades específicas das culturas. Essas
            informações são integradas a partir de sensores agrícolas e
            dispositivos conectados, permitindo ajustes automáticos e
            eficientes na irrigação.
          </p>
          <button className="btn-primary">Explorar Recursos de Irrigação Inteligente</button>
        </section>

        <section className="features">
          {/* Conteúdo adicional da página de irrigação inteligente */}
        </section>

        <section className="additional-content">
          {/* Conteúdo adicional da página de irrigação inteligente */}
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

export default IrrigacaoInteligente;
