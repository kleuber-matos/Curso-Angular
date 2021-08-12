import { Component, OnInit } from '@angular/core';
import { Reuniao } from './reuniao.entity';
import { ReuniaoService } from './reuniao.service';

@Component({
  selector: 'app-reuniao',
  templateUrl: './reuniao.component.html',
  styleUrls: ['./reuniao.component.scss']
})
export class ReuniaoComponent implements OnInit {

  reunioes: Reuniao[];

   constructor(private reuniaoService: ReuniaoService) {}
  
  ngOnInit() {
    this.getReunioes();
  }

  // Chama o serviço para obtém todos os carros
  getReunioes() {
    this.reuniaoService.getReunioes().subscribe((reunioes: Reuniao[]) => {
      console.log(reunioes);
      this.reunioes = reunioes;
    });
  }
}
