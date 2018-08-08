# apostrophe-samples

This project is a working sample website that demonstrates many Apostrophe
CMS development techniques. If you're a little lost after reading the
documentation and aren't sure "where to put the code," studying this
project will help a lot!

To try it out, follow the usual steps:

```
npm install
node app apostrophe-users:add admin admin
node app
```

After that the site is up and running. So log in at `http://localhost:3000/login` to add content.

Or, just refer to the code. 

Techniques covered include (this list is rapidly growing):

* Displaying images fetched from related pages (thumbnail images for the "tabs" of the website)
* One, two, and three-column nested areas, allowing a user-created layout
* Command line tasks
* Example of pieces-pages
* Working directly with MongoDB
* Apostrophe's migration convenience APIs
* Example of a parked page
* Example of super pattern for the generate method
* Delivering assets from your own project-level module
* Joins, reverse joins
* Randomly populating joins when pieces are inserted

This is a tiny fraction of what Apostrophe can do, these are just topics
that developers have found confusing in the past.

For more documentation about Apostrophe and complete documentation, visit the [A2 documentation site](http://apostrophecms.com).
