# Blueprint UofT Website

## Set Up
If you're not planning on creating or editing react components, you can skip this step (I think).

First, you need to have [Node.js] (https://nodejs.org/en/) install on your machine. Second, run the following in the root directory:
```bash
npm install
```
This will install all the dependencies you need to use JSX.

Next you will need to run the command below:
```bash
npx babel --watch src --out-dir ./components --presets react-app/prod 
```
This will listen to any changes in the src directory (which contains all the JSX code), convert it into JavaScript, and save the converted version of the code in the components directory.

Please make all of your JSX changes in the src directory.

For more information, please visit the react website [here] (https://reactjs.org/docs/add-react-to-a-website.html).