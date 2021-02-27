    
    async function getData()
    {
        const req = await fetch('./server/data/users.json')
        const result = await req.json()
       console.log(result)
       return result
    }
    

    getData()

     

  
    
  