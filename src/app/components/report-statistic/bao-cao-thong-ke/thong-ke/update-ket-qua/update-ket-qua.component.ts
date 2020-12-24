import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ExcelService} from "../../../service/excel.service";
// @ts-ignore
import Chart = require('chart.js');

@Component({
  selector: 'app-update-ket-qua',
  templateUrl: './update-ket-qua.component.html',
  styleUrls: ['./update-ket-qua.component.css']
})
export class UpdateKetQuaComponent implements OnInit {

  constructor(
    public dialogStatistic: MatDialogRef<UpdateKetQuaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public excelService: ExcelService,
  ) { }

  ngOnInit() {
    const jsChart = new Chart('JsChart', {
      type: this.data.data1.type,
      data: {
        // tslint:disable-next-line:max-line-length
        labels: ['Số hãng', 'Số chuyến bay', 'Số chuyến bay nhiều nhất trong một ngày', 'Giá vé trung bình (Triệu đồng)'],
        datasets: [{
          label: 'Thống kê theo hãng.',
          // tslint:disable-next-line:max-line-length
          data: [this.data.data1.numberBrand, this.data.data1.numberFlight, this.data.data1.maxFlightInDistance, this.data.data1.avgPriceAllBrand / 100000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  printStatistic() {
    const dataExcel = [
          {
           'Số hãng': this.data.data1.numberBrand,
            'Số chuyến bay': this.data.data1.numberFlight,
            'Số chuyến bay nhiều nhất trong một ngày': this.data.data1.maxFlightInDistance,
            'Giá vé trung bình': this.data.data1.avgPriceAllBrand,
          }
        ];
    this.excelService.exportAsExcelFile(dataExcel, 'Thống kê');
  }
}
