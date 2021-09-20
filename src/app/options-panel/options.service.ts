export class OptionsPanelService {
  private options: string[] = ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'];
  private buttons: { routeName: string; buttonsName: string[] }[] = [
    {
      routeName: 'calendar',
      buttonsName: ['Nowe wydarzenie', 'Lista wydarzeń'],
    },
  ];

  getOptions() {
    return this.options.slice();
  }

  getButtons() {
    return this.buttons.slice();
  }
}
