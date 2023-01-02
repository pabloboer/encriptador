
        const logo = document.querySelector('canvas');
        const botonEncriptar = document.querySelector(".boton_encriptar");
        const botonDesencriptar = document.querySelector(".boton_desencriptar");
        const botonCopiar = document.querySelector(".boton_copiar");
        var txtIngresado = document.querySelector(".texto_ingresado");        
        var txtEncriptado = document.querySelector(".txt_encriptado");        
        const Cuadro = document.querySelector(".resultado");        
        const mediaQueryTablet = window.matchMedia('(max-width: 768px)');
        const mediaQueryCel = window.matchMedia('(max-width: 375px)');
        const main =document.querySelector("main");        

        /*function encriptarOLD(){
            txtEncriptado.innerHTML="";
            if(txtIngresado.value =="" || txtIngresado.value== null){
                txtEncriptado.innerHTML="";
                vistaOriginal();
            }
            else{                
                nuevaVista();

                for (let index = 0; index < txtIngresado.value.length; index++) {
                    if(txtIngresado.value[index]==" "){
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + " ";
                    }
                    else if(txtIngresado.value.charCodeAt(index)<0x61 || txtIngresado.value.charCodeAt(index)>122){
                        alert("Error ha ingresado algúna mayúscula o carcter especial");
                        txtEncriptado.innerHTML="";
                        return -1;
                    }                   
                    else if(txtIngresado.value[index]=="e"){
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + "enter";
                    }
                    else if(txtIngresado.value[index]=="i"){
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + "imes";
                    }
                    else if(txtIngresado.value[index]=="a"){
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + "ai";
                    }
                    else if(txtIngresado.value[index]=="o"){
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + "ober";
                    }
                    else if(txtIngresado.value[index]=="u"){
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + "ufat";
                    }
                    else {
                        txtEncriptado.innerHTML=txtEncriptado.innerHTML + txtIngresado.value[index];
                    }
                }
            }
        }
        */
        
        function encriptar(){ 
            if(txtIngresado.value =="" || txtIngresado.value== null){
                txtEncriptado.innerHTML="";
                vistaOriginal();
            }
            else{   
                nuevaVista();

                let arrTxtEncriptado =[];            
                arrTxtEncriptado.push(txtIngresado.value);
                
                let strTxtEncriptado=arrTxtEncriptado.join();
                strTxtEncriptado=strTxtEncriptado.replaceAll("e","enter");
                strTxtEncriptado=strTxtEncriptado.replaceAll("i","imes");
                strTxtEncriptado=strTxtEncriptado.replaceAll("a","ai");
                strTxtEncriptado=strTxtEncriptado.replaceAll("o","ober");
                strTxtEncriptado=strTxtEncriptado.replaceAll("u","ufat");
                txtEncriptado.innerHTML=strTxtEncriptado;
                txtIngresado.value ="";                
            }
        }
        
        function desencriptar(){

            if(txtIngresado.value =="" || txtIngresado.value== null){
                txtEncriptado.innerHTML="";
                vistaOriginal();
            }
            else{   
                nuevaVista();
                let arrTxtDesencriptado =[];            
                arrTxtDesencriptado.push(txtIngresado.value);
                
                let strTxtDesencriptado=arrTxtDesencriptado.join();
                strTxtDesencriptado=strTxtDesencriptado.replaceAll("enter","e");
                strTxtDesencriptado=strTxtDesencriptado.replaceAll("imes","i");
                strTxtDesencriptado=strTxtDesencriptado.replaceAll("ai","a");
                strTxtDesencriptado=strTxtDesencriptado.replaceAll("ober","o");
                strTxtDesencriptado=strTxtDesencriptado.replaceAll("ufat","u");
                txtEncriptado.innerHTML=strTxtDesencriptado;
                txtIngresado.value ="";
            }

        }
        function nuevaVista(){                        
            /* Ocultar imagen */
            let imagenMuñeco = document.querySelector(".Muñeco");
            imagenMuñeco.style.display="none";

            /* Oculatr div msgs vacio */
            let msgVacio = document.querySelector(".msg_vacio");
            let infoTxt = document.querySelector(".info_txt");
            msgVacio.style.display="none";
            infoTxt.style.display="none";

            /* Mostrar párrafo resultado */
            let txtEncriptado = document.querySelector(".txt_encriptado");
            txtEncriptado.style.display="block";

            /* Aparecer boton copiar */
            let botonCopiar = document.querySelector(".boton_copiar");
            botonCopiar.style.margin="49rem 4rem auto auto"
            botonCopiar.style.visibility="visible";

            if (mediaQueryTablet.matches) {
                /* Agrandar rectangulo resultados */
                let cajaResultado = document.querySelector(".resultado");
                cajaResultado.style.padding="0 0 21.43rem 0";                
                const main =document.querySelector("main");
                main.style.padding="0 0 21.43rem 0";
                /* Ocultar imagen */
                /*let imagenMuñeco = document.querySelector(".Muñeco");
                imagenMuñeco.style.display="none";*/
                botonCopiar.style.margin="23.5rem 4.5rem auto auto"
                botonCopiar.style.display="block";
            }

            if (mediaQueryCel.matches) {
                let cajaEntrada = document.querySelector(".entrada");
                cajaEntrada.height ="39rem";                

                let cajaBotones = document.querySelector(".botones");
                cajaBotones.style.margin ="24.31rem 0rem 0rem 0rem";     

                let cajaResultado = document.querySelector(".resultado");
                cajaResultado.style.margin ="24.31rem 0rem 0rem 0rem";  
                cajaResultado.style.padding="0 0 25.62rem 0";       

                const main =document.querySelector("main");
                main.style.padding="0 0 50rem 0";

                botonCopiar.style.margin="31.5rem 2.5rem auto auto"
                botonCopiar.style.display="block";
            }
        }
        function vistaOriginal(){
            /* Mostrar imagen */
            let imagenMuñeco = document.querySelector(".Muñeco");
            imagenMuñeco.style.display="block";

            /* Mostrar div msgs vacio */
            let msgVacio = document.querySelector(".msg_vacio");
            msgVacio.style.display="block";
            let infotxt = document.querySelector(".info_txt");
            infotxt.style.display="block";
            /* Ocultar párrafo resultado */
            let txtEncriptado = document.querySelector(".txt_encriptado");
            txtEncriptado.style.display="block";
            /* Borrar boton copiar */
            let botonCopiar = document.querySelector(".boton_copiar");
            /*botonCopiar.style.display="none";*/
            botonCopiar.style.visibility="hidden";
            botonCopiar.style.margin="0";

            if (mediaQueryTablet.matches) {
                /* Achicar rectangulo resultados */
                let cajaResultado = document.querySelector(".resultado");
                cajaResultado.style.padding="0 0 0 0";
                const main =document.querySelector("main");
                main.style.padding="0 0 0 0";
                let imagenMuñeco = document.querySelector(".Muñeco");
                imagenMuñeco.style.display="none";
                /*let srcImagenMuñeco = document.querySelector(".img_muñeco");
                srcImagenMuñeco.display="none";*/
            }
            if (mediaQueryCel.matches) {
                let cajaEntrada = document.querySelector(".entrada");
                cajaEntrada.height ="18.5rem";                

                let cajaBotones = document.querySelector(".botones");
                cajaBotones.style.margin ="0";

                let cajaResultado = document.querySelector(".resultado");
                cajaResultado.style.margin ="0";  
                cajaResultado.style.padding="0";       

                const main =document.querySelector("main");
                main.style.padding="0";

                botonCopiar.style.margin="31.5rem 2.5rem auto auto"
                botonCopiar.style.display="none";
            }   
        }
        function copiarTxt(){
           navigator.clipboard.writeText(txtEncriptado.innerHTML);
        }
        function recargar(evento){            
            location.reload();
        }

        botonEncriptar.onclick = encriptar;
        botonDesencriptar.onclick = desencriptar;
        botonCopiar.onclick = copiarTxt;
        
        logo.onclick = recargar;
