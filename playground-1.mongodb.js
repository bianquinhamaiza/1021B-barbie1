// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('db_barbie');

// Create a new document in the collection.
db.getCollection('filmes').insertMany([
    {
        _id: 7,
        titulo: "Fale Comigo",
        descricao: "Um grupo de amigos descobre uma mão embalsamada que lhes permite conjurar espíritos. Viciado na emoção, um deles vai longe demais e abre a porta para o mundo espiritual.",
        imagem: "/falecomigo.jpg"
    },
    {
        _id: 2,
        titulo: "Lorax",
        descricao: "Ted vive em um lugar onde as árvores são feitas de plástico e tudo é artificial. Ele deixa a cidade com a intenção de trazer uma árvore de verdade para impressionar a garota por quem é apaixonado.",
        imagem: "/lorax.jpg"
    },
    {
        _id: 1,
        titulo: "A Òrfã",
        descricao: "Uma série de eventos alarmantes faz com que uma mulher acredite que algum mal esteja por trás do rosto angelical da filha de nove anos, recentemente adotada.",
        imagem: "/aorfa.webp"
    }
]);
