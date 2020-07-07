export const loadCssAsync = (url: string) => {
    var newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.href = url;
    newLink.type = "text/css";
    var firstLink = document.getElementsByTagName("link")[0];

    setTimeout(() => {
        firstLink &&
            firstLink.parentNode &&
            firstLink.parentNode.insertBefore(newLink, firstLink);
    });
};
