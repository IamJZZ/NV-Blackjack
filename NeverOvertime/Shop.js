import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text} from "react-native"
import {addBal, subBal, checkBal} from "./EditBalance.js"
import {apiAddress} from './ApiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shopItem } from "./shopItems.js"

var invList = [0, 0, 0, 0, 0, 0, 0];

/* Defines betting features and the view to bet currency and view bet in-game. */
export default function Bet({ navigation, route }) {
    const [balance, setBalance] = useState(0);
    const [cost, setCost] = useState(0);
    const [cart, setCart] = useState([]);
    async function getUserData(){
       var balance = await AsyncStorage.getItem("user_balance");
       setBalance(balance);
    }
    async function setUserBalance(newBalance){
       await AsyncStorage.setItem('user_balance', newBalance.toString());
    }
     useEffect(() => {
        getUserData();

     });

    const addToCart=(price, address)=>{
        if (!cart.includes(address)){
            setCart(cart + [address]);
            addCost(price);
        }
    }

    const storeInServer=(price)=>{
        return price;
    }

    const addCost=(price)=>{
        setCost(cost + price);
    }


    const payPrice=(price)=>{
        setUserBalance(balance - price);
        // Todo: Update balance in database
    }

    const clearCost = () => {
        setCost(0);
    }

    const clearCart = () => {
        clearCost();
        setCart([]);
    }

    const purchase = () =>{
        payPrice(cost);
        clearCost();
    }

    return (
        <View style = {styles.Container}>

            <View style={styles.ItemsContainer}>
                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(100, "./images/icons/icon1.png"); invList[0] = 1;}}>
                        <Image source={require("./images/icons/icon1.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(125, "./images/icons/icon2.png"); invList[1] = 1;}}>
                        <Image source={require("./images/icons/icon2.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(125, "./images/icons/icon3.png"); invList[2] = 1;}}>
                        <Image source={require("./images/icons/icon3.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(100, "./images/icons/icon4.png"); invList[3] = 1;}}>
                        <Image source={require("./images/icons/icon4.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(150, "./images/icons/icon5.png"); invList[4] = 1;}}>
                        <Image source={require("./images/icons/icon5.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:150
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(80, "./images/icons/icon6.png"); invList[5] = 1;}}>
                        <Image source={require("./images/icons/icon6.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:80
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(60, "./images/icons/icon7.png"); invList[6] = 1;}}>
                        <Image source={require("./images/icons/icon7.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:60
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

            </View>   

            <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Button 
                        onPress = {clearCart}
                        title = "Clear Cart"
                        color = "green"
                    />
                </View>
                <View style={styles.Button}>
                    <Button
                        onPress = {purchase}
                        title = "Purchase"
                        color = "red"
                    />
                </View>
                <View style={styles.Button}>
                    <Button
                        onPress = {() => navigation.navigate('Inventory')}
                        title = "Inventory"
                        color = "hotpink"
                    />
                </View>
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.TextField}>
                    Cost : {cost} 
                    {/* replace betAmount with bank balance from user */}
                </Text>


                <Text style={styles.TextField}>
                    Current Balance : {balance}
                </Text>
            </View>

        </View> 
    )
}

const styles = StyleSheet.create(
{
    Container: {
        flex: 1,
        backgroundColor : 'white', 
        
    },
    ItemContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',       
    },
    ItemTextContainer: {
        fontSize: 18,
        color: 'black'
        
    },
    ItemsContainer:{
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',      
    },
    ButtonContainer: {
        flex: 2, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    TextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'dark black'
    },
    ImageClass: {
        width: 50,
        height: 50
    },
    Button: {
        width: 120,
    },
    TextField: {
        fontSize: 20,
        color: 'black'
    }
}
)


export {invList};