import React, { createContext, Consumer, useEffect, useState } from "react";
import firebase from "firebase/app";

export const AuthContext = createContext();

export const Provider = ({ children }) => {
	
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(setUser);
		/*
        setUserInfo(firebase.firestore().collection("users").get(user));
        console.log(user);
        console.log("useInfo: \n" + userInfo);
        */
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
