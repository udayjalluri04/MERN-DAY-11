function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  document.getElementById("years").innerText = String(years).padStart(2, '0');
  document.getElementById("months").innerText = String(months).padStart(2, '0');
  document.getElementById("days").innerText = String(days).padStart(2, '0');
}