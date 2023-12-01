const connection = require('../database/mysql-connection');
const Cadastro = require('../models/cadastroModel');
const bcrypt = require('bcrypt');



const login = async (req, res) => {
   
    const { firstName, lastName, email, password } = req.body
    
    const verifyEmail = await Cadastro.findOne({ where: { email: email } });
    const hashedPassword = await bcrypt.hash(password, 10);
    
    if (verifyEmail) {
    
        console.log('Este e-mail já está cadastrado.');
        return res.status(401).json({ message: 'Este e-mail já está cadastrado.' });
    
    } else {

        const modelSave = await Cadastro.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        
        console.log('Usuário cadastrado com sucesso.');
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });

    }


}

module.exports = login