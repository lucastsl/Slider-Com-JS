const btnSetaVoltar = document.querySelector(".btn1");

const btnSetaAvancar = document.querySelector(".btn2");

const imagemCarrossel = document.querySelectorAll(".imagem");

const infoCarrossel = document.querySelectorAll(".informacoes");

const btnOpacit = document.querySelector(".select");

let imagem = 0



    btnSetaAvancar.addEventListener("click", () => {
        if(imagem === 3){
            return;
        }
        imagem++;

        removendoOpacitBtnVoltar();       
        addOpacityNoUltimoBtnAvancar();
        removendoImG();
        addImg();
        removendoInfo();
        addInfo();


        function addInfo() {
            infoCarrossel[imagem].classList.add("ativa");
        }

        function removendoInfo() {
            const mudarInfo = document.querySelector(".ativa");
            mudarInfo.classList.remove("ativa");
        }

        function addImg() {
            imagemCarrossel[imagem].classList.add("mudar");
        }

        function removendoImG() {
            const mudarImagem = document.querySelector(".mudar");
            mudarImagem.classList.remove("mudar");
        }

        function addOpacityNoUltimoBtnAvancar() {
            const ultimaImg = 3;
            if (imagem !== 0 && imagem === ultimaImg) {
                btnSetaAvancar.classList.add("select");
            }
        }

        function removendoOpacitBtnVoltar() {
            if (imagem !== 0) {
                btnOpacit.classList.remove("select");
            }
        }
    })

    
    btnSetaVoltar.addEventListener("click", () => {
        if(imagem === 0){
            return;
        }
        imagem--;

        removendoOpacitBtnAvancar();
        addOpacityNaPrimeiraBtnVoltar();
        removendoImagem();
        addImagem();
        removendoInformacoes();
        addInformacoes();


        function addInformacoes() {
            infoCarrossel[imagem].classList.add("ativa");
        }

        function removendoInformacoes() {
            const mudarInfo = document.querySelector(".ativa");
            mudarInfo.classList.remove("ativa");
        }

        function addImagem() {
            imagemCarrossel[imagem].classList.add("mudar");
        }

        function removendoImagem() {
            const mudarImagem = document.querySelector(".mudar");
            mudarImagem.classList.remove("mudar");
        }

        function addOpacityNaPrimeiraBtnVoltar() {
            if (imagem === 0) {
                btnSetaVoltar.classList.add("select");
            }
        }

        function removendoOpacitBtnAvancar() {
            if (imagem !== 3) {
                btnSetaAvancar.classList.remove("select");
            }
        }
    })





