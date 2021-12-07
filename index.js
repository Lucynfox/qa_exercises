
//1
const getOutput = document.querySelector("#getOutput");

const getUsers = () => {
    axios
.get("https://reqres.in/api/users?page=2")
        .then(res => {
            console.log(res);
            const users = res.data;
           getOutput.innerHTML = "";

           for (let user of users.data) {
               console.log(user);
            const userCol = document.createElement("div");
            userCol.classList.add("col");

            const userCard = document.createElement("div");
            // duckCard.style = `background-color: ${duck.colour}`;
            userCard.classList.add("card");

            const userBody = document.createElement("div");
            userBody.classList.add("card-body");

            const useravatar = document.createElement("img");
            useravatar.classList.add("card-img-top");
            useravatar.src = user.avatar;
            userBody.appendChild(useravatar);

            const userName = document.createElement("h5");
            userName.classList.add("card-title");
            userName.innerText = user.first_name + " " + user.last_name;
            userBody.appendChild(userName);

            const userEmail = document.createElement("p");
            userEmail.classList.add("card-text");
            userEmail.innerText = `Email: ${user.email}`;
            userBody.appendChild(userEmail);

            const userDelete = document.createElement("button");
            userDelete.innerText = "DELETE";
            userDelete.classList.add("btn", "btn-danger");
            userDelete.addEventListener("click", () => {
                    axios
                        .delete(`https://reqres.in/api/users/${user.id}`)
                        .then(res => getUsers())
                        .catch(err => console.error(err))
                });
            userBody.appendChild(userDelete);
            userCard.appendChild(userBody);    
            userCol.appendChild(userCard);

            getOutput.appendChild(userCol);
            }}
        )
        .catch(err => console.error(err));

}
getUsers();

// axios
//     .delete(`https://reqres.in/api/users/${user.id}`)
//     .then(res => {
//         console.log(res);
//             form.reset();
//             form.duckId.focus();
//             getDucks();
//     })

//2. 
// axios
// .get("https://reqres.in/api/users/2")
// .then(res => {
//     console.log(res);
//     const userInfo = res.data;
//     console.log(userInfo.data);
// })

//3.
// const data = {
//     "name": "Lucy",
//     "job": "ruler of the world"
// }

// axios
//         .post("https://reqres.in/api/users", data)
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => console.error(err));


//4.
// const data = {
//     "email": "eve.holt@reqres.in",
//     "password": "pistol"
// }

// axios
//         .post("https://reqres.in/api/register", data)
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => console.error(err));

// //5. 
// const data1 = {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

// axios
//         .post("https://reqres.in/api/login", data1)
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => console.error(err));
