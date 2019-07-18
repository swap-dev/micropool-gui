# micropool-gui
Minimal Swap Pool Windows GUI

![screenshot](https://cdn.discordapp.com/attachments/541411408953344002/568984595505086475/Capture7.PNG)

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
    $ electron-builder --linux
    $ electron-builder --window
    $ electron-builder --mac
