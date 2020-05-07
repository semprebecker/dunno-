document.getElementById('btnRes').onclick = adicionarPessoa;
document.getElementById('btnSexo').onclick = quantidadeSexo;
document.getElementById('btnAlto').onclick = compararAltura;

const listaPessoa = [];
const homens = [];
const mulheres = []

function adicionarPessoa(){
    const pessoa = {
        nome: document.getElementById('txtNome').value,
        sexo: document.getElementById('txtSexo').value,
        altura: document.getElementById('alt').value
    }

    listaPessoa.push(pessoa)
}

function quantidadeSexo(){

    for(let pessoa of listaPessoa){
        if(pessoa.sexo === 'M'){
           homens.push(pessoa);
        } else{
            mulheres.push(pessoa);
        }
    }

    document.getElementById('lblM').innerHTML = `Existem ${homens.length} homens na lista.`
    document.getElementById('lblF').innerHTML = `Existem ${mulheres.length} mulheres na lista.`
}

function compararAltura(){
    let homemAlto;
    let mulherAlta;

    for(let i= 1; i< homens.length; i ++){
        if(homens[i].altura > homens[i-1].altura){
            homemAlto = homens[i];
        } console.log(homens)
    }
    for(let i= 1; i< mulheres.length; i ++){
        if(mulheres[i].altura > mulheres[i-1].altura){
            mulherAlto = mulheres[i];
        } console.log(mulheres)
    }
    document.getElementById('lblAltura').innerHTML = `${mulherAlta.nome} é a maior mulher do grupo, e ${homemAlto.nome} é o maior homem do grupo!`
    
}

