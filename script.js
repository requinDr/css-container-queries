/**
 * Ce script cible l'élément #box et affiche sa largeur dans l'élément #width
 * C'est comme ça qu'on surveille les changements de largeur d'un élément en vanilla js.
 */

// Get the box element
const box = document.getElementById("box");

// Get the width element
const widthElement = document.getElementById("width");

// Listen to the box element's width changes
const observer = new ResizeObserver(entries => {
for (let entry of entries) {
    const { width } = entry.contentRect;
    widthElement.innerText = `Box width: ${width}px`;
}
});

observer.observe(box);