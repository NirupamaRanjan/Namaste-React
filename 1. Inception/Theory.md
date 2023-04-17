# 1. What is Emmet?
### Emmet is free add on tool for the text editor that allows to type shortcuts and expand it to full piece of code. It saves both keystrokes and time.
# 2. Difference between library and framework?
### Framework is a collection of libraries which implements a particular methedology whereas libraries are included in an application to implement certain functionalities.
### Developers decides to call a library but when we use a framework then it is the framework which decides when to call a library.
# 3. What is CDN? Why do we use it?
### CDN stands for Content Delivery Network. It is geographically distributed group of servers that caches content close to end users. It quickly transfers the data needed for internent content like HTML pages,javascript files, CSS, images and videos.There are a lot of benifits of CDN like improving website load times,reduced bandwidth costs,increased content availability etc.
# 4. Why is react known as react?
### React is called react because it reacts. It reacts to when users are doing things like mouse clicking, submitting and typing.React is declarative which means if we tell it what we want then it solves the "how" and builds the user interfaces in the web browser.
# 5. What is cross-origin in script tag?
### The crossorigin attribute sets the mode of the request to an HTTP CORS Request.CORS stands for Cross-Origin Resource Sharing. Web pages often make requests to load resources on other servers. Here is where CORS comes in.A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

# 6. What is the difference between React and ReactDOM?
### React holds package for components, state, props and all the code that is react but the ReactDOM package is the bridgee between React and the DOM. It mounts your application to the index.html file with ReactDOM.render().

# 7.What is difference between react.development.js and react.production.js files via CDN?
### As the name suggests react.development.js is used for development purposes.We have Source Maps, debugging and often times hot reloading ability in these builds.
#### On the other hand the production build  runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack devtool settings.

# 8. What are async and defer?
### async  and defer boolean attributes are used with script tag  to load external scripts efficiently into our web page.
### <script src=”index.js”/>  while loading and executing the script the HTML parsing is paused. In this way js is blocking the  HTML.

### <script async src=”index.js”/> HTML parsing is paused only for the period of execution and not loading the script. Script is loaded in async manner

### <script defer src=”index.js”/> Script loading is done along with HTML parsing and executed only after the HTML is parsed.





