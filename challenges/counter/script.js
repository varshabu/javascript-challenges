let count = 0;
const countValue = document.getElementById('count');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count = count - 1;
        } else if(styles.contains('increase')){
            count = count + 1;
        } else if(styles.contains('reset')){
            count = 0;
        }

        if(count > 0){
            countValue.style.color = 'green';
        } else if(count < 0){
            countValue.style.color = 'red';
        } else{
            countValue.style.color = 'black';
        }

        countValue.textContent = count;
    })
})