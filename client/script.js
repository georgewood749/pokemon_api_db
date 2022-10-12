async function fetchPokemons(){
    const resp = await fetch(`http://localhost:3000/pokemons`);
    const { data, error } = await resp.json();
    data ? appendPokemons(data) : showError(error);
}

function appendPokemons(data){
    const doggos = document.querySelector("#pokemons");
    data.forEach(d => {
        const li = document.createElement('li');
        li.textContent = `${d.name}: ${d.type}`;
        doggos.append(li);
    })
}

function showError(err){
    const banner = document.createElement('div');
    banner.style.width = '100vv';
    banner.style.backgroundColor = 'red';
    banner.textContent = err;
    document.body.append(banner);
}

document.querySelector('#fetch').addEventListener('click', fetchPokemons)