# Node-RED Demo and Tutorial

<img src="https://user-images.githubusercontent.com/993459/30244523-f33faa38-9584-11e7-8ea2-a63bddeaaf32.jpg" align="right"/>


IBM donated Node-Red to the JavaScript open source foundation. Node-Red started with the Raspberry PI as a way to integrate IOT devices and has grown-up and populated itself into IBM’s Watson cloud services. 

The adoption of Node-Red will increase the compatibility of services between machines and humans. AI agents can use Node-Red to integrate complex systems into Rule Based applications. Machine learning will ensure that simple blocks or pipes of data and services can be glued together as asynchronous patterns that can be both scalable,  adaptable, and profitable.

This demo and tutorial is an introduction to the installation and usage of simple blocks, or what are 'Pipes' and 'functions' of data.  The reader of this tutorial will see the capabilities of a functional modular design, and the goal is to have the reader an "A-ha moment" in concept and ideas. 



> ----------------------------------------------------------------

> **Click on SIP**: links for short videos :star:

> ----------------------------------------------------------------

:star: [SIP: About this Demo/Tutorial](https://www.youtube.com/watch?v=67DmAiVwpBU)


## Install Node-Red Global. Development only. 

> Install

:star: [SIP: Install Node-RED Global](https://www.youtube.com/watch?v=pplFirxzTNM)

```
$ sudo npm install -g --unsafe-perm node-red

$ git clone https://github.com/mallond/node-red.git

```

## Custom Settings

> Edit setttings.js


[Setting.js](https://github.com/mallond/node-red/blob/master/settings.js)


### Custom Settings - **Important elements** settings.js

> By default, all user data is stored in the Node-RED install directory. To
> use a different location, the following property can be used 
    
:key: **userDir**: '~/node-red-userDir',

> Node-RED scans the `nodes` directory in the install directory to find nodes.
> The following property can be used to specify an additional directory to scan. 
    
:key: **nodesDir**: '~node-red-nodeDir',

>**KEY** nodesDir will be where you git clone modules for immediate use. 

Below is an example of the nodesDir that will contain any Git clones you would like to include.
Within the *.html (example pipe1.html) is an element called 'category', this will place your node
into the left hand node pane under the category you choose.

:key: *.html 'category' change this element to have your node placed in the category of your choosing. 

<div>

 
<img src="https://user-images.githubusercontent.com/993459/30244179-9bbc929a-957e-11e7-897e-652cb08cfcd0.png" align="right"/>


:key: Instead of Using npm install, a better idea is to use git clone. Why? You will have the ablity to modify your nodes along 
with the Node-Red process environment. 

```
node-red-nodeDir/
├── node-red-contrib-json-schema
├── pipe1
├── pipe2
└── pipe3
 
```

> Git clone - Nodes that will be used


```
$ cd node-red-nodeDir
$ git clone https://github.com/mallond/node-red-contrib-json-schema.git
$ cd node-red-contrib-json-schema
$ npm install
$ cd ..

Note: The repos do not have package dependencies.

$ git clone https://github.com/mallond/pipe1
$ git clone https://github.com/mallond/pipe2
$ git clone https://github.com/mallond/pipe3

node-red-nodeDir/
├── node-red-contrib-json-schema
│   ├── LICENSE
│   ├── README.md
│   ├── package.json
│   ├── schema.html
│   └── schema.js
├── pipe1
│   ├── README.md
│   ├── package.json
│   ├── pipe1.html
│   └── pipe1.js
├── pipe2
│   ├── README.md
│   ├── package.json
│   ├── pipe2.html
│   └── pipe2.js
└── pipe3
    ├── README.md
    ├── package.json
    ├── pipe3.html
    └── pipe3.js
```


</div>

## Start Node-Red with custom Settings 

> :key: Start
```
$  node-red --settings settings.js

```



## Installing Your Custom Node-RED Nodes

> To install your custom node, you can either install it locally within :key: **nodesDir** directory:

> During development it is also possible to install nodes by copying their .js and .html files into a nodes directory within your :key: **nodesDir**  directory. If these nodes have any npm dependencies, they must be also be installed within the :key: **nodesDir**  directory. This is only really recommended for development purposes.

```
$ cd **nodesDir** 
$ git clone <git repo>

You will then need to stop and restart Node-RED for it to pick-up the new nodes. 
And, if you have modified *.html category element your new Node should appear in the Nodes section.

For this demo

$ cd node-red-nodeDir **nodesDir**
$ git clone https://github.com/mallond/node-red-contrib-json-schema.git
$ cd node-red-contrib-json-schema
$ npm install
$ cd ..
$ git clone https://github.com/mallond/pipe1
$ git clone https://github.com/mallond/pipe2
$ git clone https://github.com/mallond/pipe3

Note: The pipe1, pipe2, and pipe3 do not have package.json dependencies, so there is no need to npm install.

```



## Extra Cool Nodes by Node-Red

[RED Nodes](https://github.com/node-red/node-red-nodes)

[RED Web](https://github.com/node-red/node-red-web-nodes)

[RED Authentication](https://github.com/node-red/node-red-auth-github)

[RED Swagger](https://github.com/node-red/node-red-node-swagger)


## Creating Nodes - Super Simple, Just read all in the three links below

> They consist of a pair of files; 
a JavaScript file that defines what the node does, 
and an html file that defines the node’s properties, edit dialog and help text.

> When packaged as an npm module, a package.json file is used to pull it all together.

- package.json [Package Guide](https://nodered.org/docs/creating-nodes/packaging)
- aModuleFile.js [Javascript Guide](https://nodered.org/docs/creating-nodes/node-js)
- anHtmlFile.html [HTML Guide](https://nodered.org/docs/creating-nodes/node-html)

> You can create multiple NODES in different directories each haveing the same three files: package.json, aMdouleFile.js, anHtmlFile.html

- [Creating your first node](https://nodered.org/docs/creating-nodes/first-node)
- [JavaScript File](https://nodered.org/docs/creating-nodes/node-js)
- [HTML File](https://nodered.org/docs/creating-nodes/node-html)
- [Node context](https://nodered.org/docs/creating-nodes/context)
- [Node properties](https://nodered.org/docs/creating-nodes/properties)
- [Node appearance](https://nodered.org/docs/creating-nodes/appearance)
- [Node status](https://nodered.org/docs/creating-nodes/status)
- [Configuration nodes](https://nodered.org/docs/creating-nodes/config-nodes)
- [Help style guide](https://nodered.org/docs/creating-nodes/help-style-guide)
- [Packaging](https://nodered.org/docs/creating-nodes/packaging)
- [Internationalisation](https://nodered.org/docs/creating-nodes/i18n)


## General guidance

### Nodes should:

> - be well-defined in their purpose.


> - be simple to use, regardless of the underlying functionality.


> - be forgiving in what types of message properties it accepts.


> - be consistent in what they send.


> - sit at the beginning, middle or end of a flow - not all at once.

> - catch errors.

> - If a node throws an uncaught error, Node-RED will stop the entire flow as the state of the system is no longer known.

> - Wherever possible, nodes must catch errors or register error handlers for any asynchronous calls they make.


## Just for fun 
:star: [SIP: 900 Nodes running on Node-Red - Sub second processing](https://www.youtube.com/watch?v=Uiz702q53lI)

:star: [SIP: 5000 Nodes running on Node-Red - Sub second processing](https://www.youtube.com/watch?v=gzBp1C-SB80)




http://www.easysurf.cc/scintd.htm

