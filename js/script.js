// ==================================================
// PHONE MODAL
// ==================================================


const phoneButton = document.getElementById('phoneButton');

const phoneModal = document.getElementById('phoneModal');

const phoneClose = document.querySelector('.phone-close');



if (phoneButton) {
  phoneButton.addEventListener('click', function(event) {
    event.preventDefault();


    phoneModal.style.display = 'flex';
  });
}



if (phoneClose) {
  phoneClose.addEventListener('click', function() {
    phoneModal.style.display = 'none';
  });
}



if (phoneModal) {
  phoneModal.addEventListener('click', function(event) {
    if (event.target === phoneModal) {
      phoneModal.style.display = 'none';
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


    emailModal.style.display = 'flex';
  });
}



if (emailClose) {
  emailClose.addEventListener('click', function() {
    emailModal.style.display = 'none';
  });
}



if (emailModal) {
  emailModal.addEventListener('click', function(event) {
    if (event.target === emailModal) {
      emailModal.style.display = 'none';
    }
  });
}



// Копирование почты


if (copyEmail) {
  copyEmail.addEventListener('click', function() {
    navigator.clipboard.writeText(emailAddress);



    copyEmail.textContent = 'Скопировано ✓';



    setTimeout(function() {
      copyEmail.textContent = 'Скопировать';
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
    certificateModal.style.display = 'flex';
  });
}



if (certificateClose) {
  certificateClose.addEventListener('click', function() {
    certificateModal.style.display = 'none';
  });
}



if (certificateModal) {
  certificateModal.addEventListener('click', function(event) {
    if (event.target === certificateModal) {
      certificateModal.style.display = 'none';
    }
  });
}



// ==================================================
// ESC CLOSE
// ==================================================


document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (phoneModal) {
      phoneModal.style.display = 'none';
    }



    if (emailModal) {
      emailModal.style.display = 'none';
    }



    if (certificateModal) {
      certificateModal.style.display = 'none';
    }
  }
});