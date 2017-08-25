# ApiDosCorreios.ObjetoPostalApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/correios/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventosTipoEventoGet**](ObjetoPostalApi.md#eventosTipoEventoGet) | **GET** /eventos/{tipoEvento} | 
[**objetosCodigoObjetoGet**](ObjetoPostalApi.md#objetosCodigoObjetoGet) | **GET** /objetos/{codigoObjeto} | 
[**objetosGet**](ObjetoPostalApi.md#objetosGet) | **GET** /objetos | 


<a name="eventosTipoEventoGet"></a>
# **eventosTipoEventoGet**
> [DetalhesEventos] eventosTipoEventoGet(clientId, accessToken, tipoEvento, opts)



Retorna uma lista de possiveis status para um determinado evento.

### Example
```javascript
var ApiDosCorreios = require('api_dos_correios');

var apiInstance = new ApiDosCorreios.ObjetoPostalApi();

var clientId = "clientId_example"; // String | Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // String | Access token usado na autenticaçáo.

var tipoEvento = "tipoEvento_example"; // String | Tipo de evento a ser pesquisado.

var opts = { 
  'statusEvento': "statusEvento_example" // String | Status a ser filtrado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventosTipoEventoGet(clientId, accessToken, tipoEvento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificaçáo do cliente usado na autenticaçáo. | 
 **accessToken** | **String**| Access token usado na autenticaçáo. | 
 **tipoEvento** | **String**| Tipo de evento a ser pesquisado. | 
 **statusEvento** | **String**| Status a ser filtrado. | [optional] 

### Return type

[**[DetalhesEventos]**](DetalhesEventos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="objetosCodigoObjetoGet"></a>
# **objetosCodigoObjetoGet**
> [Eventos] objetosCodigoObjetoGet(clientId, accessToken, codigoObjeto, opts)



Pesquisa por informações relacionadas a um objeto postal especifico.

### Example
```javascript
var ApiDosCorreios = require('api_dos_correios');

var apiInstance = new ApiDosCorreios.ObjetoPostalApi();

var clientId = "clientId_example"; // String | Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // String | Access token usado na autenticaçáo.

var codigoObjeto = "codigoObjeto_example"; // String | Codigo do objeto a ser pesquisado.

var opts = { 
  'tipoEvento': "tipoEvento_example" // String | Tipo de evento a ser filtrado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.objetosCodigoObjetoGet(clientId, accessToken, codigoObjeto, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificaçáo do cliente usado na autenticaçáo. | 
 **accessToken** | **String**| Access token usado na autenticaçáo. | 
 **codigoObjeto** | **String**| Codigo do objeto a ser pesquisado. | 
 **tipoEvento** | **String**| Tipo de evento a ser filtrado. | [optional] 

### Return type

[**[Eventos]**](Eventos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="objetosGet"></a>
# **objetosGet**
> [ObjetoPostal] objetosGet(clientId, accessToken, codigoObjeto)



Pesquisa por informações relacionados a uma lista de objetos postais.

### Example
```javascript
var ApiDosCorreios = require('api_dos_correios');

var apiInstance = new ApiDosCorreios.ObjetoPostalApi();

var clientId = "clientId_example"; // String | Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // String | Access token usado na autenticaçáo.

var codigoObjeto = "codigoObjeto_example"; // String | Lista, separada por virgula, com codigos de objetos postais.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.objetosGet(clientId, accessToken, codigoObjeto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificaçáo do cliente usado na autenticaçáo. | 
 **accessToken** | **String**| Access token usado na autenticaçáo. | 
 **codigoObjeto** | **String**| Lista, separada por virgula, com codigos de objetos postais. | 

### Return type

[**[ObjetoPostal]**](ObjetoPostal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

