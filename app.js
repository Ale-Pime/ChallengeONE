const input_Text = document.querySelector (".entered_text");
const text_Result = document.querySelector (".result_text");
  
    // Esta función realiza el proceso de encriptación del texto ingresado por el usuario.
    // El texto encriptado se asigna al elemento input_Text y se muestra en minúsculas.
    // El proceso de encriptación se basa en la búsqueda y reemplazo de coincidencias utilizando expresiones regulares y la función replaceAll.
    // Cada coincidencia de letra original en el texto se reemplaza por la secuencia correspondiente definida en Array_Multi.
    function encriptar() {
        const Array_Multi = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        const encripted_Text = input_Text.value.toLowerCase().replaceAll(
            new RegExp(Array_Multi.map(([original]) => `(${original})`).join("|"), "g"),
            match => Array_Multi.find(([original]) => original === match).slice(1)
    );
    
    text_Result.value = encripted_Text;
    input_Text.value = "";
    text_Result.style.backgroundImage = "none";
}
  
    //Esta función realiza el proceso de desencriptación del texto ingresado por el usuario.
    function desencriptar() {
        const Array_Multi = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        const decrypted_Text = input_Text.value.toLowerCase().replaceAll(
            new RegExp(Array_Multi.map(([_, encriptada]) => `(${encriptada})`).join("|"), "g"),
            match => Array_Multi.find(([_, encriptada]) => encriptada === match).slice(0, 1)
    );
    
    text_Result.value = decrypted_Text;
    input_Text.value = "";
    text_Result.style.backgroundImage = "none";
}
  
// Evento input para verificar y modificar el contenido ingresado por el usuario
input_Text.addEventListener("input", validarTexto);

// Función para validar el texto ingresado
function validarTexto(event) {
  let texto = event.target.value.toLowerCase();
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z\s]/g, "");
  event.target.value = texto;
}