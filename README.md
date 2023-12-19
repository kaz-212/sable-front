# sable-radio

[Check it out](https://www.sablestudio.co/)

Front-end component for Sable Radio website.

Sidebar can accomodate up to 48 characters for a show name.

## Tech Head

To integrate with:

https://api.mixcloud.com/sableradio/cloudcasts/

https://sable-radio.herokuapp.com/api/

To get description of a show, use show.data.key in allShows and make an API call to `https://api.mixcloud.com/${key}` when it is clicked. This will return a JSON containing a description (see https://api.mixcloud.com/sable/robin-matto-aka-il-matto-the-picnic-blanket-mix/)

To query the mixcloud database use this query string parameter template: https://api.mixcloud.com/search/?q=sugarspice&everythingnice&type=cloudcast

Search: https://codepen.io/duaneblake/pen/LMoMOL 

Django Admin Cloudinary: https://support.cloudinary.com/hc/en-us/community/posts/360009747059-How-to-upload-image-through-Django-admin-page

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
