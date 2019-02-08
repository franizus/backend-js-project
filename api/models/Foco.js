/**
 * Foco.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    idPlaca: {
      type: 'number',
      required: true
    },
    estado: {
      type: 'boolean',
      required: true
    },
    idLugar: {
      model: 'Lugar'
    }
  }
};
