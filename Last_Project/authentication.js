import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
        import {
          getAuth,
          signInWithEmailAndPassword,
          createUserWithEmailAndPassword,
        } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
    
        const firebaseConfig = {
            apiKey: "AIzaSyDWNDcD0xKb99rfuib5sP69RXNmNEmzjlo",
            authDomain: "lastproject-32295.firebaseapp.com",
            projectId: "lastproject-32295",
            storageBucket: "lastproject-32295.appspot.com",
            messagingSenderId: "222850851655",
            appId: "1:222850851655:web:066df51c40c5bbc0346262",
            measurementId: "G-XJQRXXJGQW"
        };

        // function signUp(){
         
           
            
        //     db.ref('users').push({
        //         name: email,
        //         age : pass,
                
        //     }, (error) => {
        //         if(error)  {
        //             console.error('Error adding document: ', error)
        //             alert('Failed to register user, Please try again')
        //         } else {
        //             console.log("Registered")
        //             alert('User registered successfully')
        //             window.location.href = './homepage.html'
        //         }
            
        //     })

        // }
        function signIn(){
            var email = document.getElementById('name2').value;
            var pass= document.getElementById('pass2').value;
            signInWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    var user = userCredential.user
                    console.log(user)
                    alert('Logined successfully')
                    
                })
                .catch(error => {
                    var errorCode = error.errorCode
                    var errorMessage = error.message
                    console.error(errorMessage)
                    var Uppercased = false
                    var Lowercased = false
                    var Specialletter = '/[!@#$%^&*(),.?":{}|<>];'
                    var Spletter = false
                    
                    for (let i = 0; i < pass.length; i++) {
                        console.log(pass[i]);
                        if (email.length < 6) {
                            alert('Username must have at least 6 letters');
                            break;
                        } else if (pass.length < 8) {
                            alert('Password must have at least 8 letters');
                            break;
                        }
                        if (pass[i] === pass[i].toUpperCase()) {
                            Uppercased = true;
                            // This condition will always be false since it's within the 'if' where Uppercased is set to true.
                            // The check for Uppercased should be outside the for loop.
                        }
                        if (pass[i] === pass[i].toLowerCase()) {
                            Lowercased   = true;
                            // This condition will always be false since it's within the 'if' where Uppercased is set to true.
                            // The check for Uppercased should be outside the for loop.
                        }
                        if (Specialletter.includes(pass[i])){
                            Spletter =true
                        }
                        }

                        // Check if there was no uppercase letter in the password after the loop.
                        if (!Uppercased) {
                            alert('Password must have at least 1 uppercase letter');
                            console.log(pass);
                        }
                        if (!Lowercased) {
                            alert('Password must have at least 1 lowercase letter');
                            console.log(pass);
                        }
                        if(!Spletter){
                            alert('Password must have at least 1 special letter')
                            console.log(pass)
                        }
                                            
                })
        }
    
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
       
    
        document.getElementById("sign-in-btn").addEventListener("click", signIn);



         
      

