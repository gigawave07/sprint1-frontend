import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FlightService} from '../../../service/flight-information/flight.service';

@Component({
  selector: 'app-search-flight-information',
  templateUrl: './search-flight-information.component.html',
  styleUrls: ['./search-flight-information.component.css']
})
export class SearchFlightInformationComponent implements OnInit {
  // Vé chiều đi chiều về
  ways = [{id: 1, name: 'Một chiều'}, {id: 2, name: 'Khứ hồi'}];
  // Tìm kiếm theo
  find = [{id: 'id', name: 'Đề xuất'}, {id: 'price', name: 'Giá (Thấp đến cao)'}, {
    id: 'departureTime',
    name: 'Thời gian khởi hành'
  },
    {id: 'airline', name: 'Hãng hàng không'}];
  // Form
  formSearch: FormGroup;
  listOneWay;
  listReturn;

  constructor(
    private formBuilder: FormBuilder,
    private flightServiceService: FlightService,
  ) {
  }

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      way: ['1'],
      departure: [''],
      arrival: [''],
      departureDate: [''],
      arrivalDate: [''],
      sort: ['id'],
      quantity: ['']
    });
  }

  search(flightTableHTML) {
    flightTableHTML.dateDeparture = this.formSearch.controls.departureDate.value;
    // Để lấy ngày tháng năm đi theo dạng dd/mm/yyyy
    const departureDate = new Date(this.formSearch.controls.departureDate.value).toLocaleDateString();
    // Lấy list Flight đi
    this.flightServiceService.search(0, this.formSearch.controls.departure.value, this.formSearch.controls.arrival.value,
      departureDate, this.formSearch.controls.sort.value).subscribe(data => {
      this.listOneWay = data.content;
      // Lấy list flight về
      if (this.formSearch.controls.way.value === '2') {
        flightTableHTML.dateArrival = this.formSearch.controls.arrivalDate.value;
        // Để lấy ngày tháng năm về theo dạng dd/mm/yyyy
        const arrivalDate = new Date(this.formSearch.controls.arrivalDate.value).toLocaleDateString();
        this.flightServiceService.search(0, this.formSearch.controls.arrival.value, this.formSearch.controls.departure.value,
          arrivalDate, this.formSearch.controls.sort.value).subscribe(data1 => {
          this.listReturn = data1.content;
        });
      }
    });
  }
}
