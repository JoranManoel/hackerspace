desafios.python = [
    {
        senha: 'input',
        dica: '> Dica: entrada de dados em Python usa uma função simples...',
        montagem: {
            c: [
                'nome = input("Digite seu nome: ")',
                'print(nome)'
            ],
            b: [
                'print(nome)',
                'nome = input("Digite seu nome: ")',
                'scanf(nome)',
                'echo(nome)'
            ]
        },
        debug: {
            bug: 'nome = inputs("Digite:")',
            ok: 'nome = input("Digite:")'
        }
    },
    {
        senha: 'for',
        dica: 'DICA: use repetição',

        montagem: {
            c: [
                'for i in range(5):',
                'print(i)',
            ],
            b: [
                'print(i)',
                'print(f,"i")',
                'while 1',
                'for i in range(5):',
            ]
        },

        debug: {
            bug: 'for i in range 5:',
            ok: 'for i in range(5):'
        }
    },
       {
        senha: 'for',
        dica: '> Dica: listas em Python geralmente são percorridas com ...',
        montagem: {
            c: [
                'nomes = ["Ana", "Carlos", "Maria"]',
                'for nome in nomes:',
                'print(nome)'
            ],
            b: [
                'print(nome)',
                'for nome in nomes:',
                'nomes = ["Ana", "Carlos", "Maria"]',
                'foreach(nome in nomes)',
                'echo nome'
            ]
        },
        debug: {
            bug: 'for nome nomes:',
            ok: 'for nome in nomes:'
        }
    },
    {
        senha: 'def',
        dica: '> Dica: funções em Python começam com uma palavra reservada...',
        montagem: {
            c: [
                'def somar(a, b):',
                'return a + b',
                'print(somar(2,3))'
            ],
            b: [
                'return a + b',
                'print(somar(2,3))',
                'def somar(a, b):',
                'function somar(a,b)',
                'echo somar(2,3)'
            ]
        },
        debug: {
            bug: 'function somar(a,b):',
            ok: 'def somar(a, b):'
        }
    },
    {
        senha: 'while',
        dica: '> Dica: repetição condicional em Python usa while...',
        montagem: {
            c: [
                'contador = 0',
                'while contador < 5:',
                'print(contador)',
                'contador += 1'
            ],
            b: [
                'contador += 1',
                'contador = 0',
                'while contador < 5:',
                'print(contador)',
                'contador++'
            ]
        },
        debug: {
            bug: 'while contador < 5',
            ok: 'while contador < 5:'
        }
    }


];