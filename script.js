function uploadPhoto(box) {
    const uploader = document.getElementById('photoUploader');
    uploader.click();
  
    uploader.onchange = function () {
      const file = uploader.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          box.innerHTML = `<img src="${e.target.result}" alt="Foto do casal" />`;
        };
        reader.readAsDataURL(file);
      }
    };
  }
  