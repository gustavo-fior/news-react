import axios from "axios";  

export const api =
    axios.create({
        baseURL: "https://brazil-news.herokuapp.com"
    });

export const auth = async (email, senha) => {

    const body = {
        email: email,
        senha: senha
    }

    const res = api.post("/auth", body)
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        });

    return res;

}

export const buscaNoticias = async (palavra, setDado) => {
    const res = await api.get(`/news/${palavra}`);
    setDado(res.data);
}
