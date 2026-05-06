desafios.portugol = [
    {
        senha: 'enquanto',
        dica: 'estrutura de repetição',

        montagem: {
            c: [
                'algoritmo "teste"',
                'var i: inteiro',
                'inicio',
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
                'algoritmo "teste"',
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
            ok: 'enquanto i < 5 faca'
        }
    }
];