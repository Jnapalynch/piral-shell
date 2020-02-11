# piral-shell
Project build with Piral CLI, this project render each Pilet project


To Understand about Piral shell and Pilet's concepts, we have to know the following:

- Piral shell project is a wrapper or layout project in which you can render all your Pilets
- A Pilet is a microfront project

Dependencies

- npm install -g piral-cli

To render your pilets, first, you have to register the url to get your pilet list

- in the index.tsx you must change the feedUrl
- to start the pilet-server project you have to clone the following project (https://github.com/Jnapalynch/piral-pilet-server)

To start the project

- piral debug

If you want to create a new Pilet you must execute the following code

- on your Piral Shell project, execute "piral build"
- then execute "pilet new ./my-piral-shell-project/my-app-1.0.0.tgz --target my-new-pilet"
- more information: https://docs.piral.io/tutorials/02-getting-started

