function toggleContact(id) {
    const allContacts = document.querySelectorAll('.contact-info');
    allContacts.forEach(contact => {
        if (contact.id === id) {
            contact.style.display = contact.style.display === 'block' ? 'none' : 'block';
        } else {
            contact.style.display = 'none';
        }
    });
}
