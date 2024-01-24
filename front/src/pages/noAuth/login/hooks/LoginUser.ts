import apiBasicLayout from "../../../../service/api";

const fazerLogin = async (email: string, senha: string) => {
    try {
        // Faça uma solicitação POST para a rota de login com os dados fornecidos
        const resposta = await apiBasicLayout.post('/login', {email, senha});

        // A resposta pode conter informações sobre o usuário logado, token, etc.
        console.log('Usuário logado:', resposta.data);

        // Retorne os dados do usuário ou faça o que for necessário com a resposta
        return resposta.data;
    } catch (erro) {
        // Se houver um erro, trate-o aqui
        console.error('Erro ao fazer login:', erro);
        throw erro; // Você pode escolher lidar com o erro de maneira diferente, se desejar
    }
};