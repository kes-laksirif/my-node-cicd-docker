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
