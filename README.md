# Project: Mini Message Board

[The Odin Project link](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/mini-message-board)

---

1. Use express-generator to set up a basic project using whichever templating language you prefer. If you want, you can set it all up manually – it doesn’t really take that much longer.
    * Hint: here are links to some of the more popular templating language docs: PUG, EJS, Handlebars
2. We are going to have 2 routes, the index ("/") and a new-message form ("/new"). The generator already created a router for our index, so find that file and open it up. It can be found at routes/index.js. There is already a router.get() method for "/" that should be rendering your index view, so lets add some messages to it.
3. Create an array at the top of your index router called messages and put a couple of sample messages inside of it like this:

```javascript
const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];
```

4. Next, in your index template (in the "views" folder) loop through the messages array using whichever templating language you selected and for each one, display the user, text and the date the message was added. Don’t forget to make your messages available to your template by including it in the res.render ‘locals’ object (e.g. res.render('index', { title: "Mini Messageboard", messages: messages })).
5. Next let’s set up the new message form. In the router add a router.get() for the "/new" route and point it to a template named "form". In the views directory create your form template. Add a heading, 2 inputs (one for the author’s name and one for the message text) and a submit button. To have the form make a network request you will need to define it with both a method and an action like so:

```html
<form method="POST" action="/new">
   put your inputs and buttons in here!
</form>
```

6. With your form set up like this, when you click on the submit button it should send a POST request to the url specified by the action attribute, so go back to your index router and add a router.post() for "/new".
7. In order to get and use the data from your form, you will need to access the contents of your form inside router.post() as an object called req.body. The individual fields inside the body object are named according to the name attribute on your inputs (the value of <input name="messageText"> will show up as req.body.messageText inside the router.post function).
8. In your router.post() take the contents of the form submission and push them into the messages array as an object that looks something like this:

```javascript
messages.push({text: messageText, user: messageUser, added: new Date()});
```
9. At the end of the router.post() function use res.redirect('/') to send users back to the index page after submitting a new message.
10. At this point, you should be able to visit /new (it might be a good idea to add a link to that route on your index page), fill out the form, submit it and then see it show up on the index page!