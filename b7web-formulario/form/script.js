let validator = {
    hSubmit:(event)=>{
        event.preventDefault();
        let send = true ; 

        validator.clearErro();

        let inputs = form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++){
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !== true){
                send = false;
                validator.showError(input, check);
            }
        }

        
        if(send){
            form.submit();
        }
    },
    checkInput:(input)=>{
        let rules = input.getAttribute('data-rules');

        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if (input.value == ''){
                            return 'Campo Obrigatório';
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]){
                            return `Precisa ter no minimo ${rDetails[1]} caracteres`
                        }
                    break;
                    case 'email':
                        if(input.value != ''){
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())){
                                return 'E-mail Inválido';
                            }

                        }
                    break;
                }
            }

        }

        return true;
    },
    showError:(input, error)=>{
        input.style.borderColor = '#FF0000';

        let errorEle = document.createElement('div');
        errorEle.classList.add('error');
        errorEle.innerHTML = error;

        input.parentElement.insertBefore(errorEle, input.ElementSibling);
    },
    clearErro:()=>{
        let inputs = form.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++){
            inputs[i].style = '';

        }
        


        let errorElements = document.querySelectorAll('.error');
        for(let i=0;i<errorElements.length;i++){
            errorElements[i].remove();
        }

    }


};

let form = document.querySelector('.b7validator');
form.addEventListener('submit', validator.hSubmit);