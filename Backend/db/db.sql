CREATE TABLE vehiculo (
  placa varchar(6)PRIMARY KEY ,
  fecha_ingreso datetime NOT NULL,
  fecha_salida datetime, 
  estado varchar(8)
);