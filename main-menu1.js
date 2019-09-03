const {app,Menu} = require('electron');
const isWindows = process.platform ==='win32';
console.log(process.platform);

module.exports ={
    setMainMenu
}


function setMainMenu(){
const template =[
    {
        label:isWindows?'File':app.getName(),
        submenu:[
            {
                label:isWindows?'Exit':`Quit ${app.getName()}`,
                accelerator:isWindows?'Alt+F4':'CmdorCtrl+q',
                click(){
                    app.quit();
                }
            }
            
        ]
        
    },
    {
        label:'Edit',
        submenu:[
            {role:'undo'},
            {role:'redo'},
            {type:'separator'},
            {role:'cut'},
            {role:'copy'},
            {role:'pase'},
            {role:'selectall'}

        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
}