
export class CreateUserDto {
  name: string;
  surname1: string;
  surname2?: string;
  email: string;
  password: string;

  accounts: string[];
}
