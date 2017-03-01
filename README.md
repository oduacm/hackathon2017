# ODU Royal Hacks Website

## How to develop

1. Install [nodejs](https://nodejs.org/en/download/)  
2. Install gulp cli globally
```
npm install --global gulp-cli
```
3. clone repo
4. `cd` into folder
5. install dependencies
```
npm install
```
6. build the html pages using
```
gulp nunjucks
```

Optionally *(Recommended)*
1. Install  the [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) chrome extension.  
2. enable livereload
3. Run
```
gulp start
```
in the root of the project folder.

This will watch the files in the directory for changes and automatically build and refresh your browser tab when updated.

### data.json

Currently holds data relating to members/officers and social media account links.
