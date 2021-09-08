let counters = document.querySelectorAll('.item__number');
counters.forEach((counter)=> {
    counter.innerText = '0';
    let updateCounter = () => {
        let target = +counter.getAttribute('data-target');
        let c = +counter.innerText;
        let increment = target/2000;
        if ( c< target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout( updateCounter, 300);
        }
    };
    updateCounter();
});