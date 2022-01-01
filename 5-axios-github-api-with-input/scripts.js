function getDetails() {
    let userName = document.getElementById("uname").value;
    document.getElementById("names").innerHTML = "";
    axios
        .get(`https://api.github.com/users/${userName}/followers`)
        .then((res) => {
            let details = res.data;
            console.log(details);
            details.forEach((user) => {
                document.getElementById("names").innerHTML += `${user.login}<br>`;
                console.log(user.login);
            });
        })
        .catch((err) => {
            console.log(err);
            document.getElementById("names").innerHTML = "Some Error Occured!";
        });
}
