desafios.crudphp = [
    {
        senha: '3307',
        dica: '> Dica: conexão usa uma porta diferente do padrão...',
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
                '$senha="";',
                'mysqli_close($conn);'
            ]
        },
        debug: { bug: '$conn = new mysqli($servidor,$usuario,$senha);', ok: '$conn = new mysqli($servidor,$usuario,$senha,$banco,$porta);', ok2: '$conn = new mysqli($servidor, $usuario, $senha, $banco, $porta);' }
    },
    {
        senha: 'foreach',
        dica: '> Dica: percorrer resultados exige repetição...',
        montagem: {
            c: [
                'require "conexao.php";',
                '$sql="SELECT * FROM alunos";',
                '$result=$conn->query($sql);',
                'foreach($result as $l){',
                'echo $l["nome"];',
                '}'
            ],
            b: [
                'require "conexao.php";',
                '$result=$conn->query($sql);',
                'echo $l["nome"];',
                '}',
                '$sql="SELECT * FROM alunos";',
                'foreach($result as $l){',
                'echo $result;'
            ]
        },
        debug: { bug: '$sql = "SELECT * alunos";', ok: '$sql = "SELECT * FROM alunos";' }
    },
    {
        senha: 'values',
        dica: '> Dica: inserir dados exige valores e campos...',
        montagem: {
            c: [
                'include "conexao.php";',
                '$n=$_POST["nome"];',
                '$sql="INSERT INTO alunos (nome) VALUES (\'$n\')";',
                '$conn->query($sql);'
            ],
            b: [
                '$conn->query($sql);',
                'include "conexao.php";',
                '$sql="INSERT INTO alunos (nome) VALUES (\'$n\')";',
                '$n=$_POST["nome"];',
                'mysqli_query($conn,$sql);'
            ]
        },
        debug: { bug: '$sql = "INSERT alunos VALUES ($n)";', ok: '$sql = "INSERT INTO alunos (nome) VALUES (\'$n\')";', ok2: '$sql = "INSERT INTO alunos VALUES (\'$n\')";' }
    },
    {
        senha: 'where',
        dica: '> Dica: apagar precisa de condição...',
        montagem: {
            c: [
                'require "conexao.php";',
                '$id=$_GET["id"];',
                '$sql="DELETE FROM alunos WHERE id=$id";',
                '$conn->query($sql);'
            ],
            b: [
                '$sql="DELETE FROM alunos WHERE id=$id";',
                'require "conexao.php";',
                '$conn->query($sql);',
                '$id=$_GET["id"];',
                'unset($id);'
            ]
        },
        debug: { bug: '$sql = "DELETE alunos WHERE id=$id";', ok: '$sql = "DELETE FROM alunos WHERE id=$id";', ok2: '$sql = "DELETE FROM alunos WHERE id = $id";' }
    },
    {
        senha: 'set',
        dica: '> Dica: atualizar precisa para o atributo ...',
        montagem: {
            c: [
                'include "conexao.php";',
                '$id=$_POST["id"];',
                '$n=$_POST["nome"];',
                '$sql="UPDATE alunos SET nome = \'$n\' WHERE id = $id";',
                '$conn->query($sql);'
            ],
            b: [
                '$n=$_POST["nome"];',
                'include "conexao.php";',
                '$sql="UPDATE alunos SET nome = \'$n\' WHERE id = $id";',
                '$id=$_POST["id"];',
                '$conn->query($sql);',
                '$sql="UPDATE alunos nome=\'$n\'";'
            ]
        },
        debug: { bug: '$sql = "UPDATE alunos nome = \'$n\'";', ok: '$sql = "UPDATE alunos SET nome = \'$n\' WHERE id = $id";' }
    }
];