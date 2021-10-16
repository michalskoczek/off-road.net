export class Event {
  constructor(
    public name: string,
    public location: string,
    public organizer: string,
    public type: string,
    public date: string,
    public cost: number,
    public description: string,
    public image: string,
    public participation: number[]
  ) {}
}
