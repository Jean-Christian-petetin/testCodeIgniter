/*
 * Cette function permert de changer la couleur de l'élément ciblé en cliquant
 * sur un élément de la page.
 * 
 * This function change the html element's color by cliking on one designed
 * html element.
 */

/*
 * Déclarations des variables
 * Variable déclaration
 */
var color = 0;
var pullColor = ["grey", "yellow", "green", "blue"];

/*
 * Au click sur l'élément avec l'id correspondant on appele la fonction.
 * On click to the html element's a function is call.
 */
$("#changeColor").click(function () {
    if (color < 3) {
        $("nav").removeClass(pullColor[color]);
        color += 1;
        $("nav").addClass(pullColor[color]);
    } else {
        $("nav").removeClass(pullColor[color]);
        color = 0;
        $("nav").addClass(pullColor[color]);
    }
});