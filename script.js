const countDisplay = document.getElementById("count");
const percentageDisplay = document.getElementById("percentage");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

const progressCircle = document.querySelector(".progress");

let count = 0;
const target = 100;

const circumference = 2 * Math.PI * 100;

function updateUI() {

    countDisplay.textContent = count;

        let percentage = Math.min((count / target) * 100, 100);

            percentageDisplay.textContent =
                    Math.round(percentage) + "%";

                        let offset =
                                circumference -
                                        (percentage / 100) * circumference;

                                            progressCircle.style.strokeDashoffset =
                                                    offset;
                                                    }

                                                    increaseBtn.addEventListener("click", () => {
                                                        count++;
                                                            updateUI();
                                                            });

                                                            decreaseBtn.addEventListener("click", () => {

                                                                if (count > 0) {
                                                                        count--;
                                                                            }

                                                                                updateUI();
                                                                                });

                                                                                resetBtn.addEventListener("click", () => {
                                                                                    count = 0;
                                                                                        updateUI();
                                                                                        });

                                                                                        updateUI();