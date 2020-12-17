import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../../../service/ticket/ticket.service';
import {MatDialog} from '@angular/material/dialog';
import {CancelPendingTicketComponent} from '../../list-pending-ticket/cancel-pending-ticket/cancel-pending-ticket.component';

@Component({
	selector: 'app-search-pending-ticket',
	templateUrl: './search-pending-ticket.component.html',
	styleUrls: ['./search-pending-ticket.component.css']
})
export class SearchPendingTicketComponent implements OnInit {
	public ticketList = [];
	public payTicketList = [];
	public p = 1;
	public isChecked: boolean;
	public formTicketSearchDTO: FormGroup;
	public searchByValue = null;
	public message1: any;

	constructor(
		private ticketService: TicketService,
		private dialog: MatDialog,
		public formBuilder: FormBuilder,
	) {
	}

	ngOnInit(): void {
		this.formTicketSearchDTO = this.formBuilder.group({
			statusPaymentName: ['Pending', [Validators.required]],
			searchBy: ['', [Validators.required]],
			searchValue: ['', [Validators.required]],
		});
		console.log(this.formTicketSearchDTO.value);
		console.log('this.ticketList');
		console.log(this.ticketList);
		// this.ticketService.findAllPendingTicket().subscribe(value => {
		//      this.ticketList = value;
		//      // console.log('this.ticketList');
		//      // console.log(this.ticketList);
		//
		//    });
		// console.log(this.searchByValue);


	}

	onCheckboxChange($event: Event, ticket: any) {
		// @ts-ignore
		this.isChecked = $event.target.checked;
		console.log(ticket.ticketCode + ' ' + this.isChecked);
		if (this.isChecked) {
			this.payTicketList.push(ticket);
			console.log(this.payTicketList);

		} else {
			console.log('ticket');
			console.log(ticket);
			console.log('ticket.id');
			console.log(ticket.id);
			this.payTicketList = this.payTicketList.filter(value => value !== ticket);
			console.log(this.payTicketList);
		}
	}


	openCancelDialogTicket(ticket: any): void {
		const dialogRef = this.dialog.open(CancelPendingTicketComponent, {
			width: '500px',
			data: {dataCancel: ticket},
			disableClose: true
		});

		dialogRef.afterClosed().subscribe(result => {
			// this.ngOnInit();
			this.ticketService.searchTicket(this.formTicketSearchDTO.value).subscribe(data => {
				this.ticketList = data;
				console.log(this.ticketList);
			}, error => {
				this.ticketList = [];
				console.log('error searchTicket');
			});
		});
	}

	searchTicket() {
		console.log(this.formTicketSearchDTO.value);
		// this.ticketSearchDTO = this.formTicketSearchDTO.value;fvwefwe
		// console.log('this.ticketSearchDTO abc');
		// console.log(this.ticketSearchDTO);
		this.ticketService.searchTicket(this.formTicketSearchDTO.value).subscribe(data => {
			this.ticketList = data;
			console.log(this.ticketList);
		}, error => {
			this.ticketList = [];
			console.log('error searchTicket');
		});
	}

}
