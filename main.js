document.addEventListener("keyup", function() {
    let totalTips = document.getElementById("total-tips").value;
    let totalHours = document.getElementById("total-hours").value;
    
    let rate = totalTips / totalHours;

    if (totalTips && totalHours) document.getElementById("rate").innerText = "$" + Math.floor(rate * 100) / 100;
    else document.getElementById("rate").innerText = "";

    let employeeHours = document.getElementById("employee-hours").value;

    let employeeTips = employeeHours * rate;

    if (totalTips && totalHours && employeeHours) document.getElementById("employee-tips").innerText = "$" + Math.floor(employeeTips);
    else document.getElementById("employee-tips").innerText = "";
});