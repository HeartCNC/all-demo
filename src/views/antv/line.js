import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import dayjs from 'dayjs'

const data = [
  {
    amount: 11900,
    count: 10
  },
  {
    amount: 23800,
    count: 200
  },
  {
    amount: 35700,
    count: 300
  },
  {
    amount: 47600,
    count: 400
  },
  {
    amount: 59500,
    count: 500
  },
  {
    amount: 71400,
    count: 1600
  },
  {
    amount: 83300,
    count: 700
  }
]

export default function (c) {
  const chart = new Chart({
    container: c,
    autoFit: true,
    // height: 500,
    // padding: [10, 10, 10, 10],
    // height: 500,
    // syncViewPadding: true,
  });

  chart.scale({
    count: {
      sync: true,
      nice: true,
    },
    death: {
      sync: true,
      nice: true,
    },
  });

  const ds = new DataSet();

  const dv1 = ds.createView().source(data);
  dv1.transform({
    type: 'map',
    callback: (row, i) => {
      const l = data.length
      row.date = dayjs().subtract(l - i, 'd').format('M月D日')
      return row;
    }
  });
  const view1 = chart.createView();
  view1.data(dv1.rows);
  view1.axis('date', {
    label: {
      offset: 4
    },
  });
  
  view1.axis('amount', {
    line: {},
    grid: null
  });
  view1.interval({
  }).position('date*amount').label('amount').color('#ffa7fe')
  
  view1.axis('count', {
    line: {
    },
    label: {
      offset: 4,
      style: {
        fill: '#83e7fd'
      }
    },
    grid: null
  });
  view1.line()
    .position('date*count')
    .label('count', {
      formatter: text => {
        return text
      },
      style: {
        fill: '#000fff'
      }
    })
    .color('#83e7fd')


  chart.render();
}
