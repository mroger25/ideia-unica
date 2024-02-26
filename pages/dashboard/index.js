import React from "react";
import Head from "next/head";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard - Seu Aplicativo de Escalas</title>
        <meta
          name="description"
          content="Dashboard do Seu Aplicativo de Escalas"
        />
      </Head>
      <main>
        <h1>Dashboard</h1>
        <p>Bem-vindo ao seu painel de controle.</p>
        <ul>
          <li>
            <Link href="/dashboard/schedule">Ver Escala</Link>
          </li>
          <li>
            <Link href="/dashboard/requests">Solicitações de Troca</Link>
          </li>
          <li>
            <Link href="/dashboard/absences">Ausências</Link>
          </li>
          {/* Adicione mais links para outras funcionalidades do dashboard, se necessário */}
        </ul>
      </main>
    </div>
  );
};

export default Dashboard;
