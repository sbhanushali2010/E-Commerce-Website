document.getElementById('cardNumber').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '').substring(0, 16); 
    let formatted = input.replace(/(\d{4})(?=\d)/g, '$1 '); 

    e.target.value = formatted;
});

document.getElementById('cvv').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); 
    if (input.length > 3) {
        e.target.value = input.slice(0, 3);
    }
});

let totalBill = document.getElementById("totalBill");

let allItemsData = [...ClothingItemsData, ...FoodItemsData, ...ElectronicsItemsData];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let TotalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { item, id } = x;
          let search = allItemsData.find((y) => y.id === id) || [];
  
          let priceWithoutCommas = parseFloat(search.price.replace(/,/g, ''));
  
          return item * priceWithoutCommas;
        })
        .reduce((x, y) => x + y, 0);
        totalBill.innerHTML = `
    <h3>Total Bill : £ ${amount}</h3>
    `;
    } else return;
  };
  
  TotalAmount();

  document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('animationContainer').classList.remove('hide');
    setTimeout(function () {
        document.getElementById('animationContainer').classList.add('hide');
    }, 2000); 
});

document.getElementById('backtohome').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'index.html';
});



document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("checkoutForm");
    const submitBtn = document.getElementById("submit");
    const animationContainer = document.getElementById("animationContainer");

    
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        if (form.checkValidity()) {
            form.reset();
            animationContainer.classList.remove("hide");

            setTimeout(function() {
            }, 3000); 
        } else {
            alert("Please fill in all required fields.");
        }
    });
});
