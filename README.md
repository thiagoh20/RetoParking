# Parqueadero

Este repositorio contiene un programa de registro y control de vehículos en un parqueadero. Permite realizar las siguientes acciones:

1. **Registrar el ingreso de un vehículo al parqueadero** con su placa, fecha y hora de ingreso (tomada del sistema).
2. **Registrar la hora de salida del vehículo del parqueadero**, calculando el tiempo que estuvo estacionado y el valor a pagar respectivo.
3. **Consultar en todo momento los vehículos parqueados** y mostrar la fecha de ingreso.
4. **Consultar en todo momento un vehículo por placa** para ver su hora de ingreso.
5. La **tarifa para vehículos estacionados** se calcula de la siguiente forma: $100 pesos por cada minuto o fracción de minuto.
6. Al **dar salida a un vehículo**, el sistema informa del cobro total, retira el vehículo del sistema y libera el cupo en el parqueadero.

## Tecnologías utilizadas

- React
- Express
- MySQL

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js
- npm (Administrador de paquetes de Node.js)

## Instalación

Sigue los pasos a continuación para instalar y configurar el proyecto:

1. Clona este repositorio: `git clone https://github.com/thiagoh20/RetoParking`
2. Navega hasta el directorio del proyecto: `cd Frontend`
3. Instala las dependencias: `npm install`

¡Gracias por usar nuestro programa de control de parqueadero!
