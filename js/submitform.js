function submitForm() {
    var name = document.getElementById("fname").value;
    var date = document.getElementById("d1").value;
    var time = document.getElementById("t1").value;
    alert(name + " Your slot has been booked successfully.\n" + " Date: " + date + " | Time:  " + time);
    return true;
}