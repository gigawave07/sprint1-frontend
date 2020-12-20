import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
	public amountMoney = 0;
	public p = 1;
	public isChecked: boolean;
	public ticketStatusPaymentDTO = {id: 1, statusPaymentName: ''};
	public formTicketSearchDTO: FormGroup;
	public searchByValue = null;
	public message1: any;
	public showPaypalButton = true;

	constructor(
		private ticketService: TicketService,
		private dialog: MatDialog,
		public formBuilder: FormBuilder,
	) {
	}
	
	@ViewChild('paypalRef', {static : true}) private paypalRef: ElementRef;
	ngOnInit(): void {
		this.formTicketSearchDTO = this.formBuilder.group({
			statusPaymentName: ['Pending', [Validators.required]],
			searchBy: ['', [Validators.required]],
			searchValue: ['', [Validators.required]],
		});
		console.log(this.formTicketSearchDTO.value);
		console.log('this.ticketList');
		console.log(this.ticketList);
		paypal.Buttons(
			{
				style: {
					shape: 'rect',
					color: 'gold',
					layout: 'horizontal',
					label: 'paypal',
					tagline: true,
					height: 50
				},
				
				createOrder: (data, actions) => {
					// console.log('createOrder');
					// This function sets up the details of the transaction,
					// including the amount and line item details
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: this.amountMoney,
									currency_code: 'USD'
								}
							}
						]
					});
				},
				onCancel: function (data) {
					console.log('onCancel');
				},
				onApprove: (data, actions) => {
					return actions.order.capture().then(details => {
						console.log('Transaction completed');
						alert("Transaction completed");
						// @ts-ignore
						$("#paypalStatusPayment").click();
					});
				},
				onError: (data, actions) => {
					console.log('Transaction error');
				}
				
			}
		).render(this.paypalRef.nativeElement);
		
		
	}
	
	
	
	
	onCheckboxChange($event: Event, ticket: any) {
		// @ts-ignore
		this.isChecked = $event.target.checked;
		console.log(ticket.ticketCode + ' ' + this.isChecked);
		let ticketCode = ticket.ticketCode;
		console.log('ticketCode');
		console.log(ticketCode);
		if (this.isChecked) {
			this.payTicketList.push(ticket);
			
			this.amountMoney += ticket.flightInformation.price;
			this.amountMoney /= 23000;
			// this.renderPaypalButton();
			console.log('this.amountMoney');
			console.log(this.amountMoney);
			console.log(this.payTicketList);
		} else {
			// console.log('ticket');
			// console.log(ticket);
			// console.log('ticket.id');
			// console.log(ticket.id);
			this.payTicketList = this.payTicketList.filter(value => value !== ticket);
			this.amountMoney -= ticket.flightInformation.price;
			// this.renderPaypalButton();
			console.log('this.amountMoney');
			console.log(this.amountMoney);
			console.log(this.payTicketList);
		}
	}
	
	payTicket() {
		alert('click');
		
		for (let i=0; i<this.payTicketList.length;i++){
			this.ticketStatusPaymentDTO.id =this.payTicketList[i].id;
			this.ticketStatusPaymentDTO.statusPaymentName = 'Paid';
			console.log('this.ticketStatusPaymentDTO');
			console.log(this.ticketStatusPaymentDTO);
			this.ticketService.setTicketStatusPayment(this.ticketStatusPaymentDTO.id, this.ticketStatusPaymentDTO).subscribe(value => {
				console.log('payTicket ' + i);
			});
		}
		// this.ngOnInit();
		//
		window.location.reload();
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
			if (this.ticketList.length !== 0){
				this.showPaypalButton = false;
			}
		}, error => {
			this.ticketList = [];
			console.log('error searchTicket');
		});
		
		
		
	}

}
