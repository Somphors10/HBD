document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const card = document.querySelector('.card');

    container.addEventListener('mouseenter', function () {
        card.style.transition = 'top 0.6s';
        card.style.top = '-90px';
    });

    container.addEventListener('mouseleave', function () {
        card.style.transition = 'top 0.6s';
        card.style.top = '5px';
    });
});
