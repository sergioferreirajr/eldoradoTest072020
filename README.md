# eldoradoTest072020
Name: Sérgio Ferreira Jr.
Email: sergioferreirajr@gmail.com
Date: 07/14/2020

Challenge for a Senior developer opportunity at Eldorado Institute (Manaus-AM).

The goal is to develop a website to manage devices (create, list and delete). Each device has a category and the categories can also be managed (create, list en delete).

The programming language to be used is Angular 8 (frontend) and Node.JS (backend API). The database must be MySQL.

It's a plus if the project is deployed on a AWS server and if automated tests are developed.

######################################################
## Installation and configuration 
## Instructions to install at localhost (Ubuntu 18.04)
######################################################

1) To download the application repository
- Install GIT:
$ sudo apt-get install git

- Using a Linux Terminal, go to your WORKDIR and download the challange projet from GitHub Public repository (WORKDIR is your favorite working diretory):

$ cd $WORKDIR

$ git clone https://github.com/sergioferreirajr/eldoradoTest072020.git


2) To install and congirure the application database
- Install MySQL (recomendation: Xampp)
- Download the Xampp installer from https://www.apachefriends.org/
Using root user, or sudo, install Xampp and follow the installshield procedures...
$ ./xampp-linux-x64-7.4.7-0-installer.run

- Start the Xampp services (Apache and MySQL):
$ sudo /opt/lampp/xampp start

- Import app database 
(ATTENTION: the default xampp installation set the MySQL root user whith blank password)
$ cd $WORKDIR/eldoradoTest072020
Criar a base de dados antes de importar as tabelas (quando solicitar senha apenas pressione ENTER)
$ /opt/lampp/bin/mysql -u root -p
$ MariaDB [(none)]> CREATE DATABASE eldoradodb;
$ MariaDB [(none)]> quit;
Importar tabelas:
$ /opt/lampp/bin/mysql -u root -p eldoradodb < eldoradodb.sql


3) To run deviceMngApi app (localhost API/backend)
- Install NodeJs 12 and NPM 6
$ sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt install nodejs
$ sudo apt install npm
- Compile and run deviceMngApi
$ cd $WORKDIR/eldoradoTest072020/deviceMngApi/
$ npm install
$ node index.js

4) To run deviceMng app (localhost Frontend)
- Install Angular CLI
$ sudo npm install -g @angular/cli
- Open a new linux terminal, compile and run the deviceMng
$ cd $WORKDIR/eldoradoTest072020/deviceMng/
$ npm install
$ ng serve
- Open a web browser and use the link:
http://localhost:4200
