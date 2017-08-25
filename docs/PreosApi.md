# ApiDosCorreios.PreosApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/correios/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**precosGet**](PreosApi.md#precosGet) | **GET** /precos | 


<a name="precosGet"></a>
# **precosGet**
> [CalculoPrecoFrete] precosGet(clientId, accessToken, codigoServico, cepOrigem, cepDestino, peso, formato, comprimento, altura, largura, diametro, opts)



Cálculo de Preços por CEP de origem, CEP de destino e tipo de entrega.

### Example
```javascript
var ApiDosCorreios = require('api_dos_correios');

var apiInstance = new ApiDosCorreios.PreosApi();

var clientId = "clientId_example"; // String | Identificaçáo do cliente usado na autenticaçáo.

var accessToken = "accessToken_example"; // String | Access token usado na autenticaçáo.

var codigoServico = "codigoServico_example"; // String | Pode conter mais de um código por consulta separados por virgula. 40010 - SEDEX Varejo, 40045 - SEDEX a Cobrar Varejo, 40215 - SEDEX 10 Varejo, 40290 - SEDEX Hoje Varejo, 41106 - PAC Varejo

var cepOrigem = "cepOrigem_example"; // String | CEP de Origem sem hífen.Exemplo: 05311900

var cepDestino = "cepDestino_example"; // String | CEP de Destino sem hífen

var peso = 56; // Number | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg

var formato = 56; // Number | Formato da encomenda (incluindo embalagem). 1 - Formato caixa/pacote, 2 - Formato rolo/prisma, 3 - Envelope

var comprimento = 56; // Number | Comprimento da encomenda (incluindo embalagem), em centímetros.

var altura = 56; // Number | Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0).

var largura = 56; // Number | Largura da encomenda (incluindo embalagem), em centímetros.

var diametro = 56; // Number | Diâmetro da encomenda (incluindo embalagem), em centímetros.

var opts = { 
  'servicoMaoPropria': "N", // String | Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S - Sim, N - Não)
  'valorDeclarado': 56, // Number | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais.
  'avisoRecebimento': "N", // String | Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S - Sim, N - Não)
  'codigoEmpresa': "codigoEmpresa_example", // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios.
  'senhaEmpresa': "senhaEmpresa_example" // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.precosGet(clientId, accessToken, codigoServico, cepOrigem, cepDestino, peso, formato, comprimento, altura, largura, diametro, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificaçáo do cliente usado na autenticaçáo. | 
 **accessToken** | **String**| Access token usado na autenticaçáo. | 
 **codigoServico** | **String**| Pode conter mais de um código por consulta separados por virgula. 40010 - SEDEX Varejo, 40045 - SEDEX a Cobrar Varejo, 40215 - SEDEX 10 Varejo, 40290 - SEDEX Hoje Varejo, 41106 - PAC Varejo | 
 **cepOrigem** | **String**| CEP de Origem sem hífen.Exemplo: 05311900 | 
 **cepDestino** | **String**| CEP de Destino sem hífen | 
 **peso** | **Number**| Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg | 
 **formato** | **Number**| Formato da encomenda (incluindo embalagem). 1 - Formato caixa/pacote, 2 - Formato rolo/prisma, 3 - Envelope | 
 **comprimento** | **Number**| Comprimento da encomenda (incluindo embalagem), em centímetros. | 
 **altura** | **Number**| Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0). | 
 **largura** | **Number**| Largura da encomenda (incluindo embalagem), em centímetros. | 
 **diametro** | **Number**| Diâmetro da encomenda (incluindo embalagem), em centímetros. | 
 **servicoMaoPropria** | **String**| Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S - Sim, N - Não) | [optional] [default to N]
 **valorDeclarado** | **Number**| Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais. | [optional] 
 **avisoRecebimento** | **String**| Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S - Sim, N - Não) | [optional] [default to N]
 **codigoEmpresa** | **String**| Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios. | [optional] 
 **senhaEmpresa** | **String**| Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato. | [optional] 

### Return type

[**[CalculoPrecoFrete]**](CalculoPrecoFrete.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

