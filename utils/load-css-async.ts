export const loadCssAsync = (url: string) => {
    var newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.href = url;
    newLink.type = "text/css";

    setTimeout(() => {
        document.head.appendChild(newLink);
    });
};
