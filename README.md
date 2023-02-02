# Industry-Future-static-page-
Página estática, creada con el fin de plasmar conocimientos aprendidos. 

Fundamentos Developer Web
	
 Segun la documentación oficial de W3schools

La etiqueta <footer> perteneciente a la estructura Hyper Text Markup Language (HTML) contiene la siguiente definición y maneras de uso:

 - La <footer> etiqueta define un pie de página para un documento o sección.

Un <footer> elemento normalmente contiene:

- información de autoría
- informacion registrada
- Información del contacto
- mapa del sitio
- volver a los enlaces superiores
- documentos relacionados

Puede tener varios <footer> elementos en un documento.




				-------------------------------

Estructura de nombres de class

* Para contenedores utilizaremos la siguiente estructura  de izquierda a derecha: Container +  tipo de  objeto encerrado en el contenedor + caracteristicas/adjetivo/propiedad/nombre del objeto 
Ejemplos:

- container-product-content
- container-product-info 
- container-main
- container-section-content
- container-img-logo 

* Para objetos individuales utilizaremos:
css + tipo de elemento + nombre del objeto y/o caracteristica del objeto.  

Ejemplos:

- css-img-plant_cactus
- css-button-form_submit
- css-p-description 

* Estructura de variables globales:

:root {
-- nombre de la propiedad + caracteristica añadida  =  valor que deseamos atribuirle a la propiedad
}

Ejemplos:

:root {
--size-lg: 16px
--size-sm: 12px
--color-hospital-green: #4424


				---------------------

Problemas que han surgido en el proceso

- En los elementos que engloban la sección "Why choose us" se me presentaron dificultares (en la versión desktop) a la hora de aplicar margin a los contenedores donde se encontrabann las imagenes y parrafos, ya que al momento de aplicar margin: 30px al contenedor padre, sucedían dos cosas: 
1 - El margin no se aplicaba a la derecha, sí en los demás lados.
2 - El texto del primer contenedor, no se ajustaba bien al ancho del container, pasandose de la extensión de ancho en cada linea del parrafo, generando una barra de desplazamiento horizontal en el navegador.
La solución fue aplicar el margin a cada elemento individual que componian el elemento padre (las imagenes y el texto). 
