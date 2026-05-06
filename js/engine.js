let desafioAtual = localStorage.getItem('desafio') || 'php';
let fases = desafios[desafioAtual];

let f = 0, p = 0, t = 0, total_fases = fases.length; etapa = 'montagem';

const B = document.getElementById('blocos');
const R = document.getElementById('resposta');
new Sortable(B, { group: 'x' }); new Sortable(R, { group: 'x' });

function mix(a) { return a.sort(() => Math.random() - 0.5) }

function load() {
    document.getElementById('fase').innerText = `Fase: ${f + 1}/${total_fases}`;
    document.getElementById('resultado').innerText = '';
    document.getElementById('montagem').style.display = 'none';
    document.getElementById('senha').style.display = 'none';
    document.getElementById('debug').style.display = 'none';

    if (etapa === 'montagem') {
        document.getElementById('montagem').style.display = 'block';
        B.innerHTML = ''; R.innerHTML = '';
        mix([...fases[f].montagem.b]).forEach(x => {
            let d = document.createElement('div');
            d.className = 'block';
            d.innerText = x;
            B.appendChild(d)
        });
    }
    else if (etapa === 'senha') {
        document.getElementById('senha').style.display = 'block';
        document.getElementById('dica').innerText = fases[f].dica;
    }
    else if (etapa === 'debug') {
        document.getElementById('debug').style.display = 'block';
        document.getElementById('codigo').innerText = fases[f].debug.bug;
    }
}

function validar() {
    if (etapa === 'montagem') {
        let a = [...document.querySelectorAll('#resposta .block')].map(x => x.innerText);
        if (JSON.stringify(a) === JSON.stringify(fases[f].montagem.c)) {
            p += 10; document.getElementById('pontos').innerText = p;
            etapa = 'senha'; load();
        } else {
            document.getElementById('resultado').innerText = '>.'

            setTimeout(() => {
                document.getElementById('resultado').innerText = '>..'
            }, 200)
            setTimeout(() => {
                document.getElementById('resultado').innerText = '>...'
            }, 400)
            setTimeout(() => {

                document.getElementById('resultado').innerText = '> ERRO... revise o código';
            }, 600)
        }
    }
    else if (etapa === 'senha') {
        let s = document.getElementById('inputSenha').value;
        if (s === fases[f].senha) {
            document.getElementById('inputSenha').value = '';
            etapa = 'debug'; load();
        } else {
            document.getElementById('resultado').innerText = '>.'

            setTimeout(() => {
                document.getElementById('resultado').innerText = '>..'
            }, 200)
            setTimeout(() => {
                document.getElementById('resultado').innerText = '>...'
            }, 400)
            setTimeout(() => {

                document.getElementById('resultado').innerText = '> Senha incorreta';
            }, 600)
        }
    }
    else if (etapa === 'debug') {
        let r = document.getElementById('respostaDebug').value.trim();
        if (r === fases[f].debug.ok || r === fases[f].debug.ok2) {
            document.getElementById('resultado').innerText = '> OK... fase concluída';
            document.getElementById('respostaDebug').value = ''
            f++; etapa = 'montagem';
            if (f < total_fases) load(); else end();
        } else {
            document.getElementById('resultado').innerText = '>.'

            setTimeout(() => {
                document.getElementById('resultado').innerText = '>..'
            }, 200)
            setTimeout(() => {
                document.getElementById('resultado').innerText = '>...'
            }, 400)
            setTimeout(() => {

                document.getElementById('resultado').innerText = '> ERRO... ainda há bug';
            }, 600)
        }
    }
}

function timer() { start = Date.now(); setInterval(() => { t = Math.floor((Date.now() - start) / 1000); document.getElementById('tempo').innerText = t }, 1000) }

function end() {
    let nome = prompt('Nome:');
    nome = nome + ' - ' + desafioAtual;
    let r = JSON.parse(localStorage.getItem('rk') || '[]');
    r.push({ nome, tempo: t }); r.sort((a, b) => a.tempo - b.tempo);
    localStorage.setItem('rk', JSON.stringify(r));
    show();
    document.getElementById('resultado').innerText = '> MISSÃO COMPLETA';
}

function show() {
    let r = JSON.parse(localStorage.getItem('rk') || '[]');
    let html = '<br>> RANKING<br>';
    r.slice(0, 5).forEach(x => html += `> ${x.nome} - ${x.tempo}s<br>`);
    document.getElementById('ranking').innerHTML = html;
}

function limparRanking() {
    localStorage.removeItem('rk');
    show();
}

function trocar() {
    localStorage.removeItem('desafio');
    location.href = 'index.html';
}
load(); timer(); show();
