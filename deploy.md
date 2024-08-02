sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx -y
sudo chown -R ubuntu:ubuntu /var/www/html

cd /var
sudo chown -R ubuntu:ubuntu www
