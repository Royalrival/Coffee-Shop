function calculateTotalCost(quantity) {
    const pricePerBag = 10;

    if (quantity < 5) {
        return quantity * pricePerBag;
    } else if (quantity >= 5 && quantity <= 10) {
        const discountRate = 0.1;
        const discountedPrice = pricePerBag * (1 - discountRate);
        return quantity * discountedPrice;
    } else {
        const discountRate = 0.2;
        const discountedPrice = pricePerBag * (1 - discountRate);
        return quantity * discountedPrice;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const quantityInput = document.getElementById("quantity");
    const totalCostOutput = document.getElementById("totalCost");

    calculateButton.addEventListener("click", function() {
        const quantity = parseInt(quantityInput.value);
        const total = calculateTotalCost(quantity);
        totalCostOutput.textContent = `Total cost: $${total.toFixed(2)}`;
    });
});

/*$(document).ready(function() {
    // Animate the content of the About section on load
    $('#about .about-content').each(function(index) {
        $(this).delay(300 * index).animate({opacity: 1, transform: 'translateY(0)'}, 800);
    });*/
// const testimonials = [
//     "I absolutely love the coffee at this shop! The cozy atmosphere and friendly staff make it my go-to place to unwind.",
//     "The quality of their coffee is unmatched. The unique blends and flavors are a treat for my taste buds.",
//     "I never knew coffee could taste this good until I tried this brand. It's now a staple in my daily routine.",
//     "As a coffee connoisseur, I have to say that this blend is top-notch. It's smooth and rich with a subtle hint of sweetness.",
//     "My mornings have never been better since discovering this coffee. The aroma and taste are truly invigorating!",
//     "I never knew coffee could taste this good until I tried this brand. It's now a staple in my daily routine."
// ];

// let currentIndex = 0;

// function changeTestimonials() {
//     currentIndex = (currentIndex + 1) % testimonials.length;
//     updateTestimonials();
// }

// function updateTestimonials() {
//     const testimonialContainers = document.querySelectorAll(".testimonial-container");
//     testimonialContainers.forEach((container, index) => {
//         const testimonial = testimonials[(currentIndex + index) % testimonials.length];
//         const pElement = container.querySelector("p");
//         pElement.textContent = testimonial;
//     });
// }
// updateTestimonials();



