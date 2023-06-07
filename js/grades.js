function calculateAverage() {
    var value1 = parseFloat(document.getElementById("value1").value);
    var value2 = parseFloat(document.getElementById("value2").value);
    var value3 = parseFloat(document.getElementById("value3").value);
    var percentage1 = parseFloat(
      document.getElementById("percentage1").value
    );
    var percentage2 = parseFloat(
      document.getElementById("percentage2").value
    );
    var percentage3 = parseFloat(
      document.getElementById("percentage3").value
    );

    var totalPercentage = percentage1 + percentage2 + percentage3;

    if (totalPercentage > 100) {
      alert("Total percentage cannot exceed 100%");
      return;
    }

    var result =
      value1 * (percentage1 / 100) +
      value2 * (percentage2 / 100) +
      value3 * (percentage3 / 100);

    document.getElementById("result").innerHTML = "Average: " + result;
  }

  function updatePercentage(sliderId, displayId) {
    var slider = document.getElementById(sliderId);
    var display = document.getElementById(displayId);

    display.innerHTML = slider.value + "%";
  }

  function checkTotalPercentage() {
    var percentage1 = parseFloat(
      document.getElementById("percentage1").value
    );
    var percentage2 = parseFloat(
      document.getElementById("percentage2").value
    );
    var percentage3 = parseFloat(
      document.getElementById("percentage3").value
    );

    var totalPercentage = percentage1 + percentage2 + percentage3;

    if (totalPercentage > 100) {
      var sliders = document.querySelectorAll('input[type="range"]');
      var remainingPercentage = 100 - percentage1 - percentage2;

      // Adjust the values of sliders to fit within the limit
      if (remainingPercentage >= 0) {
        var adjustmentFactor = 100 / (remainingPercentage + percentage3);
        sliders.forEach(function (slider) {
          if (slider.id !== "percentage3") {
            slider.value = Math.floor(slider.value / adjustmentFactor);
          }
        });
      } else {
        sliders.forEach(function (slider) {
          if (slider.id !== "percentage3") {
            slider.value = 0;
          }
        });
      }

      updatePercentage("percentage1", "percentage1-value");
      updatePercentage("percentage2", "percentage2-value");
      updatePercentage("percentage3", "percentage3-value");
    }
    function printPage() {
      window.print();
    }
  }