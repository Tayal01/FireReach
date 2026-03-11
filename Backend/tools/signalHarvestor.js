async function signalHarvester(company) {
  const signals = [
    `${company} recently raised a new funding round.`,
    `${company} is actively hiring software engineers and product developers.`,
    `${company} is expanding its engineering and product teams.`,
    `${company} is scaling its platform to support more users.`,
  ];

  return {
    company: company,
    signals: signals,
  };
}

module.exports = signalHarvester;
