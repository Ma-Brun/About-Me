const links = [
    { href: 'home_page.html', text: 'Home' },
    { href: 'skills.html', text: 'Skills' },
    { href: 'projects.html', text: 'Projects' },
    { href: 'contacts.html', text: 'Contacts' },
    { href: 'learn_more.html', text: 'Learn More' }
];

const currentPage = window.location.pathname.split('/').pop() || 'home_page.html';
const footerList = document.querySelector('#footer-links');

if (footerList) {
    footerList.innerHTML = links
        .filter(link => link.href !== currentPage)
        .filter(link => !(currentPage === 'home_page.html' && link.href === 'learn_more.html'))
        .map(link => `<li><a href="${link.href}">${link.text}</a></li>`)
        .join('');
}
