let nom = document.querySelector('#name');
let content = document.querySelector("#content");
let bouton = document.querySelector('button');
let liste = document.querySelector(".listefinale");


bouton.addEventListener('click', () => {
    let nom1 = nom.value;
    
    let content1 = content.value;
    let tache = document.createElement("div");
    tache.classList.add('tache');
    let ch = nom1 + ":" + content1+'    ';
    tache.innerText = ch;
    tache.innerHTML +=`<img src='trash3.svg'>`;
    liste.append(tache);
    nom.value = "";
    content.value = "";
})

liste.addEventListener('click', (e) => {
    if (e.target.matches("img")) {
        let parent = e.target.parentElement;
        parent.remove();
    }
    
})
