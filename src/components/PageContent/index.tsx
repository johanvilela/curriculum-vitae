import { ContactInfo } from "../ContactInfo";
import { TypographyH1 } from "../Typography/TypographyH1";
import { TypographyH2 } from "../Typography/TypographyH2";
import { TypographyH3 } from "../Typography/TypographyH3";
import { TypographyP } from "../Typography/TypographyP";
import { TypographyUl } from "../Typography/TypographyUl";

export function PageContent() {
  return (
    <div>
      <ContactInfo />
      <TypographyH1>FRONTEND DEVELOPER | REACT</TypographyH1>
      <TypographyP>
        Programador React apaixonado por interface de usuário. Adquiri uma
        experiência multidisciplinar desde que comecei estudar desenvolvimento web
        em 2015 ao mesmo tempo em que cursava Ciência da Computação na UFMT.
      </TypographyP>
      <TypographyP>
        Em 1 ano de experiência trabalhando com <b>React</b> na InfoPoint Software
        consegui trazer excelentes <b>resultados</b> para os nossos clientes podendo
        agora monitorar seus negócios online através da plataforma desenvolvida.
      </TypographyP>
      <TypographyP>
        Gosto de <b>compartilhar</b> conhecimento com a comunidade de desenvolvedores,
        participar de eventos e escrever para o meu blog
        <a href="https://www.johanvilela.dev.br"> johanvilela.dev.br</a>
      </TypographyP>
      <TypographyP>
        Tenho facilidade em <b>comunicar</b> de forma clara, explicar conceitos técnicos
        e colaborar com outros desenvolvedores. Capacidade de analisar problemas
        complexos, identificar a causa raiz e encontrar <b>soluções</b> eficazes.
        E sempre gosto de dar e receber feedbacks construtivos.
      </TypographyP>


      <TypographyH2>Experiência</TypographyH2>
      <TypographyH3>
        DESENVOLVEDOR FULLSTACK, INFOPOINT SOFTWARE — ABRIL 2023 ~ ATUALMENTE
      </TypographyH3>
      <TypographyP>
        Atuo como desenvolvedor full stack (frontend e backend) desde a criação
        do protótipo da UI, desenvolvimento, CI/CD pipelines até o deploy da
        aplicação web em um projeto chamado InfoPoint Dashboard.
      </TypographyP>
      <TypographyP>
        A aplicação possui uma interface web para usuários do sistema InfoPoint ERP acessarem pelo navegador os dados e gráficos de vendas e gestão que antes só podiam ser acessados localmente em suas lojas.
      </TypographyP>
      <TypographyP>
        Trouxe ótimos resultados para os clientes, com feedbacks positivos e satisfatórios.
      </TypographyP>
      <TypographyP>
        Resolveu o problema dos gestores que agora possuem acesso às informações de negócios de forma mais simples, direta, e o melhor, de qualquer lugar que estiverem através da internet.
      </TypographyP>
      <TypographyP>O sistema foi construído do zero usando:</TypographyP>
      <TypographyUl>
        <li className="transition-colors">Figma para prototipagem;</li>
        <li className="transition-colors">
          Para a interface web usei React, Typescript, Vite, Tailwind (responsivo para mobile);
        </li>
        <li className="transition-colors">
          Bibliotecas como ApexCharts, Zod, React Query, React-hook-form e Axios (HTTP Web Services);
        </li>
        <li className="transition-colors">
          Versionamento de código usando Git e GitHub com Git Conventional Commits e GitHub Actions para CI/CD;
        </li>
        <li className="transition-colors">
          Para o backend da aplicação criei uma API RESTful com Node.js, Fastify, JWT (JSON Web Token);
        </li>
        <li className="transition-colors">
          Prisma ORM para gerenciar o banco de dados PostgreSQL e containers
          Docker.
        </li>
      </TypographyUl>
      <TypographyP>
        Tenho uma base sólida em HTML5, CSS3 e JavaScript com TypeScript, e também experiência comprovada em React.js.
        <br/>
        Aplico princípios de design responsivo para construir interfaces de usuário interativas e intuitivas.
        <br/>
        Utilizo o Git e GitHub para controle de versão (branches, pull requests, code review e CI/CD).
        <br/>
        Trabalho com metodologias ágeis (SCRUM).
        <br/>
        Tenho habilidade de boa comunicação e sei lidar com resolução de problemas.
        <br/>
        Gosto de trabalhar de forma colaborativa, e acredito que em um time cada pessoa pode ajudar o outro.
        <br/>
        Tenho facilidade em traduzir requisitos de negócios em soluções técnicas eficientes.
      </TypographyP>
      <TypographyH3>FRANQUEADO, MAIS1 CAFÉ — 2021 ~ 2023</TypographyH3>
      <TypographyP>
        Recentemente fui proprietário de uma cafeteria com sistema de
        autoatendimento, portanto sei como lidar com as necessidades olhando
        tanto pela perspectiva do empresário quanto pela perspectiva do
        cliente/usuário, e dessa forma sempre estou em busca de tornar os
        sistemas cada vez melhores, principalmente quando o assunto é
        usabilidade.
      </TypographyP>
      <TypographyH3>DESENVOLVEDOR FULLSTACK, EASYFLOW — 2021</TypographyH3>
      <TypographyP>
        Criei uma ferramenta para automatização de testes de desempenho de redes
        - Ferramenta multi-modular onde utilizei Javascript, Bootstrap, Chart.js
        para criar a interface web, Express.js para a criação da API RESTful e o
        Multi-Generator (MGEN) dentro de containers Docker para a geração de
        tráfego em rede.
      </TypographyP>
      <TypographyH2>Educação</TypographyH2>
      <TypographyP>
        UFMT - Bacharelado em Ciência da Computação - 2014 ~ 2020
      </TypographyP>
      <div className="break-before-page"></div>
      <TypographyH2>Idiomas</TypographyH2>
      <TypographyUl>
        <li className="transition-colors">Inglês avançado;</li>
        <li className="transition-colors">Português fluente;</li>
        <li className="transition-colors">Espanhol básico.</li>
      </TypographyUl>
    </div>
  );
}
