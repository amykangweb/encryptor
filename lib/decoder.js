var decoder = {
  getPassword: function() {
    var password = prompt("Enter your password.");
    if(password == null) {
      alert("No password was entered. Decryption failed.");
      return;
      while(password === "") {
        password = prompt("Please enter your password.");
      }
    }
    this.password = password;
    this.decrypt();
  },
  decrypt: function() {
    myParam = location.search.split('?')[1];
    decrypted = CryptoJS.AES.decrypt(myParam, this.password);
    this.message = decrypted.toString(CryptoJS.enc.Utf8);
    alert(this.message);
  }
}

module.exports = decoder;
