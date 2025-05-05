CREATE TABLE IF NOT EXISTS USERS (
    ID_USER_NAME                     INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME_USER_NAME                   CHAR(50),
    APELIDO1_NAME                    CHAR(50),
    APELIDO2_NAME                    CHAR(50),
    PWD_NAME                         CHAR(50),
    EMAIL_NAME                       CHAR(50)
);

CREATE TABLE IF NOT EXISTS TRABALLADOR (
    ID_TRABALLADOR                     INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME_TRABALLADOR                   CHAR(50),
    APELIDO1_TRABALLADOR               CHAR(50),
    EMPRESA_TRABALLADOR                TEXT NOT NULL,
    PROFESION_TRABALLADOR              TEXT NULL,
    ROL_TRABALLADOR                    TEXT NULL,
    EMAIL_TRABALLADOR                  CHAR(50)
);

CREATE TABLE IF NOT EXISTS EMAIL (
    ID_EMAIL                            INTEGER PRIMARY KEY AUTOINCREMENT,
    CODIGO_EMAIL                        CHAR(50),
    NOME_PRODUCTO_EMAIL                 CHAR(50),
    FECHA_EMAIL                         CHAR(50),
    CANTIDADE_PRODUCTO_EMAIL            INTEGER,
    PRECIO_PRODUCTO_EMAIL               REAL
);

CREATE TABLE IF NOT EXISTS STATUS (
    ID_STATUS                          INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_CLIENTE_STATUS                  INTEGER NOT NULL,
    TOTAL_STATUS                       REAL,
    PAGADA_STATUS                      INTEGER,
    FOREIGN KEY (ID_CLIENTE_STATUS) REFERENCES USERS (ID_USER_NAME)
);

CREATE TABLE IF NOT EXISTS ROLE (
    ID_ROLE                      INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME_ROLE                    CHAR(50),
    EMPRESA_ROLE                 TEXT NOT NULL,
    PROFESION_ROLE               TEXT NULL,
    ROL_ROLE                     TEXT NULL,
    EMAIL_ROLE                   CHAR(50)
);
