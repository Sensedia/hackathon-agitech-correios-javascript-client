/**
 * API dos Correios
 * API de rastreios de Objetos Postais
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDosCorreios);
  }
}(this, function(expect, ApiDosCorreios) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiDosCorreios.Endereco();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Endereco', function() {
    it('should create an instance of Endereco', function() {
      // uncomment below and update the code to test Endereco
      //var instane = new ApiDosCorreios.Endereco();
      //expect(instance).to.be.a(ApiDosCorreios.Endereco);
    });

    it('should have the property logradouro (base name: "logradouro")', function() {
      // uncomment below and update the code to test the property logradouro
      //var instane = new ApiDosCorreios.Endereco();
      //expect(instance).to.be();
    });

    it('should have the property bairro (base name: "bairro")', function() {
      // uncomment below and update the code to test the property bairro
      //var instane = new ApiDosCorreios.Endereco();
      //expect(instance).to.be();
    });

    it('should have the property municipio (base name: "municipio")', function() {
      // uncomment below and update the code to test the property municipio
      //var instane = new ApiDosCorreios.Endereco();
      //expect(instance).to.be();
    });

    it('should have the property uf (base name: "uf")', function() {
      // uncomment below and update the code to test the property uf
      //var instane = new ApiDosCorreios.Endereco();
      //expect(instance).to.be();
    });

  });

}));
