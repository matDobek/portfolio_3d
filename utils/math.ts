export function randInSphere(n: number, r: number): number[] {
  const genPoint = function() {
    return [
      Math.random() * r,
      Math.random() * r,
      Math.random() * r,
    ];
  }

  let points: number[] = Array.from({length: n}, () => {
    let point: number[];

    do
      point = genPoint();
    while ( !isInSphere(point, r) );

    return point;
  });

  return points;
}

function isInSphere(point: number[], r: number): boolean {
  const result = point
    .map((x) => x*x )
    .reduce((acc, x) => acc + x)

  return r*r > result;
}
