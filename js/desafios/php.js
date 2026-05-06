desafios.php = [
    {
        senha: '3307',
        dica: 'porta diferente...',
        montagem: {
            c: [
                '$servidor="localhost";',
                '$usuario="root";',
                '$senha="";',
                '$banco="escola";',
                '$porta=3307;',
                '$conn = new mysqli($servidor,$usuario,$senha,$banco,$porta);'
            ],
            b: [
                '$usuario="root";',
                '$conn = new mysqli($servidor,$usuario,$senha,$banco,$porta);',
                '$porta=3307;',
                '$banco="escola";',
                '$servidor="localhost";',
                '$senha="";'
            ]
        },
        debug: {
            bug: '$conn = new mysqli($servidor,$usuario,$senha);',
            ok: '$conn = new mysqli($servidor,$usuario,$senha,$banco,$porta);'
        }
    }
];