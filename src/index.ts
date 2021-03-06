import { ElementBaseDefinition, FieldSetBaseDefinition, Option, UIValidation } from 'sius-core-types';
export const SystemType_Base: ElementBaseDefinition = {Name: 'Type', Label: 'System Type', Type: 'input', Type2: 'text', ControlType: 'text', 
Size: 55, Default: '',
    Validations: [ 
        new UIValidation('Required', 'Required', 'is required'),
     ],
    AsyncValidations: [
    ],
    Options: []
};
export const SystemTypeName_Base: ElementBaseDefinition = {Name: 'Value', Label: 'Name', Type: 'input', Type2: 'text', ControlType: 'text', 
Size: 55, Default: '',
    Validations: [
        new UIValidation('Required', 'Required', 'is required')
    ],
    AsyncValidations: [],
    Options: []
};

export const SystemSubtype_Base: ElementBaseDefinition = {Name: 'Subtype', Label: 'System Sub-Type', Type: 'input', Type2: 'text', ControlType: 'text', 
Size: 55, Default: '',
    Validations: [
        new UIValidation('Required', 'Required', 'is required')
    ],
    AsyncValidations: [],
    Options: []
};

export const Description_Base: ElementBaseDefinition = {Name: 'Description', Label: 'Addl. Info', Type: 'input', Type2: 'text', ControlType: 'text', 
Size: 55, Default: '',
    Validations: [
    ],
    AsyncValidations: [],
    Options: []
};

export const SystemDefinitionFS: FieldSetBaseDefinition<ElementBaseDefinition> = 
new FieldSetBaseDefinition('SystemDefinition', 'FORMGROUP', 'SystemDefinition', 
[
    SystemType_Base,
    SystemTypeName_Base,
    SystemSubtype_Base,
    Description_Base

], '100%', '100%', [], [], [
    new UIValidation('Exists', 'Exists', 'already exists', ['Type', 'Value', 'SubType'])
]);

export interface SystemDefinition {
    Type: string;
    Value: string;
    SubType: string;
    Description: string;
}

export interface SystemDefinitionExists {
    Type: string;
    Value: string;
    SubType: string;
}

