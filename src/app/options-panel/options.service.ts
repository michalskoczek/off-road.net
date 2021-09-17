export class OptionsPanelService {
  private options: string[] = ['rajdy', 'wyprawy', 'turystyka', 'wyścigi'];

  getOptions() {
    return this.options.slice();
  }
}
