# Node-RED
Node-Red Notes and Playground

## Install Node-Red Global. Development only. 

> Install
```
~$ sudo npm install -g --unsafe-perm node-red

```

## Custom Settings

> Edit setttings.js

```
1. Copy settings.js to your project directory


```

### Custom Settings - **Important elements** settings.js

> By default, all user data is stored in the Node-RED install directory. To
> use a different location, the following property can be used 
    
**userDir**: '~/node-red-userDir',

> Node-RED scans the `nodes` directory in the install directory to find nodes.
> The following property can be used to specify an additional directory to scan. 
    
**nodesDir**: '~node-red-nodeDir',

>**KEY** nodesDir will be where you git clone modules for immediate use. 

Below is an example of the nodesDir that will contain any Git clones you would like to include.
Within the *.html (example pipe1.html) is an element called 'category', this will place your node
into the left hand node pane under the category you choose.

>**KEY** *.html 'category' change this element to have your node placed in the category of your choosing. 

<div>


![pipenodes](https://user-images.githubusercontent.com/993459/30244179-9bbc929a-957e-11e7-897e-652cb08cfcd0.png)

```
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

> Start
```
~$  node-red --settings settings.js

```



## Installing npm packaged NODES

> To install an npm-packaged node, you can either install it locally within your user data directory (by default, $HOME/.node-red):

> During development it is also possible to install nodes by copying their .js and .html files into a nodes directory within your user data directory. If these nodes have any npm dependencies, they must be also be installed within the user data directory. This is only really recommended for development purposes.

```
cd $HOME/.node-red
npm install <npm-package-name>
You will then need to stop and restart Node-RED for it to pick-up the new nodes.
```

> Extra for development see below Module Linking

## Module Linking for Local Development

> To test a node module locally, the npm link command can be used. This allows you to develop the node in a local directory and have it linked into a local node-red install, as if it had been npm installed.

```
  1. in the directory containing the node’s package.json file, run: sudo npm link.
  2. in your node-red user directory, typically ~/.node-red run: npm link <name of node module>.

```
> This creates the appropriate symbolic links between the two directories so Node-RED will discover the node when it starts. Any changes to the node’s file can be picked up by simply restarting Node-RED.


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



```
sudo npm install -g --unsafe-perm node-red
node-red --settings settings.js


```
