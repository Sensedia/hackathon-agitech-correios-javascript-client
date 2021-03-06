# api_dos_correios

ApiDosCorreios - JavaScript client for api_dos_correios
API de rastreios de Objetos Postais
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_dos_correios --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your api_dos_correios from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('api_dos_correios')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/api_dos_correios
then install it via:

```shell
    npm install YOUR_USERNAME/api_dos_correios --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApiDosCorreios = require('api_dos_correios');

var api = new ApiDosCorreios.CEPApi()

var clientId = "clientId_example"; // {String} Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // {String} Access token usado na autenticaçáo.

var estado = "estado_example"; // {String} Abreviaçáo do Estado.

var opts = { 
  'municipio': "municipio_example" // {String} Nome do Município.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cepEstadoGet(clientId, accessToken, estado, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/correios/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiDosCorreios.CEPApi* | [**cepEstadoGet**](docs/CEPApi.md#cepEstadoGet) | **GET** /cep/{estado} | 
*ApiDosCorreios.EndereosApi* | [**enderecosCepGet**](docs/EndereosApi.md#enderecosCepGet) | **GET** /enderecos/{cep} | 
*ApiDosCorreios.ObjetoPostalApi* | [**eventosTipoEventoGet**](docs/ObjetoPostalApi.md#eventosTipoEventoGet) | **GET** /eventos/{tipoEvento} | 
*ApiDosCorreios.ObjetoPostalApi* | [**objetosCodigoObjetoGet**](docs/ObjetoPostalApi.md#objetosCodigoObjetoGet) | **GET** /objetos/{codigoObjeto} | 
*ApiDosCorreios.ObjetoPostalApi* | [**objetosGet**](docs/ObjetoPostalApi.md#objetosGet) | **GET** /objetos | 
*ApiDosCorreios.PreosApi* | [**precosGet**](docs/PreosApi.md#precosGet) | **GET** /precos | 


## Documentation for Models

 - [ApiDosCorreios.CalculoPrecoFrete](docs/CalculoPrecoFrete.md)
 - [ApiDosCorreios.DetalhesEventos](docs/DetalhesEventos.md)
 - [ApiDosCorreios.Endereco](docs/Endereco.md)
 - [ApiDosCorreios.Erro](docs/Erro.md)
 - [ApiDosCorreios.Eventos](docs/Eventos.md)
 - [ApiDosCorreios.FaixaCEP](docs/FaixaCEP.md)
 - [ApiDosCorreios.ObjetoPostal](docs/ObjetoPostal.md)


## Documentation for Authorization

 All endpoints do not require authorization.

