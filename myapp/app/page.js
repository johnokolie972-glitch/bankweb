"use client"
import React from 'react'
import Greetings from './components/Greetings'
import Myinfo from './components/Myinfo'
import User from './components/User'
import Welcome from './components/Welcome'
import Grade from './components/Grade'
import Child from './components/Child'
import Online from './components/Online'
import Counter from './components/Counter'
import LikeButtons from './components/LikeButtons'
const showMessage=(sendMessage)=> alert(sendMessage);






function Page() {

  return (
    <div>
      <Greetings></Greetings>
      <Myinfo></Myinfo>
      <User></User>
      <Welcome name={"prof"} age={20}></Welcome>
      <Welcome name={"pat"} age={30}></Welcome>
      <Welcome name={"gabi"} age={23}></Welcome>
      <Welcome name={"prof"} age={40}></Welcome>
      <Grade name= {"gabi"}score={66}></Grade>
      <Grade name= {"presh"} score={46}></Grade>
      <Grade name= {"prof"} score={76}></Grade>
      <Grade name= {"ade"} score={50}></Grade>
      <Child sendMessage={showMessage}/>
<Online isOnline={true}/>
<Counter/>
<LikeButtons />
    </div>
  );
}

export default Page;
