const expand1 = () => {
    const shorts = document.querySelector('.reviews1_text');
    const long = document.querySelector('.reviews1l_text');
    shorts.addEventListener('click', () => {
        shorts.classList.toggle('hide');
        long.classList.toggle('show');
    
    });
}
expand1();

const expand2 = () => {
    const shorts = document.querySelector('.reviews2_text');
    const long = document.querySelector('.reviews2l_text');
    shorts.addEventListener('click', () => {
        shorts.classList.toggle('hide');
        long.classList.toggle('show');
    
    });
}
expand2();

const expand3 = () => {
    const shorts = document.querySelector('.reviews3_text');
    const long = document.querySelector('.reviews3l_text');
    shorts.addEventListener('click', () => {
        shorts.classList.toggle('hide');
        long.classList.toggle('show');
    
    });
}
expand3();

const expand4 = () => {
    const shorts = document.querySelector('.reviews4_text');
    const long = document.querySelector('.reviews4l_text');
    shorts.addEventListener('click', () => {
        shorts.classList.toggle('hide');
        long.classList.toggle('show');
    
    });
}
expand4();