// Run this function after the page has loaded
$(function () {

var os = require('os') // https://nodejs.org/api/os.html

var cpus = os.cpus()

var datasets = []

// Loop over the CPUs on the current machine
for (var i = 0; i < cpus.length; i++) {
  var cpu = cpus[i]

  console.log(cpu);

  var cpuData = {
    data: [
      cpu.times.user,
      cpu.times.nice,
      cpu.times.sys,
      cpu.times.idle,
      cpu.times.irq
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ]
  }

  console.log(cpuData);

  // Add cpu data to datasets
  datasets.push(cpuData)
}

var chart = new Chart($('.chart'), {
  type: 'doughnut',
  data: {
    labels: [
      'User',
      'Nice',
      'Sys',
      'Idle',
      'IRQ'
    ],
    datasets: datasets
  },
  options: {
    maintainAspectRatio: false
  }
})

})
