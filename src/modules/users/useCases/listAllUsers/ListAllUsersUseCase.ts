import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user=this.usersRepository.findById(user_id);

    if(user.admin!==true){
      throw new Error("User not administrator!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
