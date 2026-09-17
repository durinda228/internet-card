// ==================================================
// PHONE MODAL
// ==================================================


const phoneButton = document.getElementById('phoneButton');

const phoneModal = document.getElementById('phoneModal');

const phoneClose = document.querySelector('.phone-close');



if (phoneButton) {
  phoneButton.addEventListener('click', function(event) {
    event.preventDefault();


    phoneModal.classList.add('active');
  });
}



if (phoneClose) {
  phoneClose.addEventListener('click', function() {
    phoneModal.classList.remove('active');
  });
}



if (phoneModal) {
  phoneModal.addEventListener('click', function(event) {
    if (event.target === phoneModal) {
      phoneModal.classList.remove('active');
    }
  });
}



// ==================================================
// EMAIL MODAL
// ==================================================


const emailButton = document.getElementById('emailButton');

const emailModal = document.getElementById('emailModal');

const emailClose = document.querySelector('.email-close');

const copyEmail = document.getElementById('copyEmail');


const emailAddress = 'maksimenko@city-vrn.com';



if (emailButton) {
  emailButton.addEventListener('click', function(event) {
    event.preventDefault();


    emailModal.classList.add('active');
  });
}



if (emailClose) {
  emailClose.addEventListener('click', function() {
    emailModal.classList.remove('active');
  });
}



if (emailModal) {
  emailModal.addEventListener('click', function(event) {
    if (event.target === emailModal) {
      emailModal.classList.remove('active');
    }
  });
}



// Копирование почты


if (copyEmail) {
  copyEmail.addEventListener('click', function() {
    navigator.clipboard.writeText(emailAddress);



    copyEmail.textContent = 'Скопировано ✓';
    copyEmail.classList.add('copied');



    setTimeout(function() {
      copyEmail.textContent = 'Скопировать';
      copyEmail.classList.remove('copied');
    }, 2000);
  });
}



// ==================================================
// CERTIFICATE MODAL
// ==================================================


const certificateButton = document.getElementById('certificateButton');


const certificateModal = document.getElementById('certificateModal');


const certificateClose = document.querySelector('.close');



if (certificateButton) {
  certificateButton.addEventListener('click', function() {
    certificateModal.classList.add('active');
  });
}



if (certificateClose) {
  certificateClose.addEventListener('click', function() {
    certificateModal.classList.remove('active');
  });
}



if (certificateModal) {
  certificateModal.addEventListener('click', function(event) {
    if (event.target === certificateModal) {
      certificateModal.classList.remove('active');
    }
  });
}



// ==================================================
// ESC CLOSE
// ==================================================


document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (phoneModal) {
      phoneModal.classList.remove('active');
    }



    if (emailModal) {
      emailModal.classList.remove('active');
    }



    if (certificateModal) {
      certificateModal.classList.remove('active');
    }
  }
});



// ==================================================
// SCROLL REVEAL
// ==================================================


const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(function(element) {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(function(element) {
    element.classList.add('in-view');
  });
}
