# README 

This project will be my portfolio site, probably will be using Node in order to learn about it as well, not entirely necessary but WTF who cares!

### Ron Barrantes' site ###

* owner: Ron Barrantes
* user: ronbarrantes
* email: ronbarrantes@gmail.com
* site: [ronbarrantes](http://ronbarrantes.co)

### The things I am learning can be found here ###

* [Flask Tutorial](http://flask.pocoo.org/docs/0.10/tutorial/#tutorial)

* [Ron's Projects](https://bitbucket.org/ronbarrantes)

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### Setting up git From scratch ###

From Scratch mkdir /path/to/your/project

* cd /path/to/your/project
* git init
* git remote add origin https://ronbarrantes@bitbucket.org/ronbarrantes/ronbarrantes.git

Create your first file, commit, and push

* echo "Ron Barrantes" >> contributors.txt
* git add contributors.txt
* git commit -m 'Initial commit with contributors'
* git push -u origin master

### From an existing repo ###

* cd /path/to/my/repo
* git remote add origin https://ronbarrantes@bitbucket.org/ronbarrantes/ronbarrantes.git
* git push -u origin --all # pushes up the repo and its refs for the first time
* git push -u origin --tags # pushes up any tags
