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
        experiência multidisciplinar desde que comecei com o desenvolvimento web
        em 2015 ao mesmo tempo em que cursava Ciência da Computação na UFMT.
      </TypographyP>
      <TypographyH2>Experiência</TypographyH2>
      <TypographyH3>
        DESENVOLVEDOR FULLSTACK, INFOPOINT SOFTWARE — ABRIL 2023 ~ ATUALMENTE
      </TypographyH3>
      <TypographyP>
        Atuo como desenvolvedor fullstack desde a criação do protótipo da UI,
        desenvolvimento, CI/CD pipelines até o deploy da aplicação web em um
        projeto chamado InfoPoint Dashboard. A aplicação possui uma interface
        web para usuários do sistema InfoPoint ERP (em Delphi) acessarem pelo
        navegador os dados e gráficos de vendas e gestão que antes só podiam ser
        acessados localmente em suas lojas.
      </TypographyP>
      <TypographyP>O sistema foi construído do zero usando:</TypographyP>
      <TypographyUl>
        <li>Figma para prototipagem;</li>
        <li>
          Para a interface web usei React, Typescript, Vite, Tailwind
          (responsivo para mobile);
        </li>
        <li>
          Bibliotecas como ApexCharts, Zod, React Query, React-hook-form e
          Axios;
        </li>
        <li>
          Versionamento de código usando Git e GitHub com Git Conventional
          Commits e GitHub Actions para CI/CD;
        </li>
        <li>
          Para o backend da aplicação criei uma API RESTful com Node.js,
          Fastify, JWT (JSON Web Token);
        </li>
        <li>
          Prisma ORM para gerenciar o banco de dados PostgreSQL e containers
          Docker.
        </li>
      </TypographyUl>
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
      <TypographyH2>Idiomas</TypographyH2>
      <TypographyUl>
        <li>Inglês fluente;</li>
        <li>Português fluente;</li>
        <li>Espanhol básico.</li>
      </TypographyUl>
    </div>
  );
}
