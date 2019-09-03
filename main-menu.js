const {app,Menu}= require('electron');
const {showMessage,showSaveDialog} = require('./dialogs')

module.exports={
    setMainMenu
}

function setMainMenu (mainWindow){
    const template=[
        {
            label:app.getName(),
            submenu:[
                {
                    label:'say Hello',
                    click(){
                        showMessage(mainWindow);                       

                    }
                },
                {
                    label:'Save Memory Usage Info',
                    click(){
                        showSaveDialog(mainWindow);
                    }
                },
                {
                    label:'Open File',
                    click(){
                        showMessage(mainWindow);
                    }
                },

            ]
        }
    ];
    const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

}