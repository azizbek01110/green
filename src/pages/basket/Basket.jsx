import { useState } from 'react'
import { useSelector } from 'react-redux';
import Bas from "./Bas"
import "./Basket.css"

const BOT_TONKET = "6264972965:AAGjSzS2UAV0v1MoeD84e8QkP4K378TQCJs";
//https://api.telegram.org/bot7444303228:AAF81ScCmjtpMhvyRICjcTZ2_A4hyXDBd5Y/getUpdates
//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

const USER_ID ="6514251823"
const CHAT_ID = "-1002219361083"

function Navbar() {
  const data = useSelector((item) => item.carts.value);
  console.log(data);

const [name,setName] = useState("")
const [surname,setSurname] = useState("")
const [age,setAge] = useState("")







const handleSubit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A"
    text += `Ismingiz: ${name} %0A`
    text += `Familiyangiz: ${surname} %0A`
    text += `Yoshingiz: ${age} %0A`

    let url = `https://api.telegram.org/bot${BOT_TONKET}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}

  return (

    <div>
      <div className='dis'><Bas/></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1 className='name'>Buyurtma</h1>
        <form className='uuu' onSubmit={handleSubit}>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Ismingizni kiriting' />
            <input onChange={(e) => setSurname(e.target.value)} type="text" placeholder='Familangizni kiriting' />
            <input onChange={(e) => setAge(e.target.value)} type="text" placeholder='Yoshingizni kirting' />
            <button className='btnn'>Send</button>
        </form>
    </div>
  )
}

export default Navbar
