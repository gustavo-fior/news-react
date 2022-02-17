import axios from "axios";

const getTokenFromSessionStorage=()=>{
    return sessionStorage.getItem("token");
}

export const api =
    axios.create({
        baseURL: "http://localhost:8080"
        
    });

export const auth = async (email, senha) => {

    const body = {
        email: email,
        senha: senha
    }

    await api.post("/auth", body)
        .then(res => {
            sessionStorage.setItem("token", res.data.token);
        }).catch(err => {
            console.error(err);
        });
}

export const buscaNoticias = async (palavra, setDado) => {

    const res = await api.get(`/news/${palavra}`,{headers:{
        "Authorization": "Bearer " + getTokenFromSessionStorage()
    }});
    setDado(res.data);
}
