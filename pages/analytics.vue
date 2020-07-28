<template>
  <div class="page">
    <PageHead title="Analytics" subtitle="Dashboard" />
    <div>
      <graph :data="barChartData" :options="barChartOptions" :height="200" />
    </div>
  </div>
</template>

<script>
import PageHead from '@/components/PageHead';
import Graph from '@/components/Graph';
export default {
  layout: 'dashboard',
  components: {
    PageHead,
    Graph
  },

  data() {
    return {
      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03',
          '2020-04',
          '2020-05'
        ],
        datasets: [
          {
            label: 'Potential Criminal Activities Avoided',
            data: [10, 35, 25, 30, 20, 30, 20, 33, 34, 45, 51, 78, 85],
            backgroundColor: '#003f5c'
          },
          {
            label: 'Criminals detected',
            data: [30, 24, 57, 23, 68, 72, 25, 64, 133, 143, 165, 33, 56],
            backgroundColor: '#2f4b7c'
          },
          {
            label: 'Criminal Activities detected',
            data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
            backgroundColor: '#665191'
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Model Performance Data',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  }

};
</script>