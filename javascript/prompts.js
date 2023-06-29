const renderName = (name) => {
    if (name === null || name === undefined || name === "" || name === "null") {
        document.getElementById("update-name-btn").style.display = "none";
        document.getElementById("enter-name-btn").style.display = "inline"
        document.getElementById("delete-name-btn").style.display = "none"
        document.getElementById("your-name").innerHTML = "&#128551 You haven't entered a name &#128551"
    } else {
        document.getElementById("update-name-btn").style.display = "inline";
        document.getElementById("delete-name-btn").style.display = "inline"
        document.getElementById("enter-name-btn").style.display = "none"

        document.getElementById("your-name").innerHTML = "&#128515; Welcome, " + name + "! &#128515;"
    }
}

const initialNameCheck = () => {
    document.getElementById("update-name-btn").style.display = "none";
    document.getElementById("enter-name-btn").style.display = "none"
    document.getElementById("delete-name-btn").style.display = "none"
    let yourName = localStorage.getItem("your_name");

    if (yourName === null || yourName === "" || yourName === "null") {
        localStorage.setItem("your_name", prompt("Please enter your preferred name"));
        renderName(localStorage.getItem("your_name"));
    } else {
        renderName(yourName)
    }

}

const deleteName = () => {
    localStorage.removeItem("your_name");
    renderName(localStorage.getItem("your_name"));
    alert("Your name has been deleted 👍");
};

const updateName = () => {
    let currentName = localStorage.getItem("your_name");
    let proceed = confirm("Are you sure you'd like to change your name?");
    if (proceed) {
        let revisedName = prompt("Edit your name below", currentName);
        revisedName != null ? localStorage.setItem("your_name", revisedName):"";
        renderName(localStorage.getItem("your_name"));
    }
}

const showCookies = () => {
    document.getElementById("test-cookie").innerText = document.cookies;
};

const testElementContent = () => {
    //let targetElementString = document.querySelector("body > table > tbody > tr > td").innerHTML;
    let targetElementString = element.innerHTML;
    let gbStartsAt = targetElementString.indexOf("&nbsp;GB");
    let gbValue = Number(targetElementString.slice(0,gbStartsAt));

    return (gbValue < 259.6 ? true:false);

}

document.getElementById("delete-name-btn").addEventListener("click", deleteName);
document.getElementById("update-name-btn").addEventListener("click", updateName);
document.getElementById("enter-name-btn").addEventListener("click", initialNameCheck);
document.getElementById("show-cookies-btn").addEventListener("click", showCookies);
document.getElementById("testElementContentBtn").addEventListener("click", testElementContent);

window.onload = (event) => { initialNameCheck(); showCookies(); };