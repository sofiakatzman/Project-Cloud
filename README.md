# Project Cloud
### Description
Project Cloud is an app that you can use to keep record of all of your project ideas. <br />
Project Cloud is connected to an API of APIs so that you can easily be inspired for your next project! 


### Installation 

After cloning this app, please follow the below commands on your command terminal in the app's directory in order to be able to access Project Cloud. 

// install all node dependencies
> npm install

// start npm react server
> npm start 

// if there are any npm issues : run this to reinstall node packages: 
> nvm install node --reinstall-packages-from=node

// connect to json database server-- we are already using port 3000 for our react server & want to use port 8000 for our db.json
// you will need to do this in a seperate terminal as it will host our data server
> npx json-server --watch data/db.json --port 8000 

install react router 
> npm install react-router-dom 

### Usage Visuals
To watch a video walkthrough, click [here](https://youtu.be/vyX1ysLiosc). 

### Contributing
Pull requests are welcome for reiew. No major changes are allowed.<br />
Please reach out to support if you have any questions.

### License
Licensing is not being offered at this time. For any questions, please reach out to our support team.

### Acknowledgement
Thank you to api.publickapis.org for their compiled list of APIs. <br />
link : https://api.publicapis.org/entries

### Support
For any questions or support, please reach out to katzmansof@gmail.com .

### Project Requirements 
To Do: <br />
✓ Create 5 Functional Components <br />
✓ Client Side Routing - 3 Minimum Links + Navigation Bar<br />
✓ Set up One Post Request (send new projects to storage database)

Bonus: <br />
✓ Connect API button to New Project Form so that API info auto fills when creating new project 
