# my-node-cicd-docker

## Node Application Which Supports CICD and Docker

### Create git repository in git server

Login to git server and create the git repo
```
ssh user@192.168.137.86
su - git
git init --bare ~/projectname.git
```

### Clone repo in local machine and init node application
Clone repo
```
git clone git@192.168.137.86:my-node-cicd-docker.git
```

Init node app
```
cd my-node-cicd-docker
npm init
```

Install express
```
npm install -s express
```

Open in code
```
code .
```
Add README.md file and .gitignore and commit to git
```
git add .
git commit -m "Initial commit"
git push -u origin master
```

Add to github also
```
git remote add github git@github.com:kes-laksirif/my-node-cicd-docker.git
git push -u github master
```
### Docker
Add a Dockerfile
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
```

Add a .dockerignore file
```
node_modules
npm-debug.log
```

Build & Run
```
docker build -t user/my-node-cicd-docker .
docker run -p 49161:8080 -d user/my-node-cicd-docker
```
Now the node application is running in the docker and accessible via
http://192.168.137.23:49161/

### Automated testing
