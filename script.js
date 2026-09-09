const t=document.querySelector('#theme');
if(localStorage.getItem('monocle-theme')==='dark')document.body.classList.add('dark');
t.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('monocle-theme',document.body.classList.contains('dark')?'dark':'light')});
