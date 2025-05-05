CREATE TABLE IF NOT EXISTS USERS (
    ID_USER                          INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME                             CHAR(50),
    APELIDO1                         CHAR(50),
    APELIDO2                         CHAR(50),
    PWD                              CHAR(50),
    EMAIL                            CHAR(50)
);

CREATE TABLE IF NOT EXISTS EMAIL (
    ID                              INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME                            CHAR(50),
    APELIDO1                        CHAR(50),
    EMPRESA                         TEXT NOT NULL,
    PROFESION                       TEXT NULL,
    ROL                             TEXT NULL,
    EMAIL                           CHAR(50)
);

CREATE TABLE IF NOT EXISTS STATUS (
    ID                              INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_CLIENTE                     INTEGER NOT NULL,
    TOTAL                          REAL,
    PAGADA                         INTEGER,
    FOREIGN KEY (ID_CLIENTE) REFERENCES USERS (ID_USER)
);

CREATE TABLE IF NOT EXISTS ROLE (
    ID                              INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME                            CHAR(50),
    EMPRESA                         TEXT NOT NULL,
    PROFESION                       TEXT NULL,
    ROL                             TEXT NULL,
    EMAIL                           CHAR(50)
);

