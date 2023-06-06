const TOKEN = "6274169376:AAGfqi-weAT5akT7Fzr6-FoyMMETw5KcoWk";
const CHAT_ID = "-1001851684754";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();

    let message = `<b>Имя:</b> ${ this.name.value }\n`;
    message += `<b>Телефон:</b> ${ this.tel.value }\n`;


    axios.post(URI_API,{
        chat_id: CHAT_ID,
        parse_mode: `html`,
        text: message
    })
    .then((res) => {
        this.tel.value = "";
        this.name.value = "";
        alert("Сообщение было отправлено")
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() =>{
        console.log('Конец');
    })

})

const TOKENN = "6274169376:AAGfqi-weAT5akT7Fzr6-FoyMMETw5KcoWk";
const CHAT_IDD = "-1001851684754";
const URI_APIL = `https://api.telegram.org/bot${ TOKENN }/sendDocument`;

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('chat_id', CHAT_IDD);
    formData.append('document', this.file.files[0]);


    axios.post(URI_APIL, formData, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {

    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() =>{
    })

})