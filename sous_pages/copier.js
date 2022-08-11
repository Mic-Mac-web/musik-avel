// JavaScript source code
button.addEventListener('click', () => {
    editor.select();
    document.execCommand("copy");
    button.innerText = "Copié !";
});