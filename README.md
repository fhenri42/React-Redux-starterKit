# React-starterKit
* A simple application to get started with react/redux

# Run
* ```yarn```
* ```yarn start```
* go to [localhost:8080](http://localhost:8080/)

# Work with it

* All you need to do is add your own components, in the components folder.
* To interact with the state, just add an action to the actions folder and connect to you components.
* Then go to the reducer file and add a condition to the switch, like that you will be able to update the state.

# Next step

* If you need to communicate with a server you will need to check the middleware file.
* You will need to add a request
* Example :

```javascript
const simpleRequest = () => {
  return new Promise((resolve, reject) => {
      request
      .post(`http://localhost:5000/INFO`)
      .set('Accept', 'application/json')
      .send()
      .end((err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.body)
      })
    })
}
const simpleMiddleWare = info => ({ dispatch, getState }) => {

  return next => action => {
    if (info && action.type && action.type.indexOf('server/') === 0) {
      const serverAction = action.type.split('/')
      simpleRequest.then(res => {
        return next(res)
      })
    }
    return next(action)
  }
}

export default simpleMiddleWare
```

# Contribute

* Feel free to fork this repo, and if needed submit a merge request!

# Author

* Floren Henri
* fhenri@student.42.fr
