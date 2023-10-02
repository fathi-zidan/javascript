const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];
const sec1 = document.getElementById('sec1');
const ol = document.createElement('ol');
sec1.append(ol);
users.forEach((ele)=>{
    const li = document.createElement('li');
    li.textContent = ele.firstName +' '+ ele.lastName;
    li.setAttribute('data-id',ele.id);
    ol.append(li);
    
}) ;
console.log(ol);
ol.classList.add('ol');