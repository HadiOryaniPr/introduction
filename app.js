"use strict";

const newToast = document.getElementById("newToast");

function toast() {
   let toast = new bootstrap.Toast(newToast);
   toast.show();
}
