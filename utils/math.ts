export function randInSphere(n: number, r: number): Float32Array {
  const genVector = function(): number[] {
    return [
      Math.random() * r,
      Math.random() * r,
      Math.random() * r,
    ];
  }

  const isInSphere = function(vec: number[], r: number): boolean {
    const result = vec
      .map((x) => x*x )
      .reduce((acc, x) => acc + x)

    return r*r > result;
  }

  const result = new Float32Array(n*3);

  for(let i = 0; i <= result.length - 3; i += 3) {
    let vec: number[];

    do
      vec = genVector();
    while( !isInSphere(vec, r) );

    result[i] = vec[0];
    result[i+1] = vec[1];
    result[i+2] = vec[2];
  }

  return result;
}
