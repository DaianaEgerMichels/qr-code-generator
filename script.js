function generate() {
    const url = document.getElementById("url").value;
    if (!url) {
        alert("Please enter a valid URL");
        return;
    }

    const qrContainer = document.getElementById("content-qr-code");
    qrContainer.innerHTML = "";

    // Generate the QR code
    new QRCode(qrContainer, {
    text: url,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
    });

    // Show the qr-code
    document.querySelector(".content-generator").classList.add("hidden");
    document.querySelector(".content-download").classList.remove("hidden");
}

function download() {
    const qrImage = document.querySelector("#content-qr-code img");
    if (!qrImage) {
        alert("Please generate a QR code first");
        return;
    }

    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qr-code.png";
    link.click();
}

function share() {
    const qrCodeImage = document.querySelector("#content-qr-code img");
    if (!qrCodeImage) {
        alert("Please generate a QR code first");
        return;
    }

    navigator.clipboard
    .writeText(qrCodeImage.src)
    .then(() => {
        alert("QR code copied to clipboard!");
    })
    .catch((err) => {
        alert("Failed to copy QR code.");
    });
}
