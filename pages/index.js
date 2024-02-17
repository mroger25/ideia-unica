import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href="/tempo">Acessar página Tempo</Link>
      </div>
      <div>
        <Link href="/sobre">Acessar página Sobre</Link>
      </div>
    </div>
  );
}

export default Home;
