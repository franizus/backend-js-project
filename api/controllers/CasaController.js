/**
 * CasaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  buscarPorIdUsuario: async function(req, res) {
    const parametros = req.allParams();

    var casasUsuario = await Casa.find({
      idUsuario: parametros.idUsuario
    });

    return res.ok(casasUsuario);
  }
};
