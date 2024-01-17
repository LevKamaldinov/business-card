
document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })

    if (document.documentElement.scrollTop == 0) {
        btn.style.display = 'none';
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 800) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    })
})