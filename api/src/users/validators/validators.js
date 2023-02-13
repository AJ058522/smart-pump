const nameLength = { min: 6, max: 191 };
const passwordLength = { min: 11, max: 128 };
const ageLength = { min: 11, max: 128 };

const updateValidator = {
  age: {
    isInt: {
      options: { gt: ageLength.min, lt: ageLength.max },
      errorMessage: `min age shoud be ${ageLength.min}, max age shoud be ${ageLength.max}`,
    },
  },
  first_name: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  last_name: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  company: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  phone: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  address: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  userId: {
    in: ["params", "query"],
    isMongoId: true,
    errorMessage: `must be a valid id`,
    trim: true,
  },
};

module.exports = { updateValidator };
