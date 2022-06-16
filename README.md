# redirector

A simple URL redirector for easy app deep linking when link embeds don't allow non-HTTP(S) links
(like Notion and Google Docs). Use at your own risk. 

This is hosted on https://r.mhmd.us 

## Usage

- Append any link to this path: `https://r.mhmd.us/?redirect=YOUR LINK HERE`. 
- After 5 seconds, the tab will automatically close.
(This might not work if you're pasting the link yourself but when it's clicked from somewhere else, it *should*)

### Use cases

Redirect app scheme specific URLs from websites and apps that prohibit these. Notion and Google Docs do this, I'm sure others out there do this too. 

An example would be create a new task in Things.app:
1. Append the app scheme: `?redirect=things:///`
2. Add the task as described within the Things docs: `?redirect=things:///add?title=get%20oat%20milk`.

You can learn more about Things' URL schemes here: https://culturedcode.com/things/support/articles/2803573/


---

## Host it yourself
Just clone the repo and throw it up on Github Pages. It's all done using JS so you don't need to run a server etc.


---

### Getting help
Not working? File an issue as a question and I'll be happy to take a look. I did have some DNS issues with some URLs.


## Project status ✓
This project is considered "complete" meaning no new features will be added, if a major security issue is brought up, 
that will be fixed but otherwise it is not going to be in development.
