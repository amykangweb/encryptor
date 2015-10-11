var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value;
  },
  getPassword: function() {
    var password = prompt("Please enter your password.");
    if(password == null) {
      alert("No password was entered. Encryption failed.");
      return;
    }
    while(!password) {
      password = prompt("Please enter your password.");
    }
    this.password = password;
    this.setUrl();
  },
  setUrl: function() {
    var url = this.encrypt().toString();
    this.replaceMessageWithUrl(url);
  },
  replaceMessageWithUrl: function (url) {
    var msgForm = document.getElementById('message');
    msgForm.value = "Your encrypted message is available to anyone with the passphrase at:\n\n";
    msgForm.value += "http://localhost:4000/decode.html?" + url;
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password)
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
    return cypher
  },
  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
}

module.exports = encoder;
