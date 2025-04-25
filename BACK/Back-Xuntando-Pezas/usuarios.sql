CREATE TABLE if not exists NAME(
    ID_USER_NAME            INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME                    VARCHAR(50),
    APELIDO1                VARCHAR(50),
    APELIDO2                VARCHAR(50),
    PWD                     VARCHAR(50),
    EMAIL                   VARCHAR(50)
);

CREATE TABLE if not exists TRABALLADOR (
    ID_TRABALLADOR          INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME                    VARCHAR(50),
    APELIDO1                VARCHAR(50),
    EMPRESA                 TEXT(200) NOT NULL,
    PROFESION               TEXT(200) NULL,
    ROL                     TEXT(200) NULL,
    EMAIL                   VARCHAR(50)
);

CREATE TABLE if not exists EMAIL(
    ID_EMAIL                INTEGER PRIMARY KEY AUTOINCREMENT,
    CODIGO_EMAIL            VARCHAR(50) UNIQUE,
    NOME_PRODUCTO           VARCHAR(50),
    FECHA                   VARCHAR(50),
    CODIGO_PRODUCTO_EMAIL   VARCHAR(50),
    CANTIDADE_PRODUCTO      INTEGER,
    PRECIO_PRODUCTO         REAL,
    FOREIGN KEY (CODIGO_PRODUCTO_EMAIL) REFERENCES PRODUCTO (CODIGO_PRODUCTO) ON DELETE SET NULL
);

CREATE TABLE if not exists STATUS(
    ID_STATUS               INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_CLIENTE_STATUS       INTEGER NOT NULL,
    CODIGO_FACTURA_STATUS   VARCHAR(50),
    TOTAL                   REAL,
    PAGADA                  INTEGER,
    FOREIGN KEY (CODIGO_FACTURA_STATUS) REFERENCES FACTURA (CODIGO_FACTURA) ON UPDATE CASCADE,
    FOREIGN KEY (ID_CLIENTE_STATUS) REFERENCES CLIENTE (ID_CLIENTE)
);

CREATE TABLE if not exists ROLE(
    ID_ROLE                 INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME                    VARCHAR(50),
    APELIDO1                VARCHAR(50),
    EMPRESA                 TEXT(200) NOT NULL,
    PROFESION               TEXT(200) NULL,
    ROL                     TEXT(200) NULL,
    EMAIL                   VARCHAR(50)
);
