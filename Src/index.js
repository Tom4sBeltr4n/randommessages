const nombres = ["Óscar", "Ana", "Nikolai", "Jessica"];
function randomMsg()
{
  let n = Math.random()*nombres.length;
  const message = nombres[Math.floor(n)];
  console.log(message);
  console.log(n)
}

module.exports = {randomMsg}
