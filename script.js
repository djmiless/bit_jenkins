var pusher = new Pusher('ce6213df2fad5bb84afb', {
    cluster: 'mt1'
  });

  var channel = pusher.subscribe('bitmama');

  channel.bind('new-post', function(info){

    alert(JSON.stringify(info));
    // if(info){
    //     document.querySelector("#notifier-id").innerHTML=`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M16.9414 8.73591C16.2551 8.36932 15.7811 7.65741 15.7515 6.83225C15.7505 6.80496 15.75 6.77754 15.75 6.75C15.75 6.19642 15.949 5.69126 16.2801 5.29919C16.694 4.8092 17.3105 4.5 18 4.5C19.2426 4.5 20.25 5.50736 20.25 6.75C20.25 7.75592 19.5893 8.6095 18.6764 8.89677C18.4638 8.96365 18.2369 9 18 9C17.6173 9 17.2569 8.90445 16.9414 8.73591Z" fill="#3A52EE"/>
    //     <path d="M14.25 6.75C14.25 8.56231 15.5356 10.0743 17.2446 10.4239C17.2449 10.4492 17.2451 10.4746 17.2451 10.5V13.65L18.1949 14.7897C19.0091 15.7667 18.3143 17.25 17.0426 17.25H6.94769C5.67593 17.25 4.9812 15.7667 5.79536 14.7897L6.74513 13.65V10.5C6.74513 7.85523 8.70078 5.66724 11.2449 5.3032V4.5C11.2449 4.08579 11.5807 3.75 11.9949 3.75C12.4091 3.75 12.7449 4.08579 12.7449 4.5V5.30313C13.3213 5.38555 13.8675 5.56159 14.3676 5.81536C14.2908 6.11427 14.25 6.42748 14.25 6.75Z" fill="#3A52EE"/>
    //     <path d="M8.56274 18.75C8.75015 19.1794 9.01645 19.5701 9.34802 19.9017C9.69624 20.2499 10.1096 20.5261 10.5646 20.7145C11.0196 20.903 11.5072 21 11.9997 21C12.4921 21 12.9798 20.903 13.4347 20.7145C13.8897 20.5261 14.3031 20.2499 14.6513 19.9017C14.9829 19.5701 15.2492 19.1794 15.4366 18.75H8.56274Z" fill="#3A52EE"/>
    //     </svg>`;

    //     //create a div element
    //     let modalElement = document.createElement("div");

    //     modalElement.innerHTML = `<div class="modal" tabindex="-1" id='notifier-modal-id'>
    //     <div class="modal-dialog">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title">${info.post_title}</h5>
    //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div class="modal-body">
    //           <p>${info.post_content}</p>
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>` 

    //   document.body.appendChild(modalElement);

        // $("#notifier-modal-id").modal("show");


      // }  
  })