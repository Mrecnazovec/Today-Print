document.addEventListener('keydown', function(e){
    let test = e.code.replace("Key", "");

    console.log(test);

    if(test == 'O'){
        document.querySelector('.wrapper').classList.add('pressF')
        document.querySelector('.pressFtopay').classList.add('active')


    } else if(test == 'F'){
        document.querySelector('.wrapper').classList.remove('pressF')
        document.querySelector('.pressFtopay').classList.remove('active')


    }



});
