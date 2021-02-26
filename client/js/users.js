  
 
   async function getUsers()
    {
        const req = await fetch('http://localhost:3000/api/v1/users')
        const result = await req.json()
        console.log(result)
    }
   
    getUsers()
    
  