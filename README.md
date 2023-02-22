# Links and references

- <https://bgjar.com/polygon-luminary>
- <https://svg2jsx.com/>
- <https://daisyui.com/>
- <https://www.bezkoder.com/react-node-express-mongodb-mern-stack/>

- Link til repoet <https://github.com/Assassinduck/pg6301_exam>

## Endpoints

(I assume this is what you want you mean when you say "endpoints" and not all the sub-routes)
-/api/employees
-/api/activities

### instructions for how to use and start the app

- first, run npm install in the root of "PGR6301"
- If you want to build it, run npm run build in the root of "PGR6301"
- testing is done by running npm run test in root of "PGR6301"

All of the tasks for E is done, some of the tasks for D is compleated, i didnt make the manager since i got short on time because of trouble setting the project up.
The part with CI/CD didnt work for me, i a lot of my tests crash there but they work fine locally, the workers wouldnt use my configs when they ran the tests.
I have a predefined user named Stian that has access to a few activities which he can log time to. I hardcoded a lot of the logic around the info that is used to call the api since i didnt have auth or anything that would make it possible for random users to call the endpoints.

one thing of note is that i couldnt get .env to work for some reason, so thats why the full URL is used instead. I know that isnt ideal, and i wish i had time to fix it.

I included some of the endpoints that i would have used to create the functionality for making Employees and modifying them as a manager.
I didnt end up getting to implementing them in the frontend, but some of them can be found in the employeeApi file.

i did give the user a personalized welcome message, but it wasnt behind a real login.

Hope this is enough to atleast get an E, i stuggled like hell setting up everything and i am proud that i even got to the "end"
