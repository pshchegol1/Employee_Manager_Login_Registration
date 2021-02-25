
    const display = document.querySelector('.display');
    console.log(display)

    function getUsers()
    {
        fetch('../server/data/users.json')
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            let li = '';

            data.map(user =>{
                li += `<li>${user.id}</li>`
                li += `<li>${user.username}</li>`
                li += `<li>${user.email}</li>`
                li += `<li>${user.password}</li>`
            });
            display.innerHTML = li
        })
    }

