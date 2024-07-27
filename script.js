const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = 'red';
        item.style.transform = 'scale(1)';
    });
});

document.querySelector("#email-div").addEventListener("click", () => {
    const link = "mailto:luvya.556@gmail.com";
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
})