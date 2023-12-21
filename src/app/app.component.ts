import { Component } from '@angular/core';

interface ExternalLink {
  title: string,
  href: string,
  iconClass: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  siteTitle = 'Mastermind';
  siteSubtitle = 'Teste sua lógica';
  creditsText = 'Feito por Alisson Lewinski';

  externalLinks: ExternalLink[] = [{
    title: 'GitHub',
    href: 'https://github.com/alisson-ski',
    iconClass: 'fa-brands fa-square-github'
  },{
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alissonlewinski/',
    iconClass: 'fa-brands fa-linkedin'
  },{
    title: 'Site Principal',
    href: 'https://alisson-ski.github.io/',
    iconClass: 'fa-solid fa-square-arrow-up-right'
  }]
}
