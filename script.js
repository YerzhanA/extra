

let d_name = document.getElementById("name")
//const elem = document.getElementById("em");
let inputs = document.getElementsByTagName('input');
let d_email = document.getElementById("email")
let d_message = document.getElementById('message')
let btn = document.querySelector('#sendMessage')
msg = [];
console.log(d_name);
console.log(d_email);
btn.addEventListener('click', function (e) {
    debugger;
    e.preventDefault();
    let newObj = {
        name: d_name.value,
        email: d_email.value,
        message: d_message.value,

    };

    msg.push(newObj);
    console.log(msg);

    let sendMessage = {
        name: d_name.value,
        email: d_email.value,
        message: d_message.value,

        toString() {
            return `{name: "${this.name}", email: "${this.email}", message: "${this.message}"}`;
        }
    };

    //кодируем результат в текст, понятный адресной строке
    // msg = encodeURI(msg)
    //делаем запрос
    // chat = "-640417217";
    //token = "5134392133:AAFk-FZ8mCsW0gZvgd0FBPvXU0TIBOT-pEM";

    // https://api.telegram.org/bot715125500:AAHJCKYqq9AR_3yvn6EI7m5VTs_2ThYaav0/sendMessage?chat_id=@your channel&parse_mode=HTML&text=Это текст для бота

    // http.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
    //не забываем обработать ответ
    //console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    // if (response.statusCode === 200) {
    //     res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' });
    // }
    /// //if (response.statusCode !== 200) {
    //     res.status(400).json({ status: 'error', message: 'Произошла ошибка!' });
    // }
    /// });


    var chatid = "-640417217";
    var token = "5134392133:AAFk-FZ8mCsW0gZvgd0FBPvXU0TIBOT-pEM";
    var text = "Текст для <b>нашего</b> бота";
    //Отправляем текст в наш телеграм канал
    otpravka(token, sendMessage, chatid);

    function otpravka(token, text, chatid) {
        var z = $.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
            data: "parse_mode=HTML&text=" + encodeURIComponent(text),
        });
    };

    alert("Сообщение отправлено!");




});