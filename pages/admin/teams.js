import React, { useState } from "react";
import Head from "next/head";

const TeamsPage = () => {
  // Exemplo de dados de equipes (pode ser substituído por dados reais do seu backend)
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Equipe A",
      description: "Descrição da Equipe A",
      members: ["João", "Maria"],
    },
    {
      id: 2,
      name: "Equipe B",
      description: "Descrição da Equipe B",
      members: ["Pedro", "Ana"],
    },
    // Adicione mais equipes conforme necessário
  ]);

  // Estados para o formulário de adição de equipe
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamDescription, setNewTeamDescription] = useState("");

  // Função para adicionar uma nova equipe
  const addNewTeam = () => {
    const newTeam = {
      id: teams.length + 1,
      name: newTeamName,
      description: newTeamDescription,
      members: [],
    };
    setTeams([...teams, newTeam]);
    setNewTeamName("");
    setNewTeamDescription("");
  };

  // Função para excluir uma equipe
  const deleteTeam = (id) => {
    const updatedTeams = teams.filter((team) => team.id !== id);
    setTeams(updatedTeams);
  };

  return (
    <div>
      <Head>
        <title>Gerenciar Equipes - Seu Aplicativo de Escalas</title>
        <meta
          name="description"
          content="Página de Gerenciamento de Equipes do Seu Aplicativo de Escalas"
        />
      </Head>
      <main>
        <h1>Gerenciar Equipes</h1>

        {/* Formulário para adicionar uma nova equipe */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNewTeam();
          }}
        >
          <input
            type="text"
            placeholder="Nome da Equipe"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descrição da Equipe"
            value={newTeamDescription}
            onChange={(e) => setNewTeamDescription(e.target.value)}
            required
          />
          <button type="submit">Adicionar Equipe</button>
        </form>

        {/* Lista de equipes existentes */}
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
              <div>
                <strong>{team.name}</strong> - {team.description}
              </div>
              <div>Membros: {team.members.join(", ")}</div>
              <button onClick={() => deleteTeam(team.id)}>
                Excluir Equipe
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TeamsPage;
