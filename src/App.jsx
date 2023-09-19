import FruitsCounter from "./Components/Fruits/Fruits.jsx";
import './App.css'
import React, {useState} from "react";
import UserForm from "./Components/CustomerInformation/UserForm.jsx";

function App() {

    const originalFruitValue = {
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0,
    }

    const [fruits, toggleFruits] = useState(originalFruitValue);

    const [fruitImage, setFruitImage] = useState( {
        strawberries:"🍓",
        bananas: "🍌",
        apples: "🍏",
        kiwis: "🥝",

    })

    const formData = {
        firstname: "",
        lastname: "",
        age: "",
        zipcode: "",
        deliveryFrequency:"",
        deliveryPeriod: "",
        comments: "any special comments?",
        terms: true,

    };

    function increment (fruit) {
        toggleFruits((prevState) => ({
            ...prevState,
            [fruit] : prevState [fruit] + 1
        }))}

function decrement (fruit) {
    if(fruits[fruit] > 0) {
        toggleFruits((prevState) => ({
            ...prevState,
            [fruit] : prevState [fruit] - 1
    }))}
}

const handleSave = (values) => {
        console.log({values});
}

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>

        <FruitsCounter
         fruitKinds={fruits}
         increment = {increment}
         decrement = {decrement}
         fruitImage = {fruitImage}
         reset = {originalFruitValue}
         toggleFruits={toggleFruits}
        />

        <div>
            <h1>Forms</h1>
            <UserForm onSave={handleSave}/>
        </div>

        </>
  )}
export default App
