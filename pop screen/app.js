const loadBtns = document.querySelectorAll('.loadPopScreen');
const container = document.querySelector('.container')
const spanMark = document.querySelector('.mark');
const header = document.querySelector('.question');
const content = document.querySelector('.content');
const acceptBtn = document.querySelector('.agree');
const declineBtn = document.querySelector('.cancel');

const types = {

    warning : {
        span: "!",
        header: "DANGER!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officiis! Asperiores impedit beatae delectus magnam quod quos accusantium illo neque.",
        confirm: "accept",
        decline: "cancel",

    },

    error : {
        span: "?",
        header: "ERROR",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officiis! Asperiores impedit beatae delectus magnam quod quos accusantium illo neque.",
        confirm: "OK",
        decline: "",

    },

    def : {
        span: ".",
        header: "INFO",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officiis! Asperiores impedit beatae delectus magnam quod quos accusantium illo neque.",
        confirm: "accept",
        decline: "cancel",

    }

}


closePop()
loadBtns.forEach(function(e) { e.addEventListener('click', loadPopScreen )} )

function loadPopScreen(x) {
    let el = x.target.dataset.id //data-id from clicked btn
    loadElements(el)
    container.classList.add('active')
    
    
}

function loadElements(y) {

    
    if(declineBtn.classList.contains('hidden') ) {declineBtn.classList.remove('hidden')}

    y = {...types[y]}

    spanMark.innerHTML = y.span || 'cos';
    header.innerHTML = y.header || 'Are you sure?';
    content.innerHTML = y.desc ||'';
    acceptBtn.innerHTML = y.confirm || 'OK';
    if(y.decline) declineBtn.innerHTML = y.decline
    else declineBtn.classList.add('hidden');
}

function closePop() {
    const closeBtn = document.querySelectorAll('.close');
    const quitPop = document.querySelector('.quitPopScreen');
    quitPop.addEventListener('click', () => {
        container.classList.remove('active');
    })
    container.addEventListener('click', (e) => {
        if(e.target === container) {
            container.classList.remove('active');
        }
    })

    closeBtn.forEach(e => e.addEventListener('click', () =>{
        container.classList.remove('active');
    }))

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") {container.classList.remove('active');}
        e.target.blur()
    })
    


}