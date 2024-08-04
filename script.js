const mensaje = document.querySelector('.mensaje');
const signo = document.querySelector('.signo');
const encriptado = document.querySelector('.encriptado');
const palabra = document.getElementById('textoIngresado');
const mensajeInfo = document.getElementById('mensaje-info');



const encriptar = ()=>{

    const texto = palabra.value;

    if (/^[a-z\s]+$/.test(texto)) {

        let contenido = texto.replaceAll(/a|e|i|o|u/g, match=>{
            switch (match) {
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat';
                
                default:
                    break;
            }
        });

        encriptado.innerHTML = `<div class="palabraEncriptada">
            <p class="miTexto">${contenido}</p>
            <div class="prueba"><button onclick="copiarTexto()">Copiar</button></div>
        </div>`

        palabra.value = '';
        palabra.focus();
    }else{
        mensajeInfo.textContent = "Solo letras minúsculas y sin acentos"
        mensajeInfo.style.display = 'block';

        setTimeout(() =>{
            mensajeInfo.style.display = 'none';
        }, 2000);

    }
}

const desencriptar = ()=>{

    const texto = palabra.value;

    if(/^[a-z\s]+$/.test(texto)){

        let contenido = texto.replaceAll(/ai|enter|imes|ober|ufat/g, match =>{
            switch (match) {
                case 'ai': return 'a';
                case 'enter': return 'e';
                case 'imes': return 'i';
                case 'ober': return 'o';
                case 'ufat': return 'u';
            
                default:
                    break;
            }
        })
    
        encriptado.innerHTML = `<div class="palabraEncriptada">
                    <p class="miTexto">${contenido}</p>
                    <div class="prueba"><button onclick="copiarTexto()">Copiar</button></div>
                </div>`;

        palabra.value = '';
        palabra.focus();

    }else{
        mensajeInfo.textContent = "Solo letras minúsculas y sin acentos";
        mensajeInfo.style.display = 'block';

        setTimeout(() =>{
            mensajeInfo.style.display = 'none';
        }, 2000);

    }
}


const copiarTexto = async () => {

    const miTexto = document.querySelector('.miTexto').innerHTML;
    try {
        await navigator.clipboard.writeText(miTexto);
        
        mensajeInfo.textContent = "Mensaje copiado!";
        mensajeInfo.style.display = 'block';

        setTimeout(() =>{
            mensajeInfo.style.display = 'none';
        }, 2000);

    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

