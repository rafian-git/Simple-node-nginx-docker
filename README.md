# Simple-node-nginx-docker
>A simple hello world NodeJS application running on Nginx on separate docker containers

## Features
- A hello world node app
- Nginx reverse proxy configuration
- Dockerize both the app and Nginx

## Setup (Linux)
- Install Docker from [here](https://docs.docker.com/engine/install/ubuntu/) if you don't have it already 
- Install docker-compose as well
```sh
 apt install docker-compose
```
- Clone the repo
- change directory inside the project folder

```sh
cd Simple-node-nginx-docker
```

- Run docker-composer
```sh
docker-compose up -d
```

-To check running containers
```sh
docker ps
```

- If you're running on a local machine than hit localhost
- If you're running on a remote machine than hit the Ip-Address

- To bind it with a domain change the below line in `proxy.conf`
```sh
server_name myapp.com www.myapp.com;
```

