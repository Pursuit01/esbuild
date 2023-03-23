import * as React from 'react'
import * as Server from 'react-dom/server'
let Greeting = () => <h1>Hello,World!</h1>
console.log(Server.renderToString(<Greeting />));