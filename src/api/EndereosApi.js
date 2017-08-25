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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Endereco', 'model/Erro'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Endereco'), require('../model/Erro'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDosCorreios) {
      root.ApiDosCorreios = {};
    }
    root.ApiDosCorreios.EndereosApi = factory(root.ApiDosCorreios.ApiClient, root.ApiDosCorreios.Endereco, root.ApiDosCorreios.Erro);
  }
}(this, function(ApiClient, Endereco, Erro) {
  'use strict';

  /**
   * Endereos service.
   * @module api/EndereosApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EndereosApi. 
   * @alias module:api/EndereosApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the enderecosCepGet operation.
     * @callback module:api/EndereosApi~enderecosCepGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Endereco>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pesquisa pelo endereço de um dado CEP.
     * @param {String} clientId Identificaçáo do cliente usado na autenticaçáo.
     * @param {String} accessToken Access token usado na autenticaçáo.
     * @param {String} cep CEP a ser pesquisado.
     * @param {module:api/EndereosApi~enderecosCepGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Endereco>}
     */
    this.enderecosCepGet = function(clientId, accessToken, cep, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling enderecosCepGet");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling enderecosCepGet");
      }

      // verify the required parameter 'cep' is set
      if (cep === undefined || cep === null) {
        throw new Error("Missing the required parameter 'cep' when calling enderecosCepGet");
      }


      var pathParams = {
        'cep': cep
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Endereco];

      return this.apiClient.callApi(
        '/enderecos/{cep}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));