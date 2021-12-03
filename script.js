function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert("*[ERRO]* Verifique os dados e tente novamente!")
    } else {
       var radius = document.querySelectorAll("input[type='radio']")
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute ('img','foto')
       if (radius[0].checked) {
          gênero = 'Homem'
       }else if (radius[1].checked) {
          gênero = 'Mulher'
       }else {
           gênero = 'uma pessoa Não-Binâria'
       } 
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}
