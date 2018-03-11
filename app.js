var fs = require('fs');
var dir = './tmp';

/*\
| | this is the main setup file for createing this project :
| | just run - node app.js 
| | and we will do the rest for u ! 
| |settings :
\*/ var cmnd = {'createDir' : true , 'createFiles' : true , 'stopOnErr ' : false}







var dirLs = 
[ // 21 dir for now
    './asset',
    './node_modules',
    './asset/scss',
    './asset/scss/adminStyle',
    './asset/scss/fontStyle',
    './asset/ts',
    './asset/ts/adminScripts',
    './asset/ts/fontScripts',
    
    './inc',
    './inc/src',
    './inc/typings',
    './inc/css',
    './inc/js',

    './func',
    './func/widgets',
    
    'lib',
    'lib/header',
    'lib/footer',
    'lib/content',

    './document',
    './document/resource',
    './document/current',

    '.tmp'
];

var fileLs = [//21 files for now
    // lib > scss    
    'asset/scss/adminStyle/adminStyle.scss',
    'asset/scss/fontStyle/fontStyle.scss',
    // lib > typeScripts    
    'asset/ts/adminScripts/adminScripts.ts',
    'asset/ts/fontScripts/fontScript.ts',
    // lib > header
    'lib/header/navigationBar.php',
    'lib/header/topBar.php',
    'lib/header/headerContent.php',
    // lib > footer
    'lib/footer/footerContent.php',
    // lib > content
    'lib/content/sidebarContent.php',
    'lib/content/mainContent.php',
    // lib > Documentration file's
    'document/current/index.md',
    'document/current/funcList.md',
    'document/current/widgets.md',
    'document/current/support.md',
    'document/current/about.md',
    //.tmp > not to build | readymade html files for html formatting and editing those are temporary
    '.tmp/xyz.html',
    '.tmp/x.html',
    '.tmp/y.html',
    '.tmp/z.html',
    //files for root
    'style.css',
    'header.php',
    'footer.php',
    'functions.php',
    'singel.php',
    'page.php'
];

var index = { 'newfile' : 0 , 'newdir' : 0 , 'dirExist' : 0 , 'fileExist' : 0 , 'errFile' :0 , 'errDir' : 0};

function indexProcess ( reffer ){
    
/*|
    reffer :
    new dir = 0
    exist dir = 2
    error on dir = 4 -- not present

    new file = 1
    exist file = 3
    error on file = 5
|*/
    switch(reffer) {
        case 0:
            index.newdir += 1;
            break;
        case 1:
            index.newfile += 1;
            break;
        case 2:
            index.dirExist += 1;    
            break;
        case 3:
            index.fileExist += 1;  
            break;
        case 4:
            index.errDir += 1;  
            break;
        case 5:
            index.errFile += 1;  
            break;
        default:
            break
    }
flyMsg(index.newfile + index.fileExist);

}

if(cmnd.createDir === true){
    console.log ( '\n\n [ シ ] Direcory Creation Process Startd \n\n'  );
    for(var i=0 ; i< dirLs.length ; i++ ){
        if (!fs.existsSync(dirLs[i])){
            fs.mkdirSync(dirLs[i]);
            console.log( '[ ✓ ] Directory Created -> ' + dirLs[i] );
            indexProcess (1) ;
        }else{
            console.log( '[ ✖ ] directory is already exist  -> ' + dirLs[i]  );
            indexProcess(2);
        }
    }
}
if(cmnd.createFiles === true ){
    console.log ( '\n\n [ シ ] file Creation Process Startd \n\n'  );
    if(cmnd["stopOnErr "] === true && cmnd.err > 0 ){
    }else{



        fileLs.forEach(function(filename) {
            if(!fs.existsSync( filename )){
                fs.writeFile(filename, '' , function(err) {
                    if(err){
                        console.log ( '[ ✖ ] error : unable to create file -> ' + filename + "||" + err );
                        indexProcess(5);
                    }else{
                        console.log('[ ✓ ] File Created -> ' + filename);
                        indexProcess (1) ;
                    }
                });
            }else{
                console.log('[ ✓ ] File is Exist Man -> ' + filename);  
                indexProcess(3);
            }
        });
    }
}

/*|Final Report :
| |
|*/function flyMsg( stat ) {
    if((index.fileExist + index.newfile) === fileLs.length){
        console.log( "----------------------------------------------");
        console.log("[ ✓ ] Total File Created= " + index.newfile );
        console.log("[ ✓ ] Total dir Created = " + index.newdir );
        console.log("[ ✓ ] dir exist = " + index.dirExist );
        console.log("[ ✓ ] file exist = " + index.fileExist );
        console.log("[ ☺ ] file create error  = " + index.errFile );
        console.log( "----------------------------------------------");

        console.log("[ シ ] sum: files = [ "+(index.fileExist + index.newfile) +" ] || dirs [ "+( index.dirExist + index.newdir )+" ] |");
        console.log( "----------------------------------------------");
        console.log("[ ☺ ] error Count [ " + (index.errDir+index.errFile) + " ]");
        console.log( "----------------------------------------------");
    }else{
    }
}


