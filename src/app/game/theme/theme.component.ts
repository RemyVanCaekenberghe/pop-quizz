import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  @Input()
  theme: string | undefined;
}
