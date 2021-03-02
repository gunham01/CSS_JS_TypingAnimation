setTimeout( () => {
    const line = document.getElementsByClassName("line-1")[0];
    line.innerHTML = line.innerHTML.replace("using css steps()", "by me");
    line.setAttribute("style", "width: 17.5em;");
}, 6000)