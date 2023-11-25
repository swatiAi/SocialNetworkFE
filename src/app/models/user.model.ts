export interface User {
  email: string;
  friends: Array<{
    username: string;
    imgUrl: string;
    name: string;
  }>;
  imgUrl: string;
  name: string;
  username: string;
}
