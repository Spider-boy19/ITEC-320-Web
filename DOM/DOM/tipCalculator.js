document.getElementById("fifeteenpercent").onclick=computeTip;
document.getElementById("Twentypercent").onclick=computeTip;
document.getElementById("Twentyfivepercent").onclick=computeTip;


function computeTip(){
    let subtotal = parseFloat(document.getElementById("subtotal").vlaue);
    let tipPercent = parseInt(this.textContent);
    let total = subtotal * (1+ tipPercent / 100);
    document.getElementById("total").textContent=`total: ${total}`;
}