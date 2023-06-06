const upload_file = document.querySelector('.upload-file');
const upload_text = document.getElementById('upload-text');
const submit = document.querySelector('.submit')

upload_file.addEventListener('change', (e)=>{
    if(upload_file.value) {
        upload_text.innerText = upload_file.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
    } else { upload_text.innerText = "Загрузить"}
})
submit.addEventListener('click', (f)=>{
    upload_text.innerText = 'загрузить'
})