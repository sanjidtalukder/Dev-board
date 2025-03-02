//  ShopEase button click 
const ShopEase =document.getElementById("shop-Ease").addEventListener("click",function(){
    alert("Board update Successfully");
    
    const pending = document.getElementById("taskAssi");
    const tracjMark = document.getElementById("track-mark");
    const button= document.getElementById("shop-Ease");
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
       const titleSet= document.title = `Fix Mobile Button issue`
       messages.innerHTML += `<p style="background-color: gray; border-radius:18px; padding: 5px;">
       You have completed the task <strong>${titleSet}</strong>  at ${formattedTime1}
   </p><br>`;
       if (pendingCount === 1) {
        alert("Congratulation!!! You have completed all the current task"); 
    }
    
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
       const titleSet= document.title = `Add Dark Mode`
       messages.innerHTML += `<p style="background-color: gray; border-radius:18px; padding: 5px;">
                       You have completed the task <strong>${titleSet}</strong> at ${formattedTime1}
                   </p><br>`;
    
       if (pendingCount === 1) {
        alert("Congratulation!!! You have completed all the current task"); 
    }
    
    }
    });

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
           const titleSet= document.title = `Optimize Home page`
           messages.innerHTML += `<p style="background-color: gray; border-radius:18px; padding: 5px;">
           You have completed the task <strong>${titleSet}</strong> at ${formattedTime1}
       </p><br>`;
        
           if (pendingCount === 1) {
            alert("Congratulation!!! You have completed all the current task"); 
    }
        }
        });

        //meta cleck here

        const metas =document.getElementById("meta").addEventListener("click",function(){
            alert("Board update Successfully");
            
            const pending = document.getElementById("taskAssi");
            const tracjMark = document.getElementById("track-mark");
            const button= document.getElementById("meta");
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
               const titleSet= document.title = `Add new emoji 🤲`
               messages.innerHTML += `<p style="background-color: gray; border-radius:18px; padding: 5px;">
                       You have completed the task <strong>${titleSet}</strong> at ${formattedTime1}
                   </p><br>`;
            
               if (pendingCount === 1) {
                alert("Congratulation!!! You have completed all the current task"); 
        }
            }
            });

            // Google-LLC click here
            const googlellc =document.getElementById("google-LLC").addEventListener("click",function(){
                alert("Board update Successfully");
                
                const pending = document.getElementById("taskAssi");
                const tracjMark = document.getElementById("track-mark");
                const button= document.getElementById("google-LLC");
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
                   const titleSet= document.title = `Integrate OpenAI API`
                   messages.innerHTML += `<p style="background-color: gray; padding: 5px; border-radius:18px;">
                       You have completed the task <strong>${titleSet}</strong> at ${formattedTime1}
                   </p><br>`;
                
                   if (pendingCount === 1) {
                    alert("Congratulation!!! You have completed all the current task"); 
                }
                }
                });


                //Glassdoar click here

                const glassdoar =document.getElementById("glass-doar").addEventListener("click",function(){
                    alert("Board update Successfully");                    
                    
                    const pending = document.getElementById("taskAssi");
                    const tracjMark = document.getElementById("track-mark");
                    const button= document.getElementById("glass-doar");
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
                       const titleSet= document.title = `Improve Job searching `
                       messages.innerHTML += `<p style="background-color: gray; border-radius:18px; padding: 5px;">
                       You have completed the task <strong>${titleSet}</strong> at ${formattedTime1}
                   </p><br>`;
                    
                       if (pendingCount === 1) {
                        alert("Congratulation!!! You have completed all the current task"); 
                }
                    }
                    });

                    document.getElementById("clear-history").addEventListener("click",function(){
                        
                        const messages =document.getElementById("message");
                       messages.innerHTML ="";
                    })

