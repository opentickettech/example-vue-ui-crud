import { DataType, Model } from '@openticket/lib-crud';
import type { Parent, DataInterface, RawInterface } from '@openticket/lib-crud';

const ModelConfig = {
  guid: [ DataType.uuid, DataType.primary ],
  name: [ DataType.string ],
  email: [ DataType.string ],
  created_at: [ DataType.iso8601, DataType.readonly ],
};
type Config = typeof ModelConfig;

export type {
  Config as UserConfig,
};

export type UserRaw = RawInterface<Config>;
export type UserData = DataInterface<Config>;

export class User<Ancestor extends Parent> extends Model<Ancestor, Config> {

  get id(): string | null {
    return this.$data.guid || null;
  }

  $config(): Config {
    return ModelConfig;
  }

  $modelName(): string {
    return 'User';
  }

  // Just like the root relationships, relationships can be added to models as well.

}
