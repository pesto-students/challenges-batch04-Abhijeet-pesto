import { accessorProperties } from './accessorProperties';

describe('Accessor propery Test', () => {
  test('Should return object', () => {
    const obj = accessorProperties();
    expect(typeof (obj)).toEqual('object');
  });

  test('Should throw error for invalid value', () => {
    const obj = accessorProperties();
    expect(() => { obj.number = '6'; }).toThrow();
  });

  test('Should return binary equivalent', () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toEqual('100100');
  });
});
