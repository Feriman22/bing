FROM yobasystems/alpine-nginx
RUN wget https://github.com/Feriman22/bing/archive/refs/heads/main.zip -O /tmp/main.zip && unzip /tmp/main.zip -d /etc/nginx/html && mv /etc/nginx/html/bing-main/* /etc/nginx/html/ && rm -rf /etc/nginx/html/bing-main /tmp/main.zip
