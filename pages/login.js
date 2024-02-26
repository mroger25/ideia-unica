import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      router.push("/dashboard");
    } else if (username === "admin" && password === "password") {
      router.push("/admin");
    } else {
      setError("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <Head>
        <title>Login - Seu Aplicativo de Escalas</title>
        <meta
          name="description"
          content="Faça login para acessar o Seu Aplicativo de Escalas"
        ></meta>
      </Head>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <button type="submit">Entrar</button>
          {error && <p>{error}</p>}
        </form>
      </main>
    </div>
  );
};

export default Login;
