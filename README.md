# VolkitaTest

Punto 2 SQL.
SELECT 
	CASE WHEN 
    --Carrier 1
		b.carrierid = '1' AND b.zona ='AMBA' THEN (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier1_AMBA                     		
	CASE WHEN 
		b.carrierid = '1' AND b.zona ='Bs As' THEN (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier1_BsAs
	CASE WHEN 
		b.carrierid = '1' AND b.zona ='Resto' THEN (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier1_Resto
	--Carrier 2
	CASE WHEN 
		b.carrierid = '2' AND b.zona ='AMBA'  (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier2_AMBA                   
	CASE WHEN 			  
		b.carrierid = '2' AND b.zona ='Bs As' (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier2_BsAs  
	CASE WHEN 			  
		b.carrierid = '2' AND b.zona ='Resto' (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier2_Resto
	--Carrier 3
	CASE WHEN 
		b.carrierid = '1' AND b.zona ='AMBA' THEN (a.cantidadDeEnvios/c.capacity)*b.costo
	END AS Carrier3_AMBA

FROM
	base.cantidad_de_envios AS a

	LEFT JOIN base.costos AS b
	ON b.zona = a.zona

	LEFT JOIN base.carrier AS c
	ON c.carrierid = b.carrierid
	
	WHERE a.mes = '1'
-----------------------
SELECT 
	CASE WHEN 
    --Carrier 1
		b.carrierid = '1' AND b.zona ='AMBA' THEN (3000000/c.capacity)*b.costo
	END AS Carrier1_AMBA       

FROM
	base.cantidad_de_envios AS a

	LEFT JOIN base.costos AS b
	ON b.zona = a.zona

	LEFT JOIN base.carrier AS c
	ON c.carrierid = b.carrierid
	
	WHERE a.mes = '1'

punto 3.

Se esta importando desde la raiz.
Se esta buscando un paquete
Se solicita el envio de dicho numero.
Se le asigna un seguimiento.
Y se le empieza a dar un seguimiento en dichos sprintf.
Terminando el proceso

punto 4.

Se busca obtener como output del script que se consiga lo solicitado atras del proceso que se encuentra productivo.

Es la ubicacion en donde se encuentra instalado el bash.
Se utiliza el ID de dichos productos.
Con respecto a la linea user_ID , muesta datos y los brinda en usando el identificador de usuario.
Hace
el curl -s busca algun error en el enlace y maneja los ficheros
Muestra el ID.
termino

