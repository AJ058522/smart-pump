const invalidMessage = { msg: "invalid user or password." };

const userLogin = async (email, password) => {
  try {
    const isValidUser = [
      {
        _id: "5410953eb0e0c0ae25608277",
        guid: "eab0324c-75ef-49a1-9c49-be2d68f50b96",
        isActive: true,
        balance: "$3,585.69",
        picture: "http://placehold.it/32x32",
        age: 30,
        eyeColor: "blue",
        name: {
          first: "Henderson",
          last: "Briggs",
        },
        company: "GEEKNET",
        email: "henderson.briggs@geeknet.net",
        password: "23derd*334",
        phone: "+1 (936) 451-3590",
        address: "121 National Drive, Cotopaxi, Michigan, 8240",
      },
    ];
    if (!isValidUser.length) {
      throw invalidMessage;
    }

    if (password != isValidUser[0].password) {
      throw invalidMessage;
    }

    if (isValidUser[0].password) {
      isValidUser[0].password = undefined;
    }
    return isValidUser[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { userLogin };
