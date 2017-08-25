# ApiDosCorreios.CEPApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/correios/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cepEstadoGet**](CEPApi.md#cepEstadoGet) | **GET** /cep/{estado} | 


<a name="cepEstadoGet"></a>
# **cepEstadoGet**
> [FaixaCEP] cepEstadoGet(clientId, accessToken, estado, opts)



Pesquisa pela faixa de CEPs nos municipios de um Estado.

### Example
```javascript
var ApiDosCorreios = require('api_dos_correios');

var apiInstance = new ApiDosCorreios.CEPApi();

var clientId = "clientId_example"; // String | Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // String | Access token usado na autenticaçáo.

var estado = "estado_example"; // String | Abreviaçáo do Estado.

var opts = { 
  'municipio': "municipio_example" // String | Nome do Município.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cepEstadoGet(clientId, accessToken, estado, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificaçáo do cliente usado na autenticaçáo. | 
 **accessToken** | **String**| Access token usado na autenticaçáo. | 
 **estado** | **String**| Abreviaçáo do Estado. | 
 **municipio** | **String**| Nome do Município. | [optional] 

### Return type

[**[FaixaCEP]**](FaixaCEP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

