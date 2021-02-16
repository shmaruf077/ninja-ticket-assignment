function count(changeTo, showCounterId) {
    let ticketCount = parseInt(document.getElementById(showCounterId).value) ;
    let newTicketCount = 0;
        if (changeTo == "plus") {
            newTicketCount = ticketCount + 1 ;
        }
        if (changeTo == "minus") {
            newTicketCount = ticketCount - 1 ;
        }
    document.getElementById(showCounterId).value = newTicketCount;

    document.getElementById("subtotal_amount").innerText = 
        document.getElementById("first_class_ticket_count").value * 150 
        + document.getElementById("economy_class_ticket_count").value * 100 ; 
    
    document.getElementById("vat_amount").innerText = document.getElementById("subtotal_amount").innerText * 0.10 ;
    document.getElementById("total_amount").innerText = parseInt(document.getElementById("vat_amount").innerText) + parseInt(document.getElementById("subtotal_amount").innerText) ;
}

document.getElementById("first_class_plus").addEventListener("click", function(){
    count("plus", "first_class_ticket_count");
})
document.getElementById("first_class_minus").addEventListener("click", function(){
    count("minus", "first_class_ticket_count");
})
document.getElementById("economy_class_plus").addEventListener("click", function(){
    count("plus", "economy_class_ticket_count");
})
document.getElementById("economy_class_minus").addEventListener("click", function(){
    count("minus", "economy_class_ticket_count");
})