# Node-RED
Node-Red Notes and Playground

## Start NODE-RED using PM2

```
nvm use 6.11.2
pm2 start ~/.nvm/versions/node/v6.11.2/bin/node-red

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

## Module Linking from this repo to local node-red

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


## Creating Nodes

> They consist of a pair of files; 
a JavaScript file that defines what the node does, 
and an html file that defines the node’s properties, edit dialog and help text.

> When packaged as an npm module, a package.json file is used to pull it all together.

- package.json [Package Guide](https://nodered.org/docs/creating-nodes/packaging)
- aModuleFile.js [Javascript Guide](https://nodered.org/docs/creating-nodes/node-js)
- anHtmlFile.html [HTML Guide](https://nodered.org/docs/creating-nodes/node-html)

> You can create multiple NODES in different directories each haveing the same three files: package.json, aMdouleFile.js, anHtmlFile.html


