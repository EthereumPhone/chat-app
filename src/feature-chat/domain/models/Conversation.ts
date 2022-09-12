export default class Conversation {
  peerAddress: string;
  lastMessage: string;
  date: Date;
  profileImage?: string;

  constructor(
    peerAddress: string,
    lastMessage: string,
    date: Date,
    profileImage?: string,
  ) {
    this.peerAddress = peerAddress;
    this.lastMessage = lastMessage;
    this.date = date;
    this.profileImage = profileImage;
  }
}
