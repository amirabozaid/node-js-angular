const fs = require('fs')
const yargs = require('yargs')

const addData= (name,subject,grade,comment) =>{
    const datas = loadData()
    
    const duplicateTitles = datas.filter((data)=> data.name === name
       
       
    )
   

   if(duplicateTitles.length ===0){
        datas.push({
        name,
        subject,
        grade,
        comment
    })
    saveData(datas)
    console.log('Saved Successfully')

   }
   else{
       console.log('Error Duplicate title')
   }
}
const loadData = () =>{
    

    try{
        const data = fs.readFileSync('datas.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}
const saveData = (datas) =>{
    const saveData = JSON.stringify(datas)
    fs.writeFileSync('datas.json',saveData)
}

const removeData = (name) =>{
    const datas = loadData();

    const datasToKeep = datas.filter((data)=>{
        return data.name !== name
    })

    console.log(datasToKeep)

    saveData(datasToKeep)
    console.log('Note is removed')
}

const listData = () =>{
    const datas = loadData()
    
    datas.forEach((data) => {
        console.log(data.name)
        
    });
 }

const readData = (name) =>{
    const datas = loadData()

    const data = datas.find((data)=>{
        return data.name === name
    })

    if(data){
        console.log('The name is'+ data.name)
        console.log('The subject is '+ data.subject)
        console.log('The grade is '+ data.grade)
        console.log('The comment is '+ data.comment)
    }
    else{
        console.log('Name not found')
    }

}
module.exports = {
    addData,
    removeData,
    listData,
    readData
}