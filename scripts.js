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

if (document.body.classList.contains('intro-page')) {
    window.addEventListener('load', () => {
        requestAnimationFrame(() => {
            document.body.classList.add('intro-finished');
            document.body.classList.remove('intro-active');
        });
    });
}

function copyPhoneNumber() {
    const phoneNumber = "(917) 979-0517";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const button = document.querySelector('button[onclick="copyPhoneNumber()"]');
        const originalText = button.textContent;
        button.textContent = "Copied!";
        button.disabled = true;
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy phone number: ", err);
    });
}

const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');
const popupButtons = document.querySelectorAll('.popup-trigger');

function openPopup(title, message) {
    if (popupTitle && title) {
        popupTitle.textContent = title;
    }
    if (popupMessage && message) {
        popupMessage.innerHTML = message;
    }
    popup.classList.add('show-popup');
}

function closePopup() {
    popup.classList.remove('show-popup');
}

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        openPopup(button.dataset.title, button.dataset.message);
    });
});

if (popup) {
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
}
