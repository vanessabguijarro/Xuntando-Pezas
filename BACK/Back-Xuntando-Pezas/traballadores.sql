CREATE TABLE if not exists NAME(
                 ID_USER_NAME			 		INTEGER PRIMARY KEY AUTOINCREMENT,
                 NAME_USER_NAME           		CHAR(50),
                 APELIDO1_NAME            		CHAR(50),
                 APELIDO2_NAME            		CHAR(50),
                 PWD_NAME                 		CHAR(50),
                 EMAIL_NAME               		CHAR(50)
              );

CREATE TABLE if not exists TRABALLADOR (

		         ID_TRABALLADOR						       INTEGER PRIMARY KEY AUTOINCREMENT,
                NAME_TRABALLADOR						    CHAR(50),
                APELIDO1_TRABALLADOR					  CHAR(50),
                EMPRESA_TRABALLADOR						 TEXT(200) NOT NULL,
                PROFESION_TRABALLADOR					 TEXT(200) NULL,
                ROL_TRABALLADOR						    TEXT(200) NULL,
                EMAIL_TRABALLADOR						  CHAR(50)
);

CREATE TABLE if not exists EMAIL(
                 ID_EMAIL					 	        INTEGER PRIMARY KEY AUTOINCREMENT,
                 CODIGO_EMAIL			     			  CHAR(50),
                 NOME_PRODUCTO_EMAIL	     	     CHAR(50),
                 FECHA_EMAIL            	 	   	CHAR(50),
                 CODIGO_PRODUCTO_EMAIL          	CHAR(50),
                 CANTIDADE_PRODUCTO_EMAIL	 			INTEGER,
                 PRECIO_PRODUCTO_EMAIL       			REAL,
                 FOREIGN KEY (CODIGO_PRODUCTO_FACTURA) REFERENCES PRODUCTO (CODIGO_PRODUCTO) ON DELETE SET NULL        
                 
                );

CREATE TABLE  if not exists STATUS(
                 ID_STATUS					 	    INTEGER PRIMARY KEY AUTOINCREMENT,
                 ID_CLIENTE_STATUS					INTEGER NOT NULL,
                 CODIGO_FACTURA_STATUS     		CHAR(50),
                 TOTAL			             		REAL,
                 PAGADA					            INTEGER,
                 
                 FOREIGN KEY (CODIGO_FACTURA_FACTURAS) REFERENCES FACTURA (CODIGO_FACTURA) ON UPDATE CASCADE,
                 FOREIGN KEY (ID_CLIENTE_FACTURAS) REFERENCES CLIENTE (ID_CLIENTE)
                );


CREATE TABLE if not exists ROLE(

		        ID_ROLE						        INTEGER PRIMARY KEY AUTOINCREMENT,
                NAME_ROLE						     CHAR(50),
                APELIDO1_ROLE					     CHAR(50),
                EMPRESA_ROLE						  TEXT(200) NOT NULL,
                PROFESION_ROLE					  TEXT(200) NULL,
                ROL_ROLE						     TEXT(200) NULL,
                EMAIL_ROLE						     CHAR(50)
);
