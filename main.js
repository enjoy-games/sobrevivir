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

// Clase Main. Encargada de gestionar todas las operaciones de la aplicación.
function Main() {
 // Propiedades.
 this.estado = 'precarga';
 this.licencia = new licenciaGPL(gplv3);
 this.menu = new Menu();

 // Métodos.
 this.actualizar = function() {
  if (this.estado == 'precarga') {
   if (totalImagenes == imagenesCargadas) this.estado = 'licenciaGPL';
   cargando.x = 1005/2-108/2;
   cargando.y = 500/2-18/2;
   cargando.valor = imagenesCargadas / totalImagenes * 100;
   cargando.actualizar();
   mensaje.x = cargando.x - 10;
   mensaje.y = cargando.y - 50;
   mensaje.actualizar();

  } else if (this.estado == 'licenciaGPL') {
   this.licencia.mostrar();
   if (teclado.getPressed() != null){
    this.estado = 'licenciaTerceros';
    teclado.keychar = null;
   }

  } else if (this.estado == 'licenciaTerceros') {
   screen.drawImage(tempLicenciaTerceros, 0, 0);
   if (teclado.getPressed() != null) {
    this.estado = 'menu';
    teclado.keychar = null;
   }

  } else if (this.estado == 'menu') {
   this.menu.actualizar();
   if (teclado.getPressed() == 'A') {
    this.estado = 'juego';
    teclado.keychar = null;
   }

  } else if (this.estado = 'juego') {
   clearInterval(mainLoop);
   alert('ya');
  }
 };
}

