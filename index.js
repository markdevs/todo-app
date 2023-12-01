require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const path = require('path');
const sequelize = require('./src/database/mysql-connection');
const postRoutes = require('./src/routes/postRoutes');

app.use(express.json());
app.use(postRoutes);
app.use('public', express.static(path.join(__dirname, 'src', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'src', '/views'));

(async() => {
    sequelize.sync()
    .then(() => {
      console.log('Modelo sincronizado com o banco de dados');
    })
    .catch(erro => {
      console.error('Erro ao sincronizar o modelo:', erro);
    });
  
})();




// app.use((req, res, next) => {
//     return res.status(400).json({message: 'Erro 404 - O servidor não pode encontrar o recurso solicitado. No navegador, isso significa que o URL não é reconhecido'});
// })

// app.use((err, req, res, next) => {
//     return res.status(500).json({message: 'Erro 500 - Ocorreu algum erro interno no servidor.'});
// })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


