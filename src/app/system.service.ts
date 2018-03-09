import { Injectable } from '@angular/core';
import { MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SystemService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
     
    private SystemUrl = 'api/system';  // URL to web api
    }

