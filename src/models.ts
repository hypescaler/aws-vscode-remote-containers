// This is a generated file. Modifications will be overwritten.
import { BaseModel, Optional } from 'cfn-rpdk';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;
    public static readonly TYPE_NAME: string = 'Hypescale::Devtools::Devinstance';

    UID: Optional<string>;
    InstanceType: Optional<string>;
    DiskSize: Optional<number>;
    Keypair: Optional<string>;
    SSH: Optional<string>;
}

