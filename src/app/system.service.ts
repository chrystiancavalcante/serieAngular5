import { Injectable } from '@angular/core';
import { MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SystemService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
      /** Log a HeroService message with the MessageService */
    private log(message: string) {
    this.messageService.add('systemService: ' + message);
            }
    private SystemUrl = 'api/system';  // URL to web api
    }

