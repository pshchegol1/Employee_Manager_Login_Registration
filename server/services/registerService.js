/* 
    Register Service will create  a new user 
*/

const fileService = require('./fileService');

const addUser = ()=>{
  const users = fileService.getFileContents('../data/users.json');
   
    
     
}

addUser({username:"pavlito", email:"pa@eeee.com", password:"1234567"});

/* 
    TEST DATA

    pavs
    pavs@gamil.com
    123456

    users.map(user => {
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(user));
  });

*/