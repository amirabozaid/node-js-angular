const yargs = require('yargs')
const datas = require('./data')

yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder:{
        name:{
            describe: 'here name of student',
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:'name of subject',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'num of grade',
            demandOption:true,
            type:Number
        },
        comment:{
            describe:'pass or fail',
            demandOption:true,
            type:'string'
        }
    },
    
    handler:(argv) =>{
      
       datas.addData(argv.name,argv.subject,argv.grade,argv.comment)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete data',
    builder:{
        name:{
            describe:'name is required',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        datas.removeData(argv.name)
    }
})

yargs.command({
    command:'list',
    describe:'List data',
    handler:(argv) =>{
        datas.listData(argv.name)
    }
})

yargs.command({
    command:'read',
    describe:'Read data',
    builder:{
        name:{
            describe:'This is required name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
      datas.readData(argv.name)
    }
})

yargs.parse()