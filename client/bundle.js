(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
