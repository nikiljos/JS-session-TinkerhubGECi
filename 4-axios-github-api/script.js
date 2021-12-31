axios.get("https://api.github.com/users/nikiljos")
.then(function test(res){
    // console.log(res.data)
    var details=res.data;
    console.log(details)
    document.getElementById("followers").innerText=details.followers;
    document.getElementById("following").innerText=details.following
})

