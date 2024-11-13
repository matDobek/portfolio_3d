import { randInSphere } from '../math';

describe('randInSphere', () => {
  it('returns array with n elements', () => {
    const result = randInSphere(3, 100);

    expect(result.length).toEqual(3);
  });

  it('returns array with 3-dimensional points', () => {
    const result = randInSphere(1, 100);

    expect(result[0].length).toEqual(3);
  });

  it('returns points within a sphere', () => {
    const subject = randInSphere(1, 100);

    const x = subject[0][0]
    const y = subject[0][1]
    const z = subject[0][2]

    const result = x*x + y*y + z*z <= 100*100

    expect(result).toEqual(true);
  });
});
