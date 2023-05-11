# 1.What is JSX?
### JSX stands for Javascript XML. It is a syntax to write elements in react.But it is not HTML in javascript. It is similar to HTML syntax. It makes the code readable and easier to write.

# 2. What are superpowers of JSX?
### JSX makes it easier to create HTML elements. We do not require createElement() and appendChild() functions to create and render elements in DOM. Code becomes much more cleaner and compact. It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.

# 3.What is the role of type attribute in script tag? What options can i use there?
### Type attribute defines the type of javascript file.
### Following options can be used in type attribute:
### A) Empty String/Not set(default)/ Javascript MIME(text/javascript)
### This type indicates the classic javascript code.
### B) module : It is used when the javascript file is treated as a module.The processing of the script contents is deferred. Module scripts require the use of the CORS protocol for cross-origin fetching.
### C) importmap: It indicates that the body of the element contains a import map.The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.


# 4.{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX
### {TitleComponent} is a react element whereas {<TitleComponent/>} and {<TitleComponent><TitleComponent/>} are react components which consists of react elements.
