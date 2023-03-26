First a Fall Why Using React Js ?

React provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework. Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.

How to Implement React Js ?

Created a new folder in where you want your drivers.then Click That folder location connected to command prompt.
Create react js -That comment is npm install -g create-react-app
Checking react Version -that comment is create-react-app --version
Project creation open a folder in vs code. then select terminal — ->new terminal enter the commend -create-react-app bankproject (bankproject that is my file name or project name)
That time take a few minutes to create a react application and install react dependencies.
would you like run a program -new terminal -cd folder name(inside a folder in terminal) enter the code npm start program is executed.
Let’s Start the Project
My Project is Transaction Customer Use Case

My Project based on this diagram and implement the event, exception and validation on login, new customer creation, new transaction creation, transaction filter. eventually login and logout has to done using Session Storage that is my task.

I need some of styles so i’m using Bootstrap, Bootstrap-Icons,MUI-Icons and CSS then i am using Router Dom for path setting.
Bootstrap and Bootstrap Icons Install in react

npm install react-bootstrap bootstrap
npm install bootstrap-icons
How to import in files

import ‘bootstrap/dist/css/bootstrap.min.css’
import ‘bootstrap-icons/font/bootstrap-icons.css’
create a external file for css save filename.css then where you want css design import that file.
import ‘./Pagedesign.css’
Router-Dom

install — npm install react-router-dom
Landing Page Creation

A landing page is a website page with a specific purpose — the objective of a landing page is to convert visitors into leads.
Landing pages contain lead forms that ask visitors for their contact information in exchange for something of value, otherwise known as an offer.

I’m giving some Information our bank for Visitors then using Cards for Explaining Loan offers
Existing Bank Customers who wants to a Loan Applying for online get the loan details then Transaction , Checking your transaction list that is the main part of the project. if you continue with our site click login button then enter the user name and password.
Landing page out look

Login Page Creation

The login page allows a user to gain access to an application by entering their username and password or by authenticating using a login.

I’m using username and password in Session Storage because Session storage allows us to store data in key/value pairs in the browser. The data which we save in session storage will only be persisted in the current browser tab.
If we close the current tab or browser window, the saved data in session storage will be cleared.
Login page out Look

Home page Creation

I’m using Navbar A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.
NavDropdown Items are Create new Account, new Transaction, List All Transactions we will discuss about it upcoming topics.

And also I’m using one button in navbar that is for Logout button it work as remove the Session Storage.
If you click the logout button window location assign in landing page.
Home page out Look

Array Values and All crud performance activated function


List All Transaction

I have a some transaction list I’m using table for Print the all transaction because The sorting, filtering, and pagination features of tables make it a powerful and declarative tool.
using useState for the values get and set for List All Transaction and also I’m using map Function for print all values.

Inside the table body using two buttons for Update and Delete the Transaction List’s.

If you want to Update some Transaction click the Edit button.
would you like to delete the transaction click the delete button.
Both of buttons worked as filter Function.
New Transaction Creation

Using Form for collect data from the user and send it to the server for further processing.
I have a set of Fields for new Transaction using in The label attribute specifies the title of the text track.
The input tag specifies an input field where the user can enter data. The input element is the most important form element. The input element can be displayed in several ways, depending on the type attribute.

The onchange attribute fires the moment when the value of the element is changed.
The value attribute specifies the value of an input element.
Using two buttons for Send or Cancel Transaction if you click the button showing alert message.
If you make new Transaction Completed the entire input fields then click it the send button Showing a alert message for your entire Json fields because using JSON.stringify
New Transaction out Look

Router Dom

The primary goal of Router in React JS is to supply the browser with an asynchronous URL that corresponds to the data that will show on the web page. It is mainly used to create single-page web apps since it retains the application’s regular structure and functionality.
We wrap our content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Conclusion

https://github.com/THIVINKANTH/Bankproject.git
