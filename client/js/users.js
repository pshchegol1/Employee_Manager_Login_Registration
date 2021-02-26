 const display = document.querySelector('.display');
 

    //!error
    function getJson()
    {
        fetch('./server/data/users.json')
        .then(res =>{
           return res.json();
        })
        .then(data => {
            console.log(data);
            let li ='';
       
            data.forEach(user => {
                li += `<li>${user.id}</li>`
                li += `<li>${user.username}</li>`
                li += `<li>${user.email}</li>`
                li += `<li>${user.password}</li>`
                
            });
            display.innerHTML = li;
           
           

        })
        .catch(err => {
            console.log(err);
        })
    }

    getJson()