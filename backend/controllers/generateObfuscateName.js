const obfuscateName = (length) => {
  // const otpNumber = Math.floor(100000 + Math.random() * 900000);
  const possibleString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkamnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    const newString = possibleString.charAt(
      Math.floor(Math.random() * possibleString.length)
    );
    result += newString;
  }

  return result;
};

module.exports = obfuscateName;