const btn = document.getElementById("add");

btn.addEventListener("click", () => {
    const rname = document.getElementById("for-name");

    const rpass = document.getElementById("for-password")

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const Newuser = {
        rname,
        rpass
    }

    try {
        users.push(Newuser);

        localStorage.setItem("users",
            JSON.stringify(users)

        );

        alert("Register succesful ✅")
    } catch (error) {
        console.log(error);
        
    }
})

