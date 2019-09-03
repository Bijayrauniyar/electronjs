const {dialog,app,nativeImage}=require('electron');
const fs = require('fs');
const path =require('path');

module.exports ={
    showMessage,
    showSaveDialog
};

function showMessage(browserWindow){
    dialog.showMessageBox(browserWindow,{
        tyep:'info',
        message:'Hello Dialog Box',
        detail:'just a details message ',
        buttons:['Meow','Close'],
        defaultId:0
    },(clickedIndex)=>{
     console.log(clickedIndex);   
    });
}

function showSaveDialog(browserWindow){
    dialog.showSaveDialog(browserWindow,{
        defaultPath:path.join(app.getPath('downloads'),'memory-info.txt')
    },(filename)=>{
        if(filename){
            const memInfo = JSON.stringify(process.getProcessMemoryInfo(),null,2);
            fs.writeFile(filename,'memory info is here','utf8',(err)=>{
                if(err){
                    dialog.showErrorBox('Save Failed',err.message);
                }
            })
        }
    }
    )
}