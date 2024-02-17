import Link from "next/link";

function Tempo(props) {
  console.log("> Passando pelo Frontend;");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toLocaleTimeString();

  return (
    <div>
      <h1>Tempo</h1>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>

      <Link href="/">Acessar página Home</Link>
    </div>
  );
}

export function getStaticProps() {
  console.log("> Passando pelo getStaticProps();");

  const staticDate = new Date();
  const staticDateString = staticDate.toLocaleTimeString();

  return {
    props: { staticDateString },
    revalidate: 300,
  };
}

export default Tempo;
