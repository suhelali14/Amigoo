const btn = document.getElementById('Register');
const Register =document.getElementById('Formh');
const login =document.getElementById('formv');
const rbtn = document.getElementById('Login');


document.querySelector('form').style.display='none';
document.getElementById('subcont1').style.display='none';



btn.addEventListener('click', function onClick(event) {
    Register.style.display='inline';
    login.style.display='none';
    document.querySelector('form').style.display='inline';
    document.getElementById('subcont2').style.display='none';
    document.getElementById('subcont1').style.display='inline';
    
  });

rbtn.addEventListener('click', function onClick(event) {
    Register.style.display='none';
    login.style.display='inline';
    document.getElementById('formv').style.display='block'
    document.getElementById('subcont2').style.display='block';
    document.getElementById('subcont1').style.display='none';
    

    
  }); 

