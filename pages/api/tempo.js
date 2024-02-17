function tempo(req, res) {
  const dynamicDate = new Date();

  res.json({
    date: dynamicDate.toDateString(),
  });
}

export default tempo;
