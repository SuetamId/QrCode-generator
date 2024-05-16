document.getElementById('qrForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var url = document.getElementById('urlInput').value;
  if (url) {
      generateQRCode(url);
  }
});

function generateQRCode(url) {
  var qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = ''; 
  var qrCode = new QRCode(qrcodeContainer, {
      text: url,
      width: 256,
      height: 256,
  });

  setTimeout(function() {
      var img = qrcodeContainer.getElementsByTagName('img')[0];
      console.log(img)
      if (img) {
          createDownloadButton(img);
      }
  }, 100);
}

function createDownloadButton(img) {
  var downloadLink = document.createElement('a');
  downloadLink.innerText = 'Download QR Code';
  downloadLink.download = 'msicode.jpeg';
  downloadLink.href = img.src;
  downloadLink.style.display = 'block';
  downloadLink.style.marginTop = '20px';

  var qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.appendChild(downloadLink);
}
