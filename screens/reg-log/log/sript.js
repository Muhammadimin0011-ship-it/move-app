const login = document.getElementById("enter");

login.addEventListener("click", () => {

    const username = document.getElementById("forname").value;
    const userpassword = document.getElementById("forpassword").value;

    const user = JSON.parse(localStorage.getItem("users")) || [];

    const findUser = user.find((users) => {
        return (
            users.username === username &&
            users.password === userpassword
        );
    });

    if (findUser) {
        alert("Login successful ✅");
        window.location.href = `../../../index.html`
    } else {
        alert("User is not defined ❌");
    }
});