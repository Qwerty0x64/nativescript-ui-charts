import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { fromObject } from '@nativescript/core/data/observable';

let chartView;
const viewModel = fromObject({
  chartOptions: {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'Browser market shares at a specific website, 2014',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        // dataLabels: {
        //   enabled: true,
        //   format: '{point.name}',
        // },
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Browser share',
        data: [
          ['Firefox', 45.0],
          ['IE', 26.8],
          // {
          //   name: 'Chrome',
          //   y: 12.8,
          //   sliced: true,
          //   selected: true,
          // },
          ['Safari', 8.5],
          ['Opera', 6.2],
          ['Others', 0.7],
        ],
      },
    ],
  },
});

export function chartViewLoaded(args) {
  chartView = args.object;
  chartView.setOptions(viewModel.get('chartOptions'));
}

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;

  if (args.isBackNavigation) return;

  page.bindingContext = viewModel;
}

export function goBack(args) {
  args.object.page.frame.goBack();
}
