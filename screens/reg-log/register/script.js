const btn = document.getElementById("add");

btn.addEventListener("click", () => {

    const rname = document.getElementById("for-name").value;

    const rpass = document.getElementById("for-password").value;

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const Newuser = {
        username: rname,
        password: rpass
    };

    try {

        users.push(Newuser);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Register successful ✅");

    } catch (error) {

        console.log(error);

    }

});