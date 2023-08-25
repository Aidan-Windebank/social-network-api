const { Schema, Types } = require('mongoose');



const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
      type: String,
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




// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;

