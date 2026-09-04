function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(c =>
        c.classList.remove('active')
    );

    document.querySelectorAll('.tab').forEach(t =>
        t.classList.remove('active')
    );

    document.getElementById(id)?.classList.add('active');

    document.querySelector(`.tab[data-tab="${id}"]`)
        ?.classList.add('active');
}