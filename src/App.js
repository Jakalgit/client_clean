import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import React, {useContext, useEffect, useState} from "react";
import {init} from "./http/userAPI";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Spinner} from "react-bootstrap";
import {getAllBasketItems} from "./http/API/basketItemAPI";
import {initBasket} from "./http/API/basketAPI"
import general from "./css/General.module.css";
import Contacts from "./components/Contacts";
import firebase from "firebase/compat/app";

const App = observer(() => {

    const {user} = useContext(Context)
    const {item} = useContext(Context)
    const [loading, setLoading] = useState(true)

    const firebaseConfig = {
        apiKey: "AIzaSyBMkMOb9Rhe_sn2aH8kOkzsZsUStOlFYEY",
        authDomain: "shoprc-storage.firebaseapp.com",
        projectId: "shoprc-storage",
        storageBucket: "shoprc-storage.appspot.com",
        messagingSenderId: "442490580280",
        appId: "1:442490580280:web:c6c269233fb3e4625865cd",
        measurementId: "G-8KXP0CCJMJ"
    };

    useEffect(() => {
        init().then(data => {
            user.setUser(data.data)
            initBasket(user.user.id).then(data => {
                user.setBasket(data)
                getAllBasketItems(user.basket.id).then(data => {
                    data.sort((prev, next) => prev.id - next.id)
                    item.setBasketItems(data)
                    firebase.initializeApp(firebaseConfig)
                    setLoading(false)
                })
            })
        })
    }, [])

    if (loading) {
        return (
            <div className={general.loading}>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

  return (
      <BrowserRouter>
          <NavBar />
          <Contacts />
          <AppRouter />
      </BrowserRouter>
  );
})

export default App;