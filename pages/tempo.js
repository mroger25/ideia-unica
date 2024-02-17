function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toLocaleTimeString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  );
}

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toLocaleTimeString();

  return { props: { staticDateString } };
}

export default Tempo;
