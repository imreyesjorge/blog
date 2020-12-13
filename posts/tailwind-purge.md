---
title: 'Using the `purge` property in tailwind'
date: 'December 12, 2020'
author: 'Jorge Reyes'
image: 'reyes'
link: 'https://twitter.com/imreyesjorge'
job: 'Jr. Frontend'
---

Tailwind is a *CSS utility-first framework*, that saves you time by building the desing of your website while making the *HTML* itself. It uses *pre-fab* utility classes that you can use directly in your HTML.
<br>
<br>
There's a nice feature inside tailwind that let you 'purge' the framework and use only the classes you used in your HTML file, lightening the size of your website.
<br>
<br>
And it's pretty simple to use it too, you just need to add to the `content: []` array the routes to the files using tailwind classes.
<br>
<br>

```js
// tailwind.config.js file
module.exports = {
   purge: {
      content: ['/routes/*', '/that_use/*', '/tailwind/*'],
   }
}
```

<br>
<br>
This way, when you build your site, it'll only 'export' the used tailwind utilities.