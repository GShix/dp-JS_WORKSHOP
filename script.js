const h1= document.querySelector('.first')
const btn = document.getElementsByTagName('button')[0]
btn.addEventListener('dblclick',()=>{
    h1.textContent = 'Text Changed'
    const newParagraph = document.createElement('button');
    newParagraph.textContent = "Text changed again"
    document.body.appendChild(newParagraph)
})