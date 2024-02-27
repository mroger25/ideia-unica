import React from "react";
import Head from "next/head";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div>
      <Head>
        <title>Painel de Administração - Seu Aplicativo de Escalas</title>
        <meta
          name="description"
          content="Painel de Administração do Seu Aplicativo de Escalas"
        />
      </Head>
      <main>
        <h1>Painel de Administração</h1>
        <p>
          Bem-vindo ao painel de administração. Aqui você pode gerenciar
          equipes, turnos, solicitações e muito mais.
        </p>
        <ul>
          <li>
            <Link href={"/admin/teams"}>Gerenciar Equipes</Link>
          </li>
          <li>
            <Link href={"/admin/shifts"}>Gerenciar Turnos</Link>
          </li>
          <li>
            <Link href={"/admin/requests"}>Aprovar Solicitações</Link>
          </li>
          <li>
            <Link href={"/admin/reports"}>Gerar Relatórios</Link>
          </li>
          {/* Adicione mais links para outras funcionalidades de administração, conforme necessário */}
        </ul>
      </main>
    </div>
  );
};

export default AdminDashboard;
