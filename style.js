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
        const titleSet= document.title = `Fix Mobile Button`;
        messages.innerHTML =`You have completed the task 
        <strong>${titleSet}</strong> issue at ${formattedTime} ${amPm}`;

    }
});

// CloudSync button click here

const deadlines =document.getElementById("cloudSync").addEventListener("click",function(){
    alert("Board update Successfully");
    
    const pending = document.getElementById("taskAssi");
    const tracjMark = document.getElementById("track-mark");
    const button= document.getElementById("cloudSync");
    const messages =document.getElementById("message");
    
    const pendingCount = parseInt(pending.textContent);
    const tracjMarkCount = parseInt(tracjMark.textContent);
    
    if (pendingCount > 0) {
        pending.textContent = pendingCount - 1;
        tracjMark.textContent = tracjMarkCount + 1;
    
        button.disabled =true;
        button.style.backgroundColor="gray";
        button.style.cursore ="not-allowed";
    
    
        let now1 =new Date();
        let hours1 = now1.getHours().toString().padStart(2,'0');
       let minutes1 = now1.getMinutes().toString().padStart(2,'0');
        let secounds1 = now1.getSeconds().toString().padStart(2,'0');
        let amPm1 = hours1%2 ? "PM":"AM";
        hours1 = hours1%12 || 12;
        const formattedTime1 = `${hours1}:${minutes1}:${secounds1} ${amPm1}`;
       const titleSet= document.title = `Fix Mobile Button`
        messages.innerHTML +=`<p>You have completed the task 
       <strong>${titleSet}</strong> issue at ${formattedTime1}  </p>`;
    
    
    }
    })

    //SwiftPay click here

    
    const swiftPay =document.getElementById("swift-Pay").addEventListener("click",function(){
        alert("Board update Successfully");
        
        const pending = document.getElementById("taskAssi");
        const tracjMark = document.getElementById("track-mark");
        const button= document.getElementById("swift-Pay");
        const messages =document.getElementById("message");
        
        const pendingCount = parseInt(pending.textContent);
        const tracjMarkCount = parseInt(tracjMark.textContent);
        
        if (pendingCount > 0) {
            pending.textContent = pendingCount - 1;
            tracjMark.textContent = tracjMarkCount + 1;
        
            button.disabled =true;
            button.style.backgroundColor="gray";
            button.style.cursore ="not-allowed";
        
        
            let now1 =new Date();
            let hours1 = now1.getHours().toString().padStart(2,'0');
           let minutes1 = now1.getMinutes().toString().padStart(2,'0');
            let secounds1 = now1.getSeconds().toString().padStart(2,'0');
            let amPm1 = hours1%2 ? "PM":"AM";
            hours1 = hours1%12 || 12;
            const formattedTime1 = `${hours1}:${minutes1}:${secounds1} ${amPm1}`;
           const titleSet= document.title = `Fix Mobile Button`
            messages.innerHTML +=`<p>You have completed the task 
           <strong>${titleSet}</strong> issue at ${formattedTime1}  </p>`;
        
        
        }
        })
        


