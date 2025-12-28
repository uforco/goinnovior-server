export interface jwtPayload {
  sub: string;
  email: string;
  provider: string;
}

export interface ValidateUser {
  email: string;
  password?: string;
  provider?: string;
  image?: string;
}

export interface GoogleValidateUser {
  id: string;
  email: string;
  provider: string;
  image: string;
}
