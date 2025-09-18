/*
CREATE database PapaOurs;
SHOW DATABASES ;
*/

USE PapaOurs;
CREATE TABLE utilisateur ( 
prenom varchar(25) NOT NULL,
nom varchar(25) NOT NULL,
mail varchar(50) NOT NULL,
confirm_mail varchar(50) NOT NULL,
mdp varchar(25) NOT NULL,
confirm_mdp varchar(25) NOT NULL,
genre varchar(25) NOT NULL,
naissance varchar(25) NOT NULL,
PRIMARY KEY (mail)
); 

SELECT * FROM TABLE





