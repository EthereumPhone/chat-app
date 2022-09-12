import {RootNavigationProps} from '@navigation';
import {makeObservable} from 'mobx';
import {injectable} from 'tsyringe';

@injectable()
export default class ConnectWalletViewModel {
  navigation?: RootNavigationProps<'Authentication'>['navigation'];

  constructor() {
    // makeObservable(this);
  }

  registerNavigation = (
    navigation: RootNavigationProps<'Authentication'>['navigation'],
  ) => {
    this.navigation = navigation;
  };

  register = () => {
    this.navigation?.navigate('Authenticated');
  };
}
