
/*let library = [];

 //Get values from HTML
 var title = document.getElementById('title').value;
 var author = document.getElementById('author').value;
 var number = document.getElementById('pages').value;
 var readY =document.getElementById('y').value;
 var readN =document.getElementById('n').value;

 //Book Info
 function book(title, author, number, ) {
    this.title = title;
    this.author = author;
    this.number = number;
}*/

 //test 
 /*const container = document.querySelectorAll('#oneOne');
 function bookDiv() {
    let div = document.createElement('div');
    div.className= "divBook";
    div.innerHTML= "hello there"
   
    const content2 =document.createElement('p');
    content2.style.color = 'red';
    content2.textContent ='Hey I’m red!';
    
    const content3 = document.createElement('h3');
    content3.style.color = 'blue';
    content3.textContent ='I’m a blue h3!';
   
    
    container.appendChild(div);
    container.appendChild(content2);
    container.appendChild(content3);
   
 }*/
 const container = document.querySelector('#oneOne');
 const content = document.createElement('div');
 content.textContent ='This is the glorious text-content!';
 
 const content2 =document.createElement('p');
 content2.style.color = 'red';
 content2.textContent ='Hey I’m red!';
 
 const content3 = document.createElement('h3');
 content3.style.color = 'blue';
 content3.textContent ='I’m a blue h3!';

 const content4 = document.createElement('div').style;
 var h1tag = document.createElement('h1');
 h1tag.innerHTML = "I’m in a div";
 var ptag = document.createElement('p');
 ptag.innerHTML = "ME TOO!";
 
 
 container.appendChild(content);
 container.appendChild(content2);
 container.appendChild(content3);
 container.appendChild(content4);
 container.appendChild(h1tag);
 container.appendChild(ptag);
 
 
 container.appendChild(p);
 container.appendChild(h1);
