import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {CidadesService} from 'projects/api/src/lib/cidades/cidades.service';
import {Cidade} from 'projects/api/src/lib/cidades/models/cidade';
import {QualidadeCidade} from 'projects/api/src/lib/cidades/models/qualidade-cidade';

@Component({
    selector: 'ctx-relatorios-detalhado',
    templateUrl: './relatorio-detalhado.component.html'
})
export class RelatorioDetalhadoComponent implements OnInit {
    inscricaoCidades: Subscription;
    inscricaoQualidades: Subscription;
    cidades: Cidade[] = [];
    qualidades: QualidadeCidade[] = [];
    dialogInformativa: boolean;

    constructor(private service: CidadesService) {
    }

    ngOnInit() {
        this.carregarDados();
    }

    showDialogInformativa() {
        this.dialogInformativa = true;
    }

    private carregarDados() {
        this.inscricaoCidades = this.service.obterTodas().subscribe(res => {
            res.map(cidade => {
                let entidade = new Cidade();

                entidade.id = cidade.id;
                entidade.nome = cidade.nome;

                this.cidades.push(entidade);
            })
        });

        this.inscricaoQualidades = this.service.obterQualidades().subscribe(res => {
            res.map((qualidade: any) => {
                let entidade = new QualidadeCidade();

                entidade.cidade = qualidade.city;
                entidade.primeiraAtualizacao = qualidade.firstUpdated;
                entidade.ultimaAtualizacao = qualidade.lastUpdated;
                entidade.parametros = qualidade.parameters;

                this.qualidades.push(entidade);
            })
        })
    };

    informacoesDesenvolvedores = [
        {
            texto: 'Gilberto é um profissional altamente qualificado na área de Tecnologia da Informação (TI) e programação. Sua jornada é marcada por uma paixão fervorosa pela inovação tecnológica e pela sustentablidade. Ele desempenhou um papel fundamental no desenvolvimento do projeto analítico sobre a qualidade do ar em cidades brasileiras que você encontra neste site.',
            imagem: 'gilberto.jpg',
            imagemTextoAlternativo: 'Gilberto Junior'
        },
        {
            texto: 'Carol é uma pessoa que adora jogar videogame e tem um grande interesse em tecnologia. Sua curiosidade é evidente, pois está sempre em busca de novos conhecimentos e desafios. Sua natureza criativa se destaca, principalmente, pelo gosto em criar soluções inovadoras e expressar a criatividade de diversas maneiras.',
            imagem: 'caroline.jpg',
            imagemTextoAlternativo: 'Caroline Carvalho'
        }
    ]
}