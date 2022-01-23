export type RootStackParamList = {
  HomeScreen: undefined;
  PlaylistScreen: { id: number | string };
};

export enum Routes {
  HomeScreen = 'HomeScreen',
  PlaylistScreen = 'PlaylistScreen',
}
