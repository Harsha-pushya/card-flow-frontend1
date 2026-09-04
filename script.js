/**
 * CardFlow Global Logic
 */

const Storage = {
    save: (key, value) => localStorage.setItem(key, value),
    get: (key) => localStorage.getItem(key),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
};

const UI = {
    showNotification: (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerText = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    },

    updateElementText: (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
};

// Initialize AOS (Animate On Scroll) if available
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-quad',
        });
    }
});

// Global navigation helper
function navigateTo(url) {
    // Add a fade-out transition before navigating
    document.body.classList.add('page-exit');
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}
