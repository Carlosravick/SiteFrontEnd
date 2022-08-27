
import { subscribehellstranger } from './firebass/hellstranger.js'

const txtName = document.getElementById('txtName')
const txtEmail =document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () =>{
    const subscription ={
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        caracter: txtCharacter.value

    }
    //Banco de dados!
    const subscriptionId = await subscribehellstranger(subscription)
    console.log(`inscrito com sucesso: ${subscriptionId}`)
    
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})





