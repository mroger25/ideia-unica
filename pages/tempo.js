import Link from "next/link";
import { resolve } from "styled-jsx/css";

function Tempo(props) {
  console.log("> Passando pelo Frontend;");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <h1>Tempo</h1>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático - com delay)</div>

      <div>
        <Link href="/">Acessar página Home</Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  console.log("> Passando pelo getStaticProps();");
  console.log("> Adicionando delay de 5 segundos");

  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return { props: { staticDateString } };
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default Tempo;
