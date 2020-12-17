import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TicketStatusPaymentDTO} from '../../model/TicketStatusPaymentDTO';

@Injectable({
	providedIn: 'root'
})
export class TicketService {
	public readonly API: string = 'http://localhost:8080/ticket';

	constructor(
		public http: HttpClient
	) {
	}

	getAllTicketService(): Observable<any> {
		return this.http.get(this.API + '/list');
	}

	deleteTicketService(idDelete: any): Observable<any> {
		return this.http.delete(this.API + '/delete/' + idDelete);
	}

	findTicketByIDService(idFind: any): Observable<any> {
		return this.http.get(this.API + '/findTicketByID/' + idFind);
	}

	// Đăng
	findAllPendingTicket(): Observable<any> {
		return this.http.get(this.API + '/list/Pending');
	}

	setTicketStatusPayment(id: number, ticketStatusPaymentDTO: TicketStatusPaymentDTO): Observable<any> {
		console.log(this.API + '/set-status-payment/' + id, ticketStatusPaymentDTO);
		return this.http.put(this.API + '/set-status-payment/' + id, ticketStatusPaymentDTO);
	}

	searchTicket(ticketSearchDTO: any): Observable<any> {
		// console.log('ticketSearchDTO');
		// console.log(ticketSearchDTO);
		console.log('URL');
		console.log(this.API + '/search?' + 'statusPaymentName=' + ticketSearchDTO.statusPaymentName +
			'&searchBy=' + ticketSearchDTO.searchBy + '&searchValue=' + ticketSearchDTO.searchValue);
		// return this.http.get(this.API + '/list/Pending');
		return this.http.get(this.API + '/search?' + 'statusPaymentName=' + ticketSearchDTO.statusPaymentName +
			'&searchBy=' + ticketSearchDTO.searchBy + '&searchValue=' + ticketSearchDTO.searchValue);
	}
}
