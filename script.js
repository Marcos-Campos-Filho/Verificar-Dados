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
          if (idade >= 0 && idade <= 10) {
               //CRIANÇA
               img.setAttribute('src', 'midia/foto-criança-h-250.png')
          } else if (  idade <= 21 ) {
              //JOVEM
              img.setAttribute('src', 'midia/foto-jovem-h-250.png')
          }else if (idade <= 50) {
              //ADULTO
              img.setAttribute('src', 'midia/foto-adulto-h-250.png')
          }else {
              //IDOSO
              img.setAttribute('src', 'midia/foto-idoso-h-250.png')
          }
       }else if (radius[1].checked) {
          gênero = 'Mulher'
          if (idade >= 0 && idade <= 10) {
            //CRIANÇA
            img.setAttribute('src', 'midia/foto-criança-m-250.png')
       } else if ( idade <= 21 ) {
           //JOVEM
           img.setAttribute('src', 'midia/foto-jovem-m-250.png')
       }else if ( idade <= 50) {
           //ADULTO
           img.setAttribute('src', 'midia/foto-adulto-m-250.png')
       }else {
           //IDOSO
           img.setAttribute('src', 'midia/foto-idoso-m-250.png')
       }
       }else {
           gênero = 'uma pessoa Não-Binâria'
           if (idade >= 0 && idade <= 10) {
            //CRIANÇA
            img.setAttribute('src', 'midia/foto-criança-nb-250.png')
       } else if ( idade <= 21 ) {
           //JOVEM
           img.setAttribute('src', 'midia/foto-jovem-nb-250.png')
       }else if ( idade <= 50) {
           //ADULTO
           img.setAttribute('src', 'midia/foto-adulto-nb-250.png')
       }else {
           //IDOSO
           img.setAttribute('src', 'midia/foto-idoso-nb-250.png')
       }

       } 
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}
