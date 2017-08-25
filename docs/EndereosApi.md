# ApiDosCorreios.EndereosApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/correios/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enderecosCepGet**](EndereosApi.md#enderecosCepGet) | **GET** /enderecos/{cep} | 


<a name="enderecosCepGet"></a>
# **enderecosCepGet**
> [Endereco] enderecosCepGet(clientId, accessToken, cep)



Pesquisa pelo endereço de um dado CEP.

### Example
```javascript
var ApiDosCorreios = require('api_dos_correios');

var apiInstance = new ApiDosCorreios.EndereosApi();

var clientId = "clientId_example"; // String | Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // String | Access token usado na autenticaçáo.

var cep = "cep_example"; // String | CEP a ser pesquisado.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.enderecosCepGet(clientId, accessToken, cep, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificaçáo do cliente usado na autenticaçáo. | 
 **accessToken** | **String**| Access token usado na autenticaçáo. | 
 **cep** | **String**| CEP a ser pesquisado. | 

### Return type

[**[Endereco]**](Endereco.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

