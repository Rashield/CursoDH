let pessoa = [
    {altura: 1.77,
    sexo: "M"},
    {altura: 1.80,
    sexo: "M"},
    {altura: 1.81,
    sexo: "M"},
    {altura: 1.66,
    sexo: "M"},
    {altura: 1.68,
    sexo: "M"},
    {altura: 1.90,
    sexo: "M"},
    {altura: 1.87,
    sexo: "M"},
    {altura: 1.88,
    sexo: "M"},
    {altura: 1.85,
    sexo: "M"},
    {altura: 1.82,
    sexo: "M"},
    {altura: 1.75,
    sexo: "M"},
    {altura: 1.60,
    sexo: "F"},
    {altura: 1.62,
    sexo: "F"},
    {altura: 1.64,
    sexo: "F"},
    {altura: 1.66,
    sexo: "F"}
];

function maxMin(h){
    let maior=0, menor=5;
    for(let x=0;x<h.length;x++){
        if (h[x].altura>maior){
            maior = h[x].altura;
        }else if(h[x].altura<menor){
            menor = h[x].altura;
        }
    }
    console.log("A maior altura é "+ maior+" e a menor é "+menor);
}

function mediaHMulher(h){
    let contaM=0,alt=0;
    for (let x=0;x<h.length;x++){
        if(h[x].sexo=="F"){
            alt += h[x].altura;
            contaM ++;
        }
    }
    let media = (alt/contaM).toFixed(2);
    return media;
}

function contaHomem(h){
    return h.filter(function(x){
        return x.sexo =="M";
    }).length
}

maxMin(pessoa);

console.log(mediaHMulher(pessoa));

console.log(contaHomem(pessoa));