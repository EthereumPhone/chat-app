import {makeObservable, observable} from 'mobx';
import {Conversation} from '../../domain/models';
import {injectable} from 'tsyringe';

@injectable()
export default class ConversationsViewModel {
  @observable conversations: Conversation[] = [];

  constructor() {
    makeObservable(this);
    this.getConversations();
  }

  getConversations = () => {
    this.conversations = [
      new Conversation(
        '0x3A341BB404E97708a9D8eBb7a1A4783332877209',
        'Hii',
        new Date(),
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5qNt163W2WKuIwTrYCVWOZxqotw8zxcm_w&usqp=CAU',
      ),
      new Conversation(
        '0x606229539482D3677E656D856f4233b205e748d7',
        'Hello',
        new Date(),
        'https://us.123rf.com/450wm/monomoon/monomoon2005/monomoon200500012/149195746-fantasy-game-pixel-art-cute-little-magic-dragon.jpg?ver=6',
      ),
      new Conversation(
        '0x0A6BfaA7e715Ad715a489f37E961496B1E58F1EA',
        'Wassup',
        new Date(),
        'https://i.pinimg.com/736x/e5/a0/a9/e5a0a90cfd5e038fd2e373b16982e0f5.jpg',
      ),
      new Conversation(
        '0x3A341BB404E97708a9D8eBb7a1A4783332877209',
        'Hii',
        new Date(),
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5qNt163W2WKuIwTrYCVWOZxqotw8zxcm_w&usqp=CAU',
      ),
      new Conversation(
        '0x606229539482D3677E656D856f4233b205e748d7',
        'Hello',
        new Date(),
        'https://us.123rf.com/450wm/monomoon/monomoon2005/monomoon200500012/149195746-fantasy-game-pixel-art-cute-little-magic-dragon.jpg?ver=6',
      ),
      new Conversation(
        '0x0A6BfaA7e715Ad715a489f37E961496B1E58F1EA',
        'Wassup',
        new Date(),
        'https://i.pinimg.com/736x/e5/a0/a9/e5a0a90cfd5e038fd2e373b16982e0f5.jpg',
      ),
      new Conversation(
        '0x3A341BB404E97708a9D8eBb7a1A4783332877209',
        'Hii',
        new Date(),
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5qNt163W2WKuIwTrYCVWOZxqotw8zxcm_w&usqp=CAU',
      ),
      new Conversation(
        '0x606229539482D3677E656D856f4233b205e748d7',
        'Hello',
        new Date(),
        'https://us.123rf.com/450wm/monomoon/monomoon2005/monomoon200500012/149195746-fantasy-game-pixel-art-cute-little-magic-dragon.jpg?ver=6',
      ),
      new Conversation(
        '0x0A6BfaA7e715Ad715a489f37E961496B1E58F1EA',
        'Wassup',
        new Date(),
        'https://i.pinimg.com/736x/e5/a0/a9/e5a0a90cfd5e038fd2e373b16982e0f5.jpg',
      ),
      new Conversation(
        '0x3A341BB404E97708a9D8eBb7a1A4783332877209',
        'Hii',
        new Date(),
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5qNt163W2WKuIwTrYCVWOZxqotw8zxcm_w&usqp=CAU',
      ),
      new Conversation(
        '0x606229539482D3677E656D856f4233b205e748d7',
        'Hello',
        new Date(),
        'https://us.123rf.com/450wm/monomoon/monomoon2005/monomoon200500012/149195746-fantasy-game-pixel-art-cute-little-magic-dragon.jpg?ver=6',
      ),
      new Conversation(
        '0x0A6BfaA7e715Ad715a489f37E961496B1E58F1EA',
        'Wassup',
        new Date(),
        'https://i.pinimg.com/736x/e5/a0/a9/e5a0a90cfd5e038fd2e373b16982e0f5.jpg',
      ),
    ];
  };
}
