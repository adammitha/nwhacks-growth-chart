const table = document.getElementById("lengths")
const addHeightButton = document.getElementById("addHeight")

addHeightButton.addEventListener("click", (e) => {
    e.preventDefault()

    var row = table.insertRow(-1)

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)

    const newDate = document.getElementById("newDate")
    const newHeight = document.getElementById("newLength")

    cell1.innerHTML = newDate.value
    cell2.innerHTML = newHeight.value + " cm"

    newDate.value = ""
    newHeight.value = ""

})

const TENSION = 0.2
var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    datasets: [
      {
        label: "3rd percentile",
        data: [
          {
            x: 0,
            y: 46,
          },
          {
            x: 2,
            y: 53,
          },
          {
            x: 4,
            y: 58,
          },
          {
            x: 6,
            y: 61.5,
          },
          {
            x: 8,
            y: 64,
          },
          {
            x: 10,
            y: 67,
          },
          {
            x: 12,
            y: 69,
          },
          {
            x: 14,
            y: 71,
          },
          {
            x: 16,
            y: 73.5,
          },
          {
            x: 18,
            y: 75,
          },
          {
            x: 20,
            y: 77,
          },
          {
            x: 22,
            y: 79,
          },
          {
            x: 24,
            y: 80,
          },
        ],
        fill: false,
        borderColor: "rgba(169, 255, 203, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "10th percentile",
        data: [
          {
            x: 0,
            y: 47,
          },
          {
            x: 2,
            y: 54.5,
          },
          {
            x: 4,
            y: 59.5,
          },
          {
            x: 6,
            y: 63,
          },
          {
            x: 8,
            y: 66,
          },
          {
            x: 10,
            y: 68,
          },
          {
            x: 12,
            y: 71,
          },
          {
            x: 14,
            y: 73,
          },
          {
            x: 16,
            y: 75,
          },
          {
            x: 18,
            y: 77,
          },
          {
            x: 20,
            y: 79,
          },
          {
            x: 22,
            y: 80.5,
          },
          {
            x: 24,
            y: 82,
          },
        ],
        fill: false,
        borderColor: "rgba(53, 129, 184, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "25th percentile",
        data: [
          {
            x: 0,
            y: 48,
          },
          {
            x: 2,
            y: 56,
          },
          {
            x: 4,
            y: 60.5,
          },
          {
            x: 6,
            y: 64,
          },
          {
            x: 8,
            y: 67,
          },
          {
            x: 10,
            y: 70,
          },
          {
            x: 12,
            y: 72,
          },
          {
            x: 14,
            y: 74.5,
          },
          {
            x: 16,
            y: 77,
          },
          {
            x: 18,
            y: 79,
          },
          {
            x: 20,
            y: 80.5,
          },
          {
            x: 22,
            y: 82.5,
          },
          {
            x: 24,
            y: 84,
          },
        ],
        fill: false,
        borderColor: "rgba(239, 189, 235, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "50th percentile",
        data: [
          {
            x: 0,
            y: 49,
          },
          {
            x: 2,
            y: 57,
          },
          {
            x: 4,
            y: 62,
          },
          {
            x: 6,
            y: 66,
          },
          {
            x: 8,
            y: 69,
          },
          {
            x: 10,
            y: 71.5,
          },
          {
            x: 12,
            y: 74,
          },
          {
            x: 14,
            y: 76.5,
          },
          {
            x: 16,
            y: 78.5,
          },
          {
            x: 18,
            y: 80.5,
          },
          {
            x: 20,
            y: 82.5,
          },
          {
            x: 22,
            y: 84.5,
          },
          {
            x: 24,
            y: 86,
          },
        ],
        fill: false,
        borderColor: "rgba(174, 183, 179, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "75th percentile",
        data: [
          {
            x: 0,
            y: 50.5,
          },
          {
            x: 2,
            y: 58.5,
          },
          {
            x: 4,
            y: 63.5,
          },
          {
            x: 6,
            y: 67,
          },
          {
            x: 8,
            y: 70.5,
          },
          {
            x: 10,
            y: 73,
          },
          {
            x: 12,
            y: 76,
          },
          {
            x: 14,
            y: 78,
          },
          {
            x: 16,
            y: 80.5,
          },
          {
            x: 18,
            y: 82.5,
          },
          {
            x: 20,
            y: 85,
          },
          {
            x: 22,
            y: 87,
          },
          {
            x: 24,
            y: 88.5,
          },
        ],
        fill: false,
        borderColor: "rgba(159, 252, 223, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "90th percentile",
        data: [
          {
            x: 0,
            y: 52,
          },
          {
            x: 2,
            y: 60,
          },
          {
            x: 4,
            y: 65,
          },
          {
            x: 6,
            y: 68.5,
          },
          {
            x: 8,
            y: 72,
          },
          {
            x: 10,
            y: 74.5,
          },
          {
            x: 12,
            y: 77.5,
          },
          {
            x: 14,
            y: 80,
          },
          {
            x: 16,
            y: 82,
          },
          {
            x: 18,
            y: 84.5,
          },
          {
            x: 20,
            y: 86.5,
          },
          {
            x: 22,
            y: 88.5,
          },
          {
            x: 24,
            y: 90.5,
          },
        ],
        fill: false,
        borderColor: "rgba(248, 150, 216, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "97th percentile",
        data: [
          {
            x: 0,
            y: 53,
          },
          {
            x: 2,
            y: 61,
          },
          {
            x: 4,
            y: 66,
          },
          {
            x: 6,
            y: 70,
          },
          {
            x: 8,
            y: 73,
          },
          {
            x: 10,
            y: 76,
          },
          {
            x: 12,
            y: 79,
          },
          {
            x: 14,
            y: 81.5,
          },
          {
            x: 16,
            y: 84,
          },
          {
            x: 18,
            y: 86,
          },
          {
            x: 20,
            y: 88.5,
          },
          {
            x: 22,
            y: 90.5,
          },
          {
            x: 24,
            y: 92.5,
          },
        ],
        fill: false,
        borderColor: "rgba(248, 150, 216, 0.5)",
        lineTension: TENSION,
      },
      {
        label: "Alice",
        data: [
          {
            x: 0,
            y: 50,
          },
          {
            x: 2,
            y: 58,
          },
          {
            x: 4,
            y: 62,
          },
          {
            x: 6,
            y: 65,
          },
          {
            x: 8,
            y: 69,
          },
          {
            x: 10,
            y: 71,
          },
          {
            x: 12,
            y: 73,
          },
          {
            x: 14,
            y: 76,
          },
          {
            x: 16,
            y: 79,
          },
          {
            x: 18,
            y: 80,
          },
          {
            x: 20,
            y: 82,
          },
          {
            x: 22,
            y: 84,
          },
          {
            x: 24,
            y: 85,
          },
        ],
        fill: false,
        borderColor: "rgba(22, 12, 40, 1.0)",
        lineTension: TENSION,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Alice's growth chart",
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Age (Months)",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Length (cm)",
          },
        },
      ],
    },
  },
});
