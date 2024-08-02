EC2 로그인
인스턴스 시작
애플리케이션 및 OS 이미지 => ubuntu
t2.micro
키페어(ppk)

네트워크 설정
다음에서 SSH 트래픽 허용
인터넷에서 HTTP 트래픽 허용

만들어진 인스턴스 들어가서 연결

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx -y
sudo chown -R ubuntu:ubuntu /var/www/html

cd /var
sudo chown -R ubuntu:ubuntu www

issue 중 defined never read(불러오고 실행하지 않음) => 지우고 빌드 할 수 있도록 하기!
