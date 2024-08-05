#Repositorio Taller Node.JS

1. ¿Qué es Node.js? ✅
2. ¿Cómo se crea un proyecto en Node? ✅
3. ¿Para qué es el `package.json`? ✅
4. ¿Qué es Express y para qué se utiliza? ✅
5. Escriba el código de un servidor básico en Express. ✅
6. ¿Qué es una API? ✅
7. ¿Cuáles son los métodos HTTP? ✅
8. ¿Qué es API REST? ✅
9. ¿Cómo se instala Express en un proyecto Node.js? ✅
10. Le solicitan crear los métodos POST y PUT para una API REST. ¿Cómo testear su funcionamiento rápidamente? ✅
11. Le solicitan que realice una API que devuelva el promedio de temperaturas de un array en el que se encuentran almacenadas las temperaturas por día. ¿Cuál método HTTP emplearía? ✅
12. Responda Falso o Verdadero:
   - JSON es un lenguaje de programación para crear APIs❌. ✅
   - Express es un Framework para Node.js. ✅
   - JSON es un formato empleado para intercambiar datos entre lenguajes de programación. ✅
13. La siguiente API https://www.datos.gov.co/resource/sdmr-tfmf.json contiene datos de los Medicamentos Vitales No Disponibles en Colombia.
   - a. Teste el método GET de la API. ¿Qué obtuvo, un array simple o un array de objetos? ✅
   - b. Su jefe le solicita que realice inserciones a la API de medicamentos. ¿Lo podría realizar? Justifique la respuesta. ✅
   - c. Le solicitan que analice si el formato del valor de la clave `cantidad_solicitada` requiere alguna conversión para realizar cálculos en el frontend. ¿Qué respondería? ✅
   - d. Le solicitan listar en un HTML los valores del `nombre_comercial` pero en minúsculas. ¿Qué haría, agregar código al frontend que programará o solicitaría a los proveedores de la API que conviertan los valores del campo a minúsculas? ✅

## Taller

1. Página estática. ✅
   - Crear un proyecto en Node y dentro de ese proyecto un formulario que permita ingresar en un campo una fecha inicial y en otro campo una fecha final.
   - Luego calcular el número de días que hay entre las 2 fechas y mostrar el resultado en un campo.
   
2. Crear un proyecto en Node llamado facturación. ✅
   - Crear en Node el método GET que calcule y retorne en JSON la suma total de número de unidades facturadas. ✅
   - Crear en Node el método GET que calcule y retorne en JSON el valor total facturado. ✅
   - Crear en Node el método GET que retorne los datos de una factura de venta de acuerdo al ID a consultar. ✅
   - Crear en Node el método GET que retorne en un JSON el ID de la factura con el nombre del cliente de todas las facturas. ✅
   - Crear el método para insertar facturas en el array siguiendo la misma estructura de los objetos del ejemplo. ✅
   - Crear el método PUT que permita realizar al usuario un decremento entre un 1% y 10% al valor total de todas las facturas. El % lo debe enviar al testear la API. ✅

Todos los detalles y el código correspondiente se encuentran en este repositorio.
