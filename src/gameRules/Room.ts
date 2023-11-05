export default class Room {
  private _roomId: number;
  private _tunnels: number[];

  private _hasBat: boolean;
  private _hasPit: boolean;

  constructor(
    roomId: number,

    room1: number,
    room2: number,
    room3: number

    // hasBat: boolean,
    // hasPit: boolean
  ) {
    this._roomId = roomId;
    this._tunnels = [room1, room2, room3];
    // this._hasBat = hasBat;
    // this._hasPit = hasPit;
  }
}
