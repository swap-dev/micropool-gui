# micropool-gui
Minimal Swap Pool Windows GUI

![screenshot](https://cdn.discordapp.com/attachments/541411408953344002/568984595505086475/Capture7.PNG)

How to Guide: https://github.com/swap-dev/swap/wiki/Swap-Micropool-How-to-Guide

To run micropool-gui as a nodejs/electronjs app:

    $ npm install electron -g
    $ git clone https://github.com/swap-dev/micropool-gui.git
    $ cd micropool-gui
    $ npm install
    $ npm start

To build the micropool as a standalone executable:

    $ npm install electron-builder -g
    $ git clone https://github.com/swap-dev/micropool-gui.git
    $ cd micropool-gui
    $ npm install
    $ electron-builder --linux
    $ electron-builder --windows
    $ electron-builder --mac
