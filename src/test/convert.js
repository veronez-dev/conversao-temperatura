import { expect } from 'chai';
import { fahrenheitCelsius, celsiusFahrenheit } from '../convert';

describe('Conversor de Temperatura', () => {

    it('Deve converter corretamente Fahrenheit para Celsius', done => {
      const resultado = fahrenheitCelsius(131);
      expect(resultado).to.equal(55);
      done();
    });

    it('Deve converter corretamente Celsius para Fahrenheit', done => {
      const resultado = celsiusFahrenheit(55);
      expect(resultado).to.equal(131);
      done();
    });    
  
});