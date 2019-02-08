/**
 * Lugar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    idCasa: {
      model: 'Casa'
    },
    focos: {
      collection: 'Foco',
      via: 'idLugar'
    }
  }
};
