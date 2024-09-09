import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  it('#multiply should return a nine', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.multiply(3,3);
    //Assert
    expect(rta).toEqual(9);
  });
  it('#multiply should return a four', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.multiply(4,1);
    //Assert
    expect(rta).toEqual(4);
  });
  it('#divide should return a some numbers', () => {
    //Arrange
    const calculator = new Calculator();

    //Act & Assert
    expect(calculator.divide(6,3)).toEqual(2);
    expect(calculator.divide(5,2)).toEqual(2.5);
  });
  it('Test matchers', () => {
   let name = 'nicolas';
   let name2;

   expect(name).toBeDefined();
   expect(name2).toBeUndefined();

   expect(1 + 3 === 4).toBeTruthy();
   expect(1 + 1 === 3).toBeFalsy();

   expect(5).toBeLessThan(10);
   expect(20).toBeGreaterThan(10);

   expect('123456').toMatch(/123/);
   expect(['apples', 'oranges', 'pears']).toContain('oranges');

  });
});
