import { randInSphere } from '../math';

describe('randInSphere', () => {
  it('returns array with n 3d-vectors', () => {
    const result = randInSphere(3, 100);

    expect(result.length).toEqual(3*3);
  });

  it('returns points within a sphere', () => {
    const subject = randInSphere(1, 100);

    const x = subject[0]
    const y = subject[1]
    const z = subject[2]

    const result = x*x + y*y + z*z <= 100*100

    expect(result).toEqual(true);
  });
});
