commande terminal lors de la création d une machine virtuelle AWS

cat ~/.ssh/id_rsa.pub

ssh ubuntu@ec2-18-205-151-13.compute-1.amazonaws.com (adresse IPv4Publique ou DNS IPv4 public)

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

nvm install node

node -v

sudo apt update

sudo apt install postgresql postgresql-contrib

sudo service postgresql status

sudo apt install git

git help

ctrl+d => logout : l instance reste ouverte on peut s y reconnecter avec ssh ubuntu@ec2-18-205-151-13.compute-1.amazonaws.com

npm --version

sudo sed -i -E "s/local\ + all\ +all\ +peer/local all all md5/" /etc/postgresql/12/main/pg_hba.conf

sudo cat /etc/postgresql/12/main/pg_hba.conf

sudo service postgresql restart

ssh-keygen -t rsa

ssh-keygen --help

git config --global user.name "mathieupromolyra"

git config --global user.email "mat.sr0575@gmail.com"

git config -l

git clone git@github.com:O-clock-Lyra-JS/projet-blablasport.git

ls 

cd projet-blablasport

npm install

sudo -i -u postgres  #(affiche postgres=# pour la suite des commandes)

CREATE USER outsiders WITH LOGIN PASSWORD 'outsiders';

CREATE DATABASE outsiders OWNER outsiders;

\q 

ctrl+d

