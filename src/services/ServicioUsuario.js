import axios from "axios";

class ServicioUsuario {
  url = "https://68dc79d67cd1948060aa6861.mockapi.io/api/usuarios";

  getUsuarios = async () => {
    try {
      const { data } = await axios.get(this.url);

      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default ServicioUsuario;
