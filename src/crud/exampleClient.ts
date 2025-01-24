import { CrudRootNode, List, ToMany } from '@openticket/lib-crud';
import { User, type UserConfig } from "@/crud/exampleModel.ts";

export class ExampleClient extends CrudRootNode {

  // Define the base path for the API
  get $path(): 'https://auth.openticket.local/' {
    return 'https://auth.openticket.local/';
  }

  users = new ToMany<User<ExampleClient>, UserConfig, ExampleClient>(User, this, 'users').with(List);
}
