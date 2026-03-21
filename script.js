/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton)
    const modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
            document.querySelector('body').style.overflowY = 'hidden'

            window.onclick = function(event)
            {
                if (event.target == modalContainer) {
                    modalContainer.classList.remove('show-modal')
                    document.querySelector('body').style.overflowY = 'scroll'
                }
            }
        })
    }
}

showModal('bodycombat-modal-button','bodycombat-modal')
showModal('danievan-modal-button','danievan-modal')
showModal('brokenechoes-modal-button','brokenechoes-modal')
showModal('hitchhiker-modal-button','hitchhiker-modal')
showModal('pinzo-modal-button','pinzo-modal')

/*=============== CLOSE MODAL ===============*/
function closeModal(){
    const modalContainer = document.getElementsByClassName('show-modal')[0]
    modalContainer.classList.remove('show-modal')
    document.querySelector('body').style.overflowY = 'scroll'
}

const closeBtn = document.querySelectorAll('#close-modal')
closeBtn.forEach(c => c.addEventListener('click', closeModal))


/*=============== FACTS ===============*/
let lastNum = -1;

function refact(){

    const facts = [
        "My first game development engine was GameMaker. The second was Wario Ware: DIY.",
        "I'm always in some sort of idle dance, <nobr>Cuphead-style</nobr>.",
        "Someone abandoned a duck on our yard once, so we adopted it for a year. Its name was Colorines.",
        "I'm a certified wedge cheese hater.",
        "Two of my favorite game franchises are Dark Souls and Kirby. Maybe opposites attract?",
        "People say I have the softest cheeks they have ever seen. I agree.",
        "I love cooking with bananas as an ingredient.",
        "Some of my favorite Pokémon are Whimsicott, Rotom and Porygon2.",
        "Almost all of my daily music listening is comprised of game soundtracks.",
    ]

    const randomMessage = () => 
    {
        let result = Math.floor(Math.random() * facts.length);

        while(result == lastNum)
        {
            result = Math.floor(Math.random() * facts.length);
        }

        lastNum = result;
        
        
        return facts[(result)];
    }

    document.getElementsByClassName('fact-container')[0].innerHTML = randomMessage()
}

const refactBtn = document.querySelectorAll('.refact-button')
refactBtn.forEach(c => c.addEventListener('click', refact))
refact()