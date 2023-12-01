const connection = require('../database/mysql-connection');
const Cadastro = require('../models/cadastroModel');
const bcrypt = require('bcrypt');

const loginController = async (req, res) => {
    
    const { email, password } = req.body

    try {

        const user = await Cadastro.findOne({ where: { email } })
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!user || !passwordMatch) {
            return res.status(401).json({ error: 'Email ou senha inválidos' })
        }

        return res.status(200).json({ message: 'Login bem sucedido' });

    } catch (error) {
        
        console.error('Erro de login:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    
    }
}


module.exports = loginController