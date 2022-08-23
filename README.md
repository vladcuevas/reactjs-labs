# React JS Labs

From this point, there are going to be 3 branches in this repository:

1. Master, which will be replaced in the future
2. The [ReacJS][1] version without API calls
3. The ReactJS version with API calls using [AXIOS][2]
    - This version will use the RESTAPI created in the project [Sping-Boot-Labas][3]

# Requirements

A [firebase][4] account.

Rename firebase-back.js from src/components/Login to firebase.js and fill the below keys with your values from firebase:

```json
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
```

Create an admin user in firebase

Log in with the user

# Start the application

npm start

Log with the user created as admin, or create a user in the main page

  [1]: https://reactjs.org/
  [2]: https://github.com/axios/axios
  [3]: https://github.com/vladcuevas/spring-boot-labas
  [4]: https://firebase.google.com/
