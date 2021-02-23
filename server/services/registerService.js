/* 
    Register Service will create  a new user 
*/

const fileService = require('./fileService');

 exports.addUser = ()=>{
    const users = fileService.getFileContents('../data/users.json');
   
  users.forEach(user => {
      const add  = fileService.writeFileContents(user)
      return add
  });

    
     
}

