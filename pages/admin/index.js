import React from "react";
import Head from "next/head";

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
          equipes, turnos, etc.
        </p>
        {/* Adicione componentes e funcionalidades específicas do painel de administração */}
      </main>
    </div>
  );
};

export default AdminDashboard;
