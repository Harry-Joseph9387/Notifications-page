function funct(){
    const notificationNum=document.querySelector('.notificationNum');
    notificationNum.style.display='none';
    const users=document.querySelectorAll('.unread');
    users.forEach(x=>x.style.background='transparent');
    const reddot=document.querySelectorAll('.red-dot');
    reddot.forEach(x=>x.style.display='none');

}