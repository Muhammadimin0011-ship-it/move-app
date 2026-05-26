const login = document.getElementById("enter");


login.addEventListener("click", () => {

    const username = document.getElementById("forname").value


    const userpassword = document.getElementById("forpassword").value

    const user = JSON.parse(localStorage.getItem("users")) || [];

    const findUser = user.find((users) => {

        return (
            users.username === username &&
            users.userpassword === userpassword
        );
    });

    if (findUser) {
        alert("Login successful ✅")
    } else {
        alert("User is not definet ❌")
    }
})