const links = [
    { href: '#home', text: 'Home' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
];

function renderLinks(targetSelector, excludeCurrent = true) {
    const currentSection = window.location.hash || '#home';
    const list = document.querySelector(targetSelector);

    if (!list) {
        return;
    }

    list.innerHTML = '';

    links.forEach(link => {
        if (!excludeCurrent || link.href !== currentSection) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            list.appendChild(li);
        }
    });
}

function renderFooterLinks() {
    renderLinks('#footer-links', true);
}

function initPageScripts() {
    renderFooterLinks();
}

window.addEventListener('DOMContentLoaded', initPageScripts);
window.addEventListener('hashchange', renderFooterLinks);

window.siteScripts = {
    renderLinks,
    renderFooterLinks,
    initPageScripts
};
