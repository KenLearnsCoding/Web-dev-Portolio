document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('close-icon').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
    document.querySelector('.smallScreen').style.height = 'auto';
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('close-icon').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
    document.querySelector('.smallScreen').style.height = '70px';
});