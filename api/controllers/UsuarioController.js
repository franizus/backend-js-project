/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async (req, res) => {
    const parametros = req.allParams();

    var usuarioLogeado = await Usuario.find({
      correo: parametros.correo
    });

    console.log(usuarioLogeado);

    if (usuarioLogeado && parametros.password === usuarioLogeado.password) {
      return res.ok(usuarioLogeado);
    }
    return res.badRequest({ mensaje: 'Error en inicio de sesion.' });
  }
};
