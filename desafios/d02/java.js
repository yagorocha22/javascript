function inicio() {
    var nome = window.prompt('Qual é o seu nome?')
        if (nome != '') {
            var idade = window.prompt(`Olá, ${nome}! Quantos anos voçê tem?`)
            window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
        }
        else {
            window.alert('Não Foi dessa vez')
        }
}