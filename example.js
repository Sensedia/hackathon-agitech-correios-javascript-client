var clientId = ""; // {String} Customer identifier used for authentication.
var accessToken = ""; // {String} Access token used in the authentication.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Response: ' + JSON.stringify(response));
  }
};
var ApiDosCorreios = require('api_dos_correios');

var api = new ApiDosCorreios.CEPApi()
var estado = "sp"; // {String} Abreviaçáo do Estado.
var opts = { 
  'municipio': "Campinas" // {String} Nome do Município.
};
//api.cepEstadoGet(clientId, accessToken, estado, opts, callback);


var apiInstance = new ApiDosCorreios.EndereosApi();
var cep = "11025032"; // String | CEP a ser pesquisado.
//apiInstance.enderecosCepGet(clientId, accessToken, cep, callback);


var apiInstance = new ApiDosCorreios.ObjetoPostalApi();
var tipoEvento = "BDE"; // String | Tipo de evento a ser pesquisado.
var opts = { 
  'statusEvento': 3 // String | Status a ser filtrado.
};
//apiInstance.eventosTipoEventoGet(clientId, accessToken, tipoEvento, opts, callback);


var codigoObjeto = "PJ841336451BR"; // String | Codigo do objeto a ser pesquisado.
var opts = { 
  'tipoEvento': "DO" // String | Tipo de evento a ser filtrado.
};
//apiInstance.objetosCodigoObjetoGet(clientId, accessToken, codigoObjeto, opts, callback);


var codigoObjeto = "PL177497655BR,PN806431385BR,PN806425169BR,PN628016090BR,OB000428823BR,DU949325316BR,DU941658511BR,DU922066312BR,DU843627514BR,PN341022114BR,PJ841336451BR"; // String | Lista, separada por virgula, com codigos de objetos postais.
//apiInstance.objetosGet(clientId, accessToken, codigoObjeto, callback);


var apiInstance = new ApiDosCorreios.PreosApi();
var codigoServico = "40010"; // String | Pode conter mais de um código por consulta separados por virgula. 40010 - SEDEX Varejo, 40045 - SEDEX a Cobrar Varejo, 40215 - SEDEX 10 Varejo, 40290 - SEDEX Hoje Varejo, 41106 - PAC Varejo
var cepOrigem = "11025032"; // String | CEP de Origem sem hífen.Exemplo: 05311900
var cepDestino = "12025020"; // String | CEP de Destino sem hífen
var peso = 1; // Number | Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg
var formato = 1; // Number | Formato da encomenda (incluindo embalagem). 1 - Formato caixa/pacote, 2 - Formato rolo/prisma, 3 - Envelope
var comprimento = 16; // Number | Comprimento da encomenda (incluindo embalagem), em centímetros.
var altura = 10; // Number | Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0).
var largura = 11; // Number | Largura da encomenda (incluindo embalagem), em centímetros.
var diametro = 10; // Number | Diâmetro da encomenda (incluindo embalagem), em centímetros.
var opts = { 
  'servicoMaoPropria': "N", // String | Indica se a encomenda será entregue com o serviço adicional mão própria. Valores possíveis: S ou N (S - Sim, N - Não)
  'valorDeclarado': 0, // Number | Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais.
  'avisoRecebimento': "N", // String | Indica se a encomenda será entregue com o serviço adicional aviso de recebimento. Valores possíveis: S ou N (S - Sim, N - Não)
  'codigoEmpresa': "", // String | Seu código administrativo junto à ECT. O código está disponível no corpo do contrato firmado com os Correios.
  'senhaEmpresa': "" // String | Senha para acesso ao serviço, associada ao seu código administrativo. A senha inicial corresponde aos 8 primeiros dígitos do CNPJ informado no contrato.
};
apiInstance.precosGet(clientId, accessToken, codigoServico, cepOrigem, cepDestino, peso, formato, comprimento, altura, largura, diametro, opts, callback);
