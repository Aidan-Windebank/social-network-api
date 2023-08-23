const { Schema, model } = require('mongoose');



const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      // default: ObjectId set to new object id
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
      trype: string,
      required: true
    },
    createdAt: {
      type: Date ,
      default: Date.now,
      // use getter method to format the timestamp on query
    },
  }
)

// this will not be a model, but rather will be used as the reaction field's subdocument scheme in teh thought model.




const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;

