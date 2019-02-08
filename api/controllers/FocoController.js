/**
 * FocoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  buscarPorIdCasa: async function(req, res) {
    const parametros = req.allParams();

    var focosCasas = await Foco.find({
      idCasa: parametros.idCasa
    });

    return res.ok(focosCasas);
  }
};
