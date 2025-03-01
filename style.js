//  ShopEase button click 
 const completed= document.getElementById("complete").addEventListener("click", function() {
    alert("Board update successfully");
  
    const pending = document.getElementById("taskAssi");
    const tracjMark = document.getElementById("track-mark");
    const button= document.getElementById("complete");
    const messages =document.getElementById("message");

    const pendingCount = parseInt(pending.textContent);
    const tracjMarkCount = parseInt(tracjMark.textContent);

    if (pendingCount > 0) {
        pending.textContent = pendingCount - 1;
        tracjMark.textContent = tracjMarkCount + 1;

        button.disabled =true;
        button.style.backgroundColor="gray";
        button.style.cursore ="not-allowed";


        let now =new Date();
        let hours = now.getHours().toString().padStart(2,'0');
       let minutes = now.getMinutes().toString().padStart(2,'0');
        let secounds = now.getSeconds().toString().padStart(2,'0');
        let amPm = hours%2 ? "PM":"AM";
        hours = hours%12 || 12;
        const formattedTime = `${hours}:${minutes}:${secounds}`;
        messages.textContent =`You have completed the task 
        fix Mobile Button issue at ${formattedTime} ${amPm}`;

    }
});



