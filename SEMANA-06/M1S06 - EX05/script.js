//[M1S06] Ex 5 - Fetch API
//Construa uma comunicação com a fetch API para a url (https://api.thecatapi.com/v1/images/search?limit=10 ).
// Essa API retorna uma lista de objetos com 10 imagens aleatórias, sua missão será imprimir em um document.write todas as 
//imagens com a seguinte formatação:
//“<img src=’${url_da_imagem}’/> <br />”
//OBS: Para fazer a interação pela lista utilize forEach ou o laço for of.
//A ideia será passar pelo array apenas para pegar a url_da_imagem e ir imprimindo em um document.write() a tag com a formatação dada acima.
//a url_da_imagem virá em cada objeto dentro do array na propriedade url.
//Pra acessar a documentação da API acesse: Report Wrapper - Report Dashboards
//(opcional) Caso queira uma visualização melhor coloque na tag img o atributo width: Ex: width='200'


fetch('https://api.thecatapi.com/v1/images/search?limit=10', { method: "GET"})
.then((responseFecth)=>{
    return responseFecth.json();
})
.then((responseApi) => {
    for (data of responseApi){
        let foto = data.url
        document.write(`<img width='200' src ='${foto}'/><br />`)
    }
})
.catch((err)=>{});