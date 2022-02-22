import axios from "axios";

const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("token");
};

const header = {
  headers: {
    Authorization: "Bearer " + getTokenFromSessionStorage(),
  },
}

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const auth = async (email, senha) => {
  const body = {
    email: email,
    senha: senha,
  };

  await api
    .post("/auth", body)
    .then((res) => {
      sessionStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const buscaNoticias = async (palavra, setDado, jornal) => {
  let res = [];
  if (jornal === "none") {
    res = await api.get(`/news/${palavra}`, header);
  } else {
    res = await api.get(`/news/${jornal}/${palavra}`, header);
  }

  setDado(res.data);
};

export const buscaJornais = async (setDado) => {
  const res = await api.get(`/newspaper`);
  setDado(res.data);
};

export const buscaTrends = async (setDado, trendLink) => {

  let res = [];

  if (trendLink) {
    res = await api.get(`/trends/${trendLink}`, header)
    console.log(res.data)
  } else {
    res = await api.get(`/trends`, header);
  }

  setDado(res.data);
};
