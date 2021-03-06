/*

Copyright 2012 Sergio Lindo
This file is part of Sobrevivir.

Sobrevivir is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Sobrevivir is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Sobrevivir.  If not, see <http://www.gnu.org/licenses/>.

*/

// Variables globales.
var gameScreen = document.getElementById('gameScreen'); gameScreen.width = 1005; gameScreen.height = 500;
var screen = gameScreen.getContext('2d');

var fps = 60;

var teclado = new KeyboardListener(); // Ver en gadgets.js
var cargando = new BarraProgeso("#FFFFFF"); // Ver en gadgets.js
var mensaje = new Mensaje('Cargando...', '#FFFFFF', null); // Ver en gadgets.js

// Precarga de imágenes.
var imagenesCargadas = 0; var totalImagenes = 0;
var gplv3 = new Image(); gplv3.src = 'licencia/gplv3-127x51.png'; gplv3.onload = function() { imagenesCargadas++; };
totalImagenes++;
var tempLicenciaTerceros = new Image(); tempLicenciaTerceros.src = 'licenciaTerceros/tempLicenciaTerceros.png'; tempLicenciaTerceros.onload = function() { imagenesCargadas++; };
totalImagenes++;
var fondoMenu = new Image(); fondoMenu.src = 'menu/fondo.png'; fondoMenu.onload = function() { imagenesCargadas++; }
totalImagenes++;
var animacionMenu = new Image(); animacionMenu.src = 'menu/arbol_200x200x3.png';  animacionMenu.onload = function() { imagenesCargadas++; }
totalImagenes++;

var mainLoop = null;
var main = new Main(); // Ver en main.js

// Asignación de eventos.
var body = document.getElementById("body");
body.oncontextmenu = function() { return false; };
body.onload = function() { mainLoop = setInterval('main.actualizar();', 1000/fps); };

