import React from "react"
import  ReactDOM from "react-dom/client"
import App from "./App"

const rootEle = document.querySelector("#root")
if(!rootEle) throw new Error("cannot fint root")

const root = ReactDOM.createRoot(rootEle)

root.render(<App/>)
