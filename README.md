# node-red
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
```
```

## Extra Nodes by Node-Red
https://github.com/node-red/node-red-nodes
https://github.com/node-red/node-red-web-nodes
https://github.com/node-red/node-red-auth-github
https://github.com/node-red/node-red-node-swagger

