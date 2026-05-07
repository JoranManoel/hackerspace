desafios.portugol = [
    {
        senha: 'algoritmo',

        dica: '> Toda solução precisa seguir uma sequência lógica de passos...',

        montagem: {
            c: [
                'INÍCIO',
                'leia(nome)',
                'escreva(nome)',
                'FIM'
            ],

            b: [
                'escreva(nome)',
                'FIM',
                'leia(nome)',
                'INÍCIO',
                'pare'
            ]
        },

        debug: {
            bug: 'escreva nome)',
            ok: 'escreva(nome)'
        }
    },

        {
        senha: 'enquanto',
        dica: 'estrutura de repetição',

        montagem: {
            c: [
                'inicio',
                'var i: inteiro',
                'i <- 1',
                'enquanto i <= 5 faca',
                'escreva(i)',
                'i <- i + 1',
                'fimenquanto',
                'fimalgoritmo'
            ],
            b: [
                'i <- i + 1',
                'enquanto i <= 5 faca',
                'var i: inteiro',
                'inicio',
                'escreva(i)',
                'i <- 1',
                'fimenquanto',
                'fimalgoritmo'
            ]
        },

        debug: {
            bug: 'enquanto i < 5 ',
            ok: 'enquanto i < 5 faca',
            ok2: 'enquanto i < 5 faça',
        }
    },

    {
        senha: 'variável',

        dica: '> Informações armazenadas precisam de um identificador...',

        montagem: {
            c: [
                'INÍCIO',
                'idade = 18',
                'escreva(idade)',
                'FIM'
            ],

            b: [
                'escreva(idade)',
                'idade =',
                'FIM',
                'idade = 18',
                'INÍCIO'
            ]
        },

        debug: {
            bug: 'maior de idade =',
            ok: 'maior_de_idade = 18',
            ok2: 'maiorDeIdade = 18'
        }
    },

    {
        senha: 'condicional',

        dica: '> Decisões em algoritmos dependem de...',

        montagem: {
            c: [
                'INÍCIO',
                'leia(nota)',
                'SE nota >= 7 ENTÃO',
                'escreva("Aprovado")',
                'FIMSE',
                'FIM'
            ],

            b: [
                'FIM',
                'SE nota >= 7 ENTÃO',
                'escreva("Aprovado")',
                'FIMSE',
                'SE nota = 7',
                'leia(nota)',
                'INÍCIO'
            ]
        },

        debug: {
            bug: 'SE nota >= 7',
            ok: 'SE nota >= 7 ENTÃO',
            ok2: 'SE nota >= 7 ENTAO'
        }
    },

    {
        senha: 'repetição',

        dica: '> Executam ações várias vezes...',

        montagem: {
            c: [
                'INÍCIO',
                'PARA i DE 1 ATÉ 5 FAÇA',
                'escreva(i)',
                'FIMPARA',
                'FIM'
            ],

            b: [
                'FIM',
                'FIMPARA',
                'PARA i DE 1 ATÉ 5 FAÇA',
                'escreva(i)',
                'while(i<5)',
                'INÍCIO'
            ]
        },

        debug: {
            bug: 'PARA i 1 ATÉ 5 FAÇA',
            ok: 'PARA i DE 1 ATÉ 5 FAÇA'
        }
    },

    {
        senha: 'enquanto',

        dica: '> Algumas repetições dependem de condições verdadeiras...',

        montagem: {
            c: [
                'INÍCIO',
                'contador = 0',
                'ENQUANTO contador < 5 FAÇA',
                'escreva(contador)',
                'contador = contador + 1',
                'FIMENQUANTO',
                'FIM'
            ],

            b: [
                'contador = contador + 1',
                'ENQUANTO contador < 5 FAÇA',
                'contador++',
                'FIM',
                'escreva(contador)',
                'contador = 0',
                'FIMENQUANTO',
                'INÍCIO'
            ]
        },

        debug: {
            bug: 'contador = + 1',
            ok: 'contador = contador + 1',
            ok2: 'contador += 1'
        }
    },

    {
        senha: 'vetor',

        dica: '> Estruturas indexadas armazenam múltiplos valores...',

        montagem: {
            c: [
                'INÍCIO',
                'vetor[0] = "Ana"',
                'escreva(vetor[0])',
                'FIM'
            ],

            b: [
                'vetor[1] = "Carlos"',
                'FIM',
                'escreva(vetor[0])',
                'vetor(0)',
                'INÍCIO',
                'vetor[0] = "Ana"'
            ]
        },

        debug: {
            bug: 'vetor(0)',
            ok: 'vetor[0]'
        }
    },

    {
        senha: 'função',

        dica: '> Ajudam a reutilizar código...',

        montagem: {
            c: [
                'FUNÇÃO somar(a,b)',
                'retorne a+b',
                'FIMFUNÇÃO',
                'escreva(somar(2,3))'
            ],

            b: [
                'FUNÇÃO somar(a,b)',
                'retorne a+b',
                'function somar()',
                'FIMFUNÇÃO',
                'escreva(somar(2,3))'
            ]
        },

        debug: {
            bug: 'function somar()',
            ok: 'FUNÇÃO somar(a,b)'
        }
    },

    {
        senha: 'logicos',

        dica: '> Operadores verdadeiros e falsos',

        montagem: {
            c: [
                'INÍCIO',
                'SE idade >= 18 E possuiCNH = verdadeiro ENTÃO',
                'escreva("Pode dirigir")',
                'FIMSE',
                'FIM'
            ],

            b: [
                'SE idade >= 18 E possuiCNH = verdadeiro ENTÃO',
                'FIM',
                'OU',
                'escreva("Pode dirigir")',
                'INÍCIO',
                'FIMSE'
            ]
        },

        debug: {
            bug: 'SE idade >= 18 OU possuiCNH = verdadeiro ENTÃO',
            ok: 'SE idade >= 18 E possuiCNH = verdadeiro ENTÃO'
        }
    }

];