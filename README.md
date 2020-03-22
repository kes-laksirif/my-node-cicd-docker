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

#### To start stoped docker
To check available dockers and id
```
docker ps -a
```

To start docker
```
docker start <id>
```

To find running dockers
```
docker ps
```

### Automated testing
Install mocha and chai
```
npm install mocha chai --save-dev
```

Set test runner in package.json
```
"test": "mocha || true"
```

The complete code of package.json will look like following
```
{
  "name": "my-node-cicd-docker",
  "version": "1.0.0",
  "description": "Node app which support cicd and docker",
  "main": "server.js",
  "scripts": {
    "test": "mocha || true"
  },
  "repository": {
    "type": "git",
    "url": "git@192.168.137.86:my-node-cicd-docker.git"
  },
  "author": "Laksiri Fernando",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^7.1.1"
  }
}

```

Add message.js to get a greeting
```
module.exports = {
    helloMessage: function () {
        return "Hello!";
    },

    helloWorldMessage: function () {
        return "Hello World!"
    }
}
```

Add a new folder named test and add a new test spec file messageTest.js
```
const assert = require('chai').assert;
const message = require('../message');

//Results
helloMessage = message.helloMessage();
helloWorldMessage = message.helloWorldMessage();

describe('Message', function(){
    describe ('helloMessage', function () {
        it('helloMessage should return Hello!', function() {
            assert.equal(helloMessage, 'Hello!');
        });
        it('helloMessage should return string', function() {
            assert.typeOf(helloMessage, 'string');
        });
    });
    describe ('helloWorldMessage', function() {
        it('helloWorldMessage should return Hello World!', function() {
            assert.equal(helloWorldMessage,'Hello World!');
        });
        it('sayHelloWorldMessage should return a string', function() {
            assert.typeOf(helloWorldMessage, 'string');
        });
    });
});
```

All done. now run test
```
npm test
```

### Configer GOCD

To start go-server
```
systemctl start go-server
```

To start go-agent
```
service go-agent start
```

In browser navigate to 
http://<gocd server ip>:8153/go

For material type select
```
GIT
```

For repository name
```
/home/git/my-node-cicd-docker.git
```

For pipeline name
```
Automated-Testing
```

For stage name
```
Test-and-report
```

For job name
```
run-unit-test
```

For job task
```
npm test
```
Note: To test do some change to source code and commit changes to git repository

```
docker build -t user/my-node-cicd-docker /home/user/laksiri/mydev/fx/my-node-cicd-docker
docker run -p 49161:8080 -d user/my-node-cicd-docker
```