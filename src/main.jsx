const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
 
  setTimeout(() => {
   spinnerWrapperEl.style.opacity = '0';
   spinnerWrapperEl.style.display = 'none';
  }, 1000);
  
});

function executeAjaxRequest() {
    $("#boxLoading").addClass("spinner-wrapper")
    setTimeout(() => $("#boxLoading").removeClass("spinner-wrapper"), 3000);
  }