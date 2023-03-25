# "Plant Project App"
## Project Description:
 Web application for people passionate about plants and nature, to get all the information about it and have a history of your searches. Only for registered users, you can even change the logo of your profile to the plant you like.
 For the backend we used Firebase to store the registration/login data and other user data as well as integrating the token (JWT) provided by Firebase on the client side in the LocalStorage and managing the frontend with React.
### Technologies:
- React
- React Router Dom
- Tanstack Query
- Material UI
- Notistack
- Firebase
- Axios
- Redux Toolkit
- Emotion
- Framer Motion
- Tailwind
- Vite
## Api: 
https://perenual.com/docs/api
### Important about imports
In this project we used setup path aliases in the imports to avoid concatenation of dots and backslashes.
- Example:
```js
import { userRegister } from "@/app/features/user/userActions";
```
#### Specifically these steps:
- 1) Cloning the repository using [Git](https://git-scm.com/)

```
git clone https://github.com/Afrozens/take-notes-app.git 
```
- 2) Install dependency
```
npm install
```
- 3) Raising the development server
```
npm run dev
````
### Implement in the future:
- History page. Implement search history of the user logged in to Firebase.(**NO-CHECKED**).
- Display all the specifications of the specific plant that the user wants to know about (**NO-CHECKED**)
- Improve application performance as well as user experience (**NO-CHECKED**)
- Implement configurations for users  (**NO-CHECKED**)
---
## Deploy app: 
[Plant Project App]()
## Screenshot:
#### Desktop:
![main landing page](https://i.imgur.com/nubnX3H.png)
![main search plant](https://i.imgur.com/06uZmZM.png)
![main search plant in infinite scroll](https://i.imgur.com/9EPKLvI.png)
![main profile page](https://i.imgur.com/cXhKM8b.png)
#### Mobile:
![main landing page (mobile)](https://i.imgur.com/RnIjF1U.png)
![main search page (mobile)](https://i.imgur.com/MqoFH9I.png)
![main profile page (mobile)](https://i.imgur.com/4E8rFla.png)

---
