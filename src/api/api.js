import axios from "axios";

const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("token");
};

export const api = axios.create({
  baseURL: "https://brazil-news.herokuapp.com",
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
  let res = "";
  if (jornal === "none") {
    res = await api.get(`/news/${palavra}`, {
      headers: {
        Authorization: "Bearer " + getTokenFromSessionStorage(),
      },
    });
  } else {
    res = await api.get(`/news/${jornal}/${palavra}`, {
      headers: {
        Authorization: "Bearer " + getTokenFromSessionStorage(),
      },
    });
  }

  setDado(res.data);
};

export const buscaJornais = async (setDado) => {
  const res = await api.get(`/newspaper`);
  setDado(res.data);
};

export const buscaTrends = async (setDado) => {
  const res = await api.get(`/trends`, {
    headers: {
      Authorization: "Bearer " + getTokenFromSessionStorage(),
    },
  });
  setDado(res.data);
};
