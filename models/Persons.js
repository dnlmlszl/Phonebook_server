const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Name must be at least 3 characters long.'],
      required: [true, 'Name is required.'],
      unique: true,
    },
    number: {
      type: String,
      minlength: [8, 'Number must be at least 8 characters long.'],
      validate: {
        validator: function (v) {
          // Regular expression for the phone number format
          const phoneRegex = /^\d{2,3}-\d{7,}$/;
          return phoneRegex.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, 'Number is required.'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Person', PersonSchema);
