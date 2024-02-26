import React from "react";
import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Seu aplicativo de escalas</title>
        <meta
          name="description"
          content="Bem-vindo ao Seu Aplicativo de Escalas"
        />
      </Head>

      <main>
        <h1>Bem-vindo ao Seu Aplicativo de Escalas</h1>
        <p>
          Aqui você pode gerenciar suas escalas de trabalho de forma simples e
          eficiente.
        </p>
        <p>Faça login para começar.</p>
        <Link href="/login" className="link-login">
          Ir para a página de login
        </Link>
      </main>
    </div>
  );
}

export default Home;
