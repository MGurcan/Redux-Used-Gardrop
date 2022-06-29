import React, { useState, useEffect } from 'react';

import '../../styles/MyGardrop.css'

import { Link } from 'react-router-dom'
import { AddCotheForm } from '../GardropFeatures/AddClotheForm';
import { ClothesList } from '../GardropFeatures/ClothesList';
/* import ClotheForm from "./GardropComponents/ClotheForm";
import ClotheList from "./GardropComponents/ClotheList"; */

/* 
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase' */


const MyGardrop = () => {


/*   const [clotheList, setClotheList] = useState([]); */

/*   const addClothe = (userInput, clotheType, dirty, ironed) => {

    if (userInput.replace(/ /g, "") == "")
      return;
    let copy = [...clotheList];
    copy = [...copy, { id: 3, clothe: userInput, dirty: dirty, type: clotheType, ironed: ironed }];
    setClotheList(copy);
  }; */




/*   useEffect( () => {

    const q = query(collection(db, 'clothes'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setClotheList(querySnapshot.docs.maps(doc => ({
        id:doc.id,

        data: doc.data()
      }))) 
    })
  }, []); */

/* useEffect(() => {
    const q = query(collection(db, 'clothes'), orderBy('createTime', 'desc')) desc / asc
    onSnapshot(q, (querySnapshot) => {
      setClotheList(querySnapshot.docs.map(doc => ({
        id: doc.id,
        type: doc.data().type,
        clothe: doc.data().name,
        dirty: doc.data().dirty
      })))
    })
    console.log(clotheList);
  }, []) */
  return (

    <div className="container">

      <h1 className="head-title">Gardrop</h1>
      <nav className="nav-bar">
        <ul>
          <li >
            <Link to="/main-menu">Main Menu</Link>
          </li>
          <li className="active">
            <Link to="/my-gardrop">My Gardrop</Link>
          </li>
        </ul>
      </nav>

      <div className="clothe-form">

       {/*  <ClotheForm addClothe={addClothe} /> */}
        <AddCotheForm />
      </div>

      <div className="clothe-list">
        <h3>Clothe List</h3>
        {/* <ClotheList clotheList={clotheList} /> */}
        <ClothesList /> 
      </div>

    </div>

  );
};

export default MyGardrop;