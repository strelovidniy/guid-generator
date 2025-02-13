import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import environment from '../environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export default class AppComponent {
	public guids: string[] = [];

	constructor(
		private readonly http: HttpClient
	) { }
	
	public generateGuid() {
		this.http.get<string>(`${environment.apiUrl}guid/generate`).subscribe((guid: string): void => {
			this.guids.push(guid);

			// copy to clipboard
			const el = document.createElement('textarea');
			el.value = guid;
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
		});
	}
}
