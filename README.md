## Test Práctico Frontend React js

# autor

Carlos Ramón Bautista Rodríguez

## Requerimientos:

A continuación presentamos el diseño y la descripción funcional de una pequeña aplicación
que será la base del trabajo que deberás desarrollar. La aplicación consta de tres
componentes principales:

    ● Gráfica de evolución de precio
    ● Gráfica de presencia del producto
    ● Tabla de productos

Te pedimos: Con los diseños dados, construir las siguientes tres vistas:

    ● Gráfica de evolución de precio
    ● Gráfica de presencia del producto
    ● Tabla de productos

Reglas de negocio:

    ● En la tabla de productos el campo de % de presencia si es negativo debe mostrarse
    en color rojo y es positivo en color verde (colores de acuerdo a la guía de estilos).
    ● Debe consultar los siguientes endpoint:

    1.- GET https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/ (evolución de
    precio, agrupar por sku)

    2.- GET https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/ (presencia del
    producto)

    3.- GET https://atlantia-dev-test.herokuapp.com/api/beer-products/ (Tabla de producto

## Scripts (esencialmente los de CRA):

### `npm start`

Corre la app en development mode.<br />
Apunta a [http://localhost:3000](http://localhost:3000).

### `npm build`

Boundlea la app para produccion en la carpeta de `build`.

[Info acerca de Deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Estructura del proyecto:

## Components:

El `ChartEvo` component renderiza la primera gráfica y recibe como props todos los datos ya formateados para que la grafica funcione.
Los datos son formateados desde el archivo `apiClient.js` despues de recibir una respuesta correcta de la peticion, se utilizo la libreria axios ya que esta nos ofrece una API unificada para las solicitudes, está altamente pensado para facilitar el consumo de servicios web.


El `ChartPresence` component renderiza la segunda gráfica y recibe como props todos los datos ya formateados para que la grafica funcione.Posterior a recibir una respuesta correcta se utiliza el metodo  `.sort` para ordenar el arreglo por `dateExtraction`, despues se recorre el arreglo y se filtra, realizando push para llegar al formato de datos que la grafica necesita. Cuando se reciben los datos correctamente se crea un objeto que contendra los datos en el formato para la grafica, esto haciendo un `forEach` y posteriormente un `.push` al nuevo objeto.

El `ShowTable` component renderiza la tabla y recibe como props todos los datos para que ser mapeados y enlistados segun las reglas de negocio.

## Consts:

El proyecto hace uso de constantes importadas en vez de strings directas para evitar error humano y poder reimportar los metodos, variables y strings mas facilmente por toda la aplicacion.

Las `consts` hacen referencia a los 3 endpoints.

## styled-components:

El proyecto utiliza la libreria styled-components para hacer mejor scope de mis estilos en cada componente.
Cada componente cuenta con su propio archivo de estilos, asi tenemos un proyecto con mejor estructura, codigos independientes y modulares.



