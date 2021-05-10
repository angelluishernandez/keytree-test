# :key::evergreen_tree: ***KEYTREE  TEST*** :key::evergreen_tree:
This project has been done in Angular version 11.2.11.

To run it locally in dev mode download it and run `ng serve` in the console. 
To run a production version run `ng build --prod` 
In either case don't forget to install all the necessary stuff by running `npm install`

You can also check a live version of this app in this [link](https://focused-austin-18b174.netlify.app)

# What will you find here? 

I have completed all the tasks specified in here => [Keytree's github repo] (https://github.com/alanrubin/javascript-interview-project)

I haven't finished the tests but I've manage to cover about 65% of the code. 

# What tools have I used? 

I have used the 11.2.11 version of Angular as I already mentioned, Angular Material for styling, Prettier and TSLint extensions for formatting and linting respectively, JSDocs for comments, Github(obviously) and Gitlens for version control and Netlify to deploy. 

# How does it work? 

You just have to enter a valid Github username in the input and it will show its repos. 
If you provide an invalid user it will throw an error which message will be shown in a Material dialog. 

# What about the code? 

I have used resolvers to make Api calls, since it made sense to me to make Http calls when redirecting to a certain page. 
I have also created a store to avoid unnecessary calls to the Api and allow for faster navigation.
Loading when redirecting is handled by with router events. 
