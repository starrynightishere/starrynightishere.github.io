// Two families of curves form a projected hyperbolic paraboloid.
const surface = document.getElementById('surface');
if (surface) {
  const paths = [];
  const project = (u, v) => [200 + (u - v) * 83.64, 205 + (u + v) * 34.68 - (u * u - v * v) * 42];
  for (let family = 0; family < 2; family++) {
    for (let i = 0; i <= 20; i++) {
      const fixed = -1 + i / 10;
      const points = [];
      for (let j = 0; j <= 60; j++) {
        const variable = -1 + j / 30;
        const [x, y] = family === 0 ? project(fixed, variable) : project(variable, fixed);
        points.push(`${j === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`);
      }
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', points.join(' '));
      paths.push(path);
    }
  }
  surface.replaceChildren(...paths);
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
