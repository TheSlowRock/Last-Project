const firebaseConfig = {
    apiKey: "AIzaSyDWNDcD0xKb99rfuib5sP69RXNmNEmzjlo",
    authDomain: "lastproject-32295.firebaseapp.com",
    projectId: "lastproject-32295",
    storageBucket: "lastproject-32295.appspot.com",
    messagingSenderId: "222850851655",
    appId: "1:222850851655:web:066df51c40c5bbc0346262",
    measurementId: "G-XJQRXXJGQW"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const db = firebase.database()

  function register(){
    var email = document.getElementById('name1').value
    var pass = document.getElementById('pass1').value
      
      db.ref('users').push({
          name: email,
          pass : pass,
      }, (error) => {
          if(error)  {
              console.error('Error adding document: ', error)
              alert('Failed to register user, Please try again')
          } else {
              console.log("Registered")
              alert('User registered successfully')
              document.getElementById('sign-up-form').style.marginTop = '-100%'
              document.getElementById('sign-in-form').style.marginTop = '5%'
          }
      
      })

  }
  document.getElementById("sign-up-btn").addEventListener("click", register);
