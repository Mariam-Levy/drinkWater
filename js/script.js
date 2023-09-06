const glassSmall = document.querySelectorAll('.glass-small'); // Vasos pequeños
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const water = document.getElementById('water'); //remained

// Llamar una funcion para actualizar la cantidad de agua consumida 
updateBigGlass();

//Agrega un evento 'click' a cada vaso, para resaltarlos(llenarlos de agua):
glassSmall.forEach(function(glass, idx) {
    glass.addEventListener('click', function() {
        highlightCups(idx);
    })
})

//Funcion para llenar los vasos pequeños de agua:
function highlightCups(idx) {
    //Comprueba si el idx es 7 (son ocho vasos) y si el vaso actual esta lleno:
    if (idx === 7 && glassSmall[idx].classList.contains("full")) {
        // resta uno si la condicion es cierta:
        idx-- 
    //si el vaso actual esta lleno, y el siguiente NO esta lleno: entonces resta uno
    } else if (glassSmall[idx].classList.contains("full") && !glassSmall[idx].nextElementSibling.classList.contains("full")) {
        idx--
    }

    //Itera a traves de todos los vasos pequeños:
    glassSmall.forEach(function(glass, idx2) {
        //Si el idx2 es menor o igual al idx
        if (idx2 <= idx) {
            //agrega la clase 'full', para llenar el vaso
            glass.classList.add('full')
        } else {
            glass.classList.remove('full') // de lo contrario, elimina esa clase
        }
    });

    //
    updateBigGlass();
}


//Funcion para actualizar el vaso grande
function updateBigGlass() {
    const fullGlass = document.querySelectorAll('.glass-small.full').length; //busca todos los elementos que tengan la clase "glass-small.full" y los almacena en una constante y por la propiedad 'length' cuenta cuantos hay.

    //Obtiene la cantidad total de vasos pequeños
    const totalGlass = glassSmall.length;

    if(fullGlass === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullGlass / totalGlass * 330}px`;
        percentage.innerHTML = `${fullGlass / totalGlass * 100}%`;
    }

    if(fullGlass === totalGlass) {
        water.style.visibility = 'hidden';
        water.style.height = 0;
    } else {
        water.style.visibility = 'visible';
        liters.innerHTML = `${2 - (250 * fullGlass / 1000)}L`
    }
} 















