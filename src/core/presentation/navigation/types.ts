import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootRoutes = {
  Authentication: undefined;
  Authenticated: undefined;
};

export type AuthenticationRoutes = {
  ConnectWallet: undefined;
};

export type AuthenticatedRoutes = {
  Conversations: undefined;
};

export interface RootNavigationProps<RouteName extends keyof RootRoutes> {
  navigation: NativeStackNavigationProp<RootRoutes, RouteName>;
  route: RouteProp<RootRoutes, RouteName>;
}
