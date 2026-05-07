desafios.php = [

    {
        senha: 'echo',

        dica: '> Em PHP, existe um comando usado para exibir mensagens na tela...',

        montagem: {
            c: [
                '<?php',
                '$nome = "Joran";',
                'echo $nome;',
                '?>'
            ],

            b: [
                'echo $nome;',
                '$nome = "Joran";',
                'print(nome);',
                '<?php',
                '?>'
            ]
        },

        debug: {
            bug: 'echo nome;',
            ok: 'echo $nome;'
        }
    },

    {
        senha: '$',

        dica: '> Variáveis em PHP possuem um símbolo especial no início...',

        montagem: {
            c: [
                '<?php',
                '$idade = 18;',
                '?>'
            ],

            b: [
                '$idade = 18;',
                'echo idade;',
                '<?php',
                '?>',
                'idade = 18;'
            ]
        },

        debug: {
            bug: 'idade = 18;',
            ok: '$idade = 18;'
        }
    },

    {
        senha: 'if',

        dica: '> Estruturas condicionais tomam decisões com base em condições...',

        montagem: {
            c: [
                '<?php',
                '$nota = 8;',
                'if($nota >= 7){',
                'echo "Aprovado";',
                '}',
                '?>'
            ],

            b: [
                'echo "Aprovado";',
                'if($nota >= 7){',
                '<?php',
                '}',
                'if nota >= 7',
                '$nota = 8;',
                '?>'
            ]
        },

        debug: {
            bug: 'if nota >= 7',
            ok: 'if($nota >= 7){'
        }
    },

    {
        senha: 'while',

        dica: '> Algumas estruturas executam comandos várias vezes...',

        montagem: {
            c: [
                '<?php',
                '$i = 0;',
                'while($i < 5){',
                'echo $i;',
                '$i++;',
                '}',
                '?>'
            ],

            b: [
                '$i++;',
                'while($i < 5){',
                'echo $i;',
                '<?php',
                'while i < 5',
                '$i = 0;',
                '}',
                '?>'
            ]
        },

        debug: {
            bug: 'while i < 5',
            ok: 'while($i < 5){'
        }
    },

    {
        senha: 'foreach',

        dica: '> Arrays podem ser percorridos automaticamente em PHP...',

        montagem: {
            c: [
                '<?php',
                '$nomes = ["Ana","Carlos","Maria"];',
                'foreach($nomes as $n){',
                'echo $n;',
                '}',
                '?>'
            ],

            b: [
                'echo $n;',
                'foreach($nomes as $n){',
                'for($nomes)',
                '$nomes = ["Ana","Carlos","Maria"];',
                '}',
                '<?php',
                '?>'
            ]
        },

        debug: {
            bug: 'for($nomes)',
            ok: 'foreach($nomes as $n){'
        }
    },

    {
        senha: 'function',

        dica: '> Blocos reutilizáveis em PHP possuem uma palavra reservada específica...',

        montagem: {
            c: [
                '<?php',
                'function somar($a,$b){',
                'return $a + $b;',
                '}',
                'echo somar(2,3);',
                '?>'
            ],

            b: [
                'function somar($a,$b){',
                'return $a + $b;',
                'echo somar(2,3);',
                'funcao somar()',
                '}',
                '<?php',
                '?>'
            ]
        },

        debug: {
            bug: 'funcao somar()',
            ok: 'function somar($a,$b){'
        }
    },

    {
        senha: 'array',

        dica: '> Estruturas de múltiplos valores usam colchetes...',

        montagem: {
            c: [
                '<?php',
                '$cores = ["verde","azul","preto"];',
                'echo $cores[1];',
                '?>'
            ],

            b: [
                'echo $cores(1);',
                '$cores = ["verde","azul","preto"];',
                '<?php',
                '?>',
                'echo $cores[1];'
            ]
        },

        debug: {
            bug: 'echo $cores(1);',
            ok: 'echo $cores[1];'
        }
    },

    {
        senha: 'post',

        dica: '> Dados enviados por formulários usam superglobais...',

        montagem: {
            c: [
                '<?php',
                '$nome = $_POST["nome"];',
                'echo $nome;',
                '?>'
            ],

            b: [
                'echo $nome;',
                '$nome = $_POST["nome"];',
                '$_POST(nome)',
                '<?php',
                '?>'
            ]
        },

        debug: {
            bug: '$nome = POST["nome"];',
            ok: '$nome = $_POST["nome"];'
        }
    },

    {
        senha: 'include',

        dica: '> Arquivos externos podem ser incorporados ao sistema...',

        montagem: {
            c: [
                '<?php',
                'include "menu.php";',
                'echo "Sistema iniciado";',
                '?>'
            ],

            b: [
                'echo "Sistema iniciado";',
                'include(menu.php)',
                'include "menu.php";',
                '<?php',
                '?>'
            ]
        },

        debug: {
            bug: 'include(menu)',
            ok: 'include "menu.php";',
            ok2: 'include("menu.php");'
        }
    },

    {
        senha: 'classe',

        dica: '> Programação orientada a objetos usa estruturas...',

        montagem: {
            c: [
                '<?php',
                'class Usuario {',
                'public $nome;',
                '}',
                '?>'
            ],

            b: [
                'public $nome;',
                'class Usuario {',
                'classe Usuario',
                '}',
                '<?php',
                '?>'
            ]
        },

        debug: {
            bug: 'classe Usuario',
            ok: 'class Usuario {'
        }
    }

];