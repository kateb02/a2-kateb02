## Forum Generator

My project takes user input and uses it to simulate a forum by randomly adding a name to whatever they type in and sumbit. 
I used a flexbox for my layout. To use it, you just type in what you want a post to say, and then hit enter. 
## Technical Achievements
- **Tech Achievement 1**: 

I made a single-page app that allows a user to sumbit data. From there, the feed is supposed to update with whatever the latest post 
submitted by the user was. I got the server to send a ok response to the post request
(I saw it in developer console), but the then block of my fetch never executes.
I tried different ways of doing promises and using async/await, but I never got it to work, so the feed doesn't update with the content. 

When I did try to update the html using jquery, I kept getting an error 404 response, so I omitted it from the code. 

The server logic adds a field by assigning a random name to each entry (I used a print statement so you can see it in the logs)

### Design/Evaluation Achievements
- **Design Achievement 1**: 

I used an element selector, an ID selector, and a class selector in my css file. I used a flexbox, and I applied a font to
the default text. The submit button also changes color when you roll over it, and I changed the font colors. 

User feedback (track teammates):

Evans - I didn't know if the posts would be signed as me or where to put my name. The input field and button make sense together 
and it is very easy to read the text. The content at the bottom is squished together. 

Ewing - It was easy to tell what I should do with the text box and button. I didn't really know how it would show up afterwards.
The site could use some more styling - it looks very plain